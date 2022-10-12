import { useQuery } from '@apollo/client';
import { GET_TECHNICIANS } from '../graphql/queries/TechnicianQueries';

export default function Technician() {
  const { loading, error, data } = useQuery(GET_TECHNICIANS);

  if (loading) return 'Loading...';
  if (error) return <p>Something went wrong</p>;
  if (data) {
    console.log(data);
  }

  return <div>Technician</div>;
}
