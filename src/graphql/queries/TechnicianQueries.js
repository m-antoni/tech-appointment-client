import { gql } from '@apollo/client';

const GET_TECHNICIANS = gql`
  query getTechnicians {
    technicians {
      id
      name
      email
      phone
      appointments {
        id
        title
        description
        schedule_date
      }
    }
  }
`;

const GET_TECHNICIAN_NAMES = gql`
  query getTechnicians {
    technicians {
      id
      name
    }
  }
`;

export { GET_TECHNICIANS, GET_TECHNICIAN_NAMES };
