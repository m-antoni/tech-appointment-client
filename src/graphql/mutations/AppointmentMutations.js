import { gql } from '@apollo/client';

const ADD_APPOINTMENT = gql`
  mutation addAppointment(
    $title: String!
    $description: String!
    $schedule_date: String!
    $technician_id: ID!
    $client_id: ID!
  ) {
    addAppointment(
      title: $title
      description: $description
      schedule_date: $schedule_date
      technician_id: $technician_id
      client_id: $client_id
    ) {
      id
      title
      description
      schedule_date
      technician {
        id
        name
        email
        phone
      }
      client {
        id
        name
        email
        phone
        address
      }
    }
  }
`;

const UPDATE_APPOINTMENT = gql`
  mutation updateAppointment(
    $id: ID!
    $title: String!
    $description: String!
    $schedule_date: String!
    $technician_id: ID!
    $client_id: ID!
  ) {
    id
    title
    description
    schedule_date
    technician {
      id
      name
      email
      phone
    }
    client {
      id
      name
      email
      phone
      address
    }
  }
`;

const DELETE_APPOINTMENT = gql`
  mutation deleteAppointment($id: ID!) {
    deleteAppointment(id: $id) {
      id
      title
      description
      schedule_date
    }
  }
`;

export { ADD_APPOINTMENT, UPDATE_APPOINTMENT, DELETE_APPOINTMENT };
