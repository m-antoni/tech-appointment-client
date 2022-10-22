import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { GET_TECHNICIAN } from '../../graphql/queries/TechnicianQueries';

export default function ViewTechAppointment() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_TECHNICIAN, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <h1 className="text-danger">Something went wrong...</h1>;

  return (
    <div className="row">
      <div className="d-flex justify-content-between pb-3">
        <Link className="btn btn-secondary" to={`/technicians`}>
          Go Back
        </Link>
      </div>
      <>
        <h3>Appointments</h3>
        <div className="row">
          {data.technician.appointments.length > 0 ? (
            data.technician.appointments.map((appointment) => (
              <div className="col-md-6 col-12" key={appointment.id}>
                <div className="card border-secondary mb-3">
                  <div className="card-body">
                    <h4 className="card-title">
                      <FiTool /> {appointment.title}
                    </h4>
                    <p className="card-text">{appointment.description}</p>
                    <p className="card-text">{appointment.schedule_date}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-danger text-center">
              -- No Appointments yet --{' '}
            </p>
          )}
        </div>
      </>
    </div>
  );
}
