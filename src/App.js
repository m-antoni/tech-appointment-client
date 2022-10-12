import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

// Components
import Appointment from './components/Appointment';
import Client from './components/Client';
import Technician from './components/Technician';

// Initialize
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API,
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Appointment />} />
            <Route path="/api/v1/client" element={<Client />} />
            <Route path="/api/v1/technician" element={<Technician />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
