import { useQuery } from '@apollo/client';
import { GET_APPOINTMENTS } from '../../graphql/queries/AppointmentQueries';
import Spinner from '../Spinner';
import AddAppointmentModal from './AddAppointmentModal';
import AppointmentRow from './AppointmentRow';

export default function Appointment() {
  const { loading, error, data } = useQuery(GET_APPOINTMENTS);
  if (loading) return <Spinner />;
  if (error) return <h1 className="text-danger">Something went wrong...</h1>;

  return (
    <div className="row">
      {data.appointments.map((appointment, key) => (
        <div className="col-md-6 col-12">
          <AppointmentRow appointment={appointment} key={key} />
        </div>
      ))}
      <AddAppointmentModal />
    </div>
  );
}
