import { useMutation } from '@apollo/client';
import { FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { DELETE_APPOINTMENT } from '../../graphql/mutations/AppointmentMutations';
import { GET_APPOINTMENTS } from '../../graphql/queries/AppointmentQueries';

export default function AppointmentRow({ appointment }) {
  const [deleteAppointment] = useMutation(DELETE_APPOINTMENT, {
    variables: { id: appointment.id },
    refetchQueries: [{ query: GET_APPOINTMENTS }],
  });

  return (
    <div className="card border-secondary mb-3">
      <div className="card-body">
        <h4 className="card-title">
          <FiTool /> {appointment.title}
        </h4>
        <p className="card-text">{appointment.description}</p>
        <p className="card-text">{appointment.schedule_date}</p>
      </div>
      <div className="d-flex justify-content-between p-3">
        <Link className="btn btn-secondary" to={`/${appointment.id}`}>
          View
        </Link>

        <button onClick={() => deleteAppointment()} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
