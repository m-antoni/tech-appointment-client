import { gql } from '@apollo/client';

const ADD_TECHNICIAN = gql`
  mutation addTechnician($name: String!, $email: String!, $phone: String!) {
    addTechnician(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

const UPDATE_TECHNICIAN = gql`
    mutation updateTechnician($id: ID!, $name: String!, $email: String!, $phone, phone!){
        updateTechnician(id: $id, name: $name, email: $email, phone: $phone){
            id
            name
            email
            phone
        }
    }
`;

const DELETE_TECHCNICIAN = gql`
    mutation deleteTechnician($id: ID!){
        deleteTechnician(id: ID!){
            id
            name
            email
            phone
        }
    }
`;

export { ADD_TECHNICIAN, UPDATE_TECHNICIAN, DELETE_TECHCNICIAN };
