import { gql } from '@apollo/client';

const GET_APPOINTMENTS = gql`
  query get_appointments {
    appointments {
      id
      receipt_no
      schedule_date
      service_type
      client {
        id
        name
        email
        phone
        address
      }
      technician {
        id
        name
        email
        phone
      }
    }
  }
`;

export { GET_APPOINTMENTS };
