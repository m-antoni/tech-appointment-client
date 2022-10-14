import { useQuery } from '@apollo/client';
import { FiUser } from 'react-icons/fi';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import { GET_CLIENTS } from '../../graphql/queries/ClientQueries';

export default function Client() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <h3>Clients</h3>
      <div className="row">
        {data.clients.map((client) => (
          <div className="col-md-6 col-12" key={client.id}>
            <div className="card border-secondary mb-3">
              <div className="card-body">
                <h4 className="card-title">
                  <FiUser /> {client.name}
                </h4>
                <p className="card-text">{client.email}</p>
                <p className="card-text">{client.phone}</p>
                <p className="card-text">{client.address}</p>
              </div>
              <div className="d-flex justify-content-between p-3">
                <Link
                  className="btn btn-secondary"
                  to={`/clients/${client.id}`}
                >
                  View Appointments
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
