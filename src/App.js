import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Components
import Appointments from './components/Appointment/Appointments';

import Technician from './components/Technician/Technician';
import Header from './components/Header';
import ViewAppointment from './components/Appointment/ViewAppointment';
import Client from './components/Client/Client';
import ViewTechAppointment from './components/Technician/ViewTechAppointments';
import NotFound from './components/NotFound';

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
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Appointments />} />
              <Route path="/:id" element={<ViewAppointment />} />
              <Route path="/clients" element={<Client />} />
              <Route path="/technicians" element={<Technician />} />
              <Route path="/technician/:id" element={<ViewTechAppointment />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
