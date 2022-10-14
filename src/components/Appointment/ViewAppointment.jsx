import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_APPOINTMENT } from '../../graphql/queries/AppointmentQueries';
import { FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

export default function ViewAppointment() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_APPOINTMENT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <h1 className="text-danger">Something went wrong...</h1>;

  return (
    <div className="row">
      <div className="d-flex justify-content-between pb-3">
        <Link className="btn btn-secondary" to={`/`}>
          Go Back
        </Link>
      </div>
      <div className="col-12">
        <div className="card border-secondary mb-3">
          <div className="card-body">
            <h4 className="card-title mb-3">
              <FiTool /> {data.appointment.title}
            </h4>
            <p className="card-text">
              Description: {data.appointment.description}
            </p>
            <p className="card-text">
              Schedule Date: {data.appointment.schedule_date}
            </p>
            <p className="card-text">
              Technician: {data.appointment.technician.name}
            </p>
            <p className="card-text">Client: {data.appointment.client.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
