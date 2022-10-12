import { useQuery } from '@apollo/client';
import { GET_APPOINTMENTS } from '../graphql/queries/AppointmentQueries';

export default function Appointment() {
  const { loading, error, data } = useQuery(GET_APPOINTMENTS);

  if (loading) return 'Loading...';
  if (error) return <p>Something went wrong</p>;
  if (data) {
    console.log(data);
  }

  return <div>Appointment</div>;
}
