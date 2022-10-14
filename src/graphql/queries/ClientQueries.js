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

const GET_CLIENT_NAMES = gql`
  query getClients {
    clients {
      id
      name
    }
  }
`;

export { GET_CLIENTS, GET_CLIENT_NAMES };
