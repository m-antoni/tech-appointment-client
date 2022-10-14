import { FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function AppointmentRow({ appointment }) {
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
      </div>
    </div>
  );
}
