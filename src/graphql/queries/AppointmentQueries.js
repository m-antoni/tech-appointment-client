import { gql } from '@apollo/client';

const GET_APPOINTMENTS = gql`
  query get_appointments {
    appointments {
      id
      title
      description
      schedule_date
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

const GET_APPOINTMENT = gql`
  query get_appointment($id: ID!) {
    appointment(id: $id) {
      title
      description
      schedule_date
      client {
        id
        name
      }
      technician {
        id
        name
      }
    }
  }
`;

export { GET_APPOINTMENTS, GET_APPOINTMENT };
