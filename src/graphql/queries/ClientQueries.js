import { gql } from '@apollo/client';

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
      address
    }
  }
`;

export { GET_CLIENTS };
