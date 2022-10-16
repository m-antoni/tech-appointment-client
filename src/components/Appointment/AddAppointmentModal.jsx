import { useMutation, useQuery } from '@apollo/client';
import { useRef } from 'react';
import { useState } from 'react';
import { GET_CLIENT_NAMES } from '../../graphql/queries/ClientQueries';
import { GET_TECHNICIAN_NAMES } from '../../graphql/queries/TechnicianQueries';
import { ADD_APPOINTMENT } from '../../graphql/mutations/AppointmentMutations';
import { GET_APPOINTMENTS } from '../../graphql/queries/AppointmentQueries';

export default function AddAppointmentModal() {
  const closeRef = useRef();
  const [form, setForm] = useState({
    title: '',
    description: '',
    schedule_date: '',
    technician_id: '',
    client_id: '',
  });

  const clients = useQuery(GET_CLIENT_NAMES);
  const technicians = useQuery(GET_TECHNICIAN_NAMES);
  const [addAppointment] = useMutation(ADD_APPOINTMENT, {
    variables: {
      title: form.title,
      description: form.description,
      schedule_date: form.schedule_date,
      technician_id: form.technician_id,
      client_id: form.client_id,
    },
    update(cache, { data: { addAppointment } }) {
      const { appointments } = cache.readQuery({ query: GET_APPOINTMENTS });
      cache.writeQuery({
        query: GET_APPOINTMENTS,
        data: { appointments: [...appointments, addAppointment] },
      });
    },
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const { title, description, schedule_date, technician_id, client_id } =
      form;

    if (
      title === '' ||
      description === '' ||
      schedule_date === '' ||
      technician_id === '' ||
      client_id === ''
    ) {
      alert('All fields are requried, please fill in all the fields.');
    } else {
      // graphql
      addAppointment();

      // Reset inputs
      setForm({
        title: '',
        description: '',
        schedule_date: '',
        technician_id: '',
        client_id: '',
      });

      // close modal
      closeRef.current.click();
    }
  };

  return (
    <div className="modal fade" id="addAppointmentModal" tabindex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal-title">Add Appointment</h5>
            <button
              type="button"
              data-bs-dismiss="modal"
              ref={closeRef}
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={onFormSubmit}>
              <label className="form-label">Title</label>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  onChange={onChangeInput}
                />
              </div>
              <div class="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  class="form-control"
                  onChange={onChangeInput}
                  rows={3}
                ></textarea>
              </div>
              <div class="mb-3">
                <label className="form-label">Schedule Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  name="schedule_date"
                  onChange={onChangeInput}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Technician</label>
                <select
                  name="technician_id"
                  class="form-select"
                  onChange={onChangeInput}
                >
                  <option selected>Choose...</option>
                  {technicians.data?.technicians.map((tech) => (
                    <option value={tech.id} key={tech.id}>
                      {tech.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Client</label>
                <select
                  name="client_id"
                  class="form-select"
                  onChange={onChangeInput}
                >
                  <option selected>Choose...</option>
                  {clients.data?.clients.map((client) => (
                    <option value={client.id} key={client.id}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" class="btn btn-primary">
                Add Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
