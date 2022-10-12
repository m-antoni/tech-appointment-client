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
        receipt_no
        schedule_date
        service_type
      }
    }
  }
`;

export { GET_TECHNICIANS };
