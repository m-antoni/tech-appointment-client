import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../graphql/queries/ClientQueries';

export default function Client() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return 'Loading...';
  if (error) return <p>Something went wrong</p>;
  if (data) {
    console.log(data);
  }

  return <div>Client</div>;
}
