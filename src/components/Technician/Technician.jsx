import { useQuery } from '@apollo/client';
import { FiTool } from 'react-icons/fi';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import { GET_TECHNICIANS } from '../../graphql/queries/TechnicianQueries';
import ViewTechAppointmentModal from './ViewTechAppointmentModal';
import { useState } from 'react';

export default function Client() {
  const { loading, error, data } = useQuery(GET_TECHNICIANS);
  const [appointments, setAppointments] = useState([]);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <h3>Technicians</h3>
      <div className="row">
        {data.technicians.map((tech) => (
          <div className="col-md-6 col-12" key={tech.id}>
            <div className="card border-secondary mb-3">
              <div className="card-body">
                <h4 className="card-title">
                  <FiTool /> {tech.name}
                </h4>
                <p className="card-text">{tech.email}</p>
                <p className="card-text">{tech.phone}</p>
              </div>
              <div className="d-flex justify-content-between p-3">
                <Link
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewTechAppointment"
                  onClick={() => setAppointments(tech.appointments)}
                >
                  View Appointments
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ViewTechAppointmentModal appointments={appointments} />
    </>
  );
}
