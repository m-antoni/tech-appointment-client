import { useQuery } from '@apollo/client';
import { GET_CLIENT_NAMES } from '../../graphql/queries/ClientQueries';
import { GET_TECHNICIAN_NAMES } from '../../graphql/queries/TechnicianQueries';

export default function AddAppointmentModal() {
  const clients = useQuery(GET_CLIENT_NAMES);
  const technicians = useQuery(GET_TECHNICIAN_NAMES);

  return (
    <div className="modal fade" id="addAppointmentModal" tabindex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal-title">Add Appointment</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <label className="form-label">Title</label>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label className="form-label">Description</label>
                <textarea class="form-control" rows={3}></textarea>
              </div>
              <div class="mb-3">
                <label className="form-label">Schedule Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  aria-describedby=""
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Technician</label>
                <select class="form-select" aria-label="Default select example">
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
                <select class="form-select" aria-label="Default select example">
                  <option selected>Choose...</option>
                  {clients.data?.clients.map((client) => (
                    <option value={client.id} key={client.id}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
