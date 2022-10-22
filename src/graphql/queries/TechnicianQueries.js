import { gql } from '@apollo/client';

const GET_TECHNICIANS = gql`
  query getTechnicians {
    technicians {
      id
      name
      email
      phone
    }
  }
`;

const GET_TECHNICIAN = gql`
  query getTechnician($id: ID!) {
    technician(id: $id) {
      id
      name
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
  query getTechnicianNames {
    technicians {
      id
      name
    }
  }
`;

export { GET_TECHNICIANS, GET_TECHNICIAN_NAMES, GET_TECHNICIAN };
