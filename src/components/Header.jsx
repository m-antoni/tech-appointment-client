import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  console.log(location);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          Tech Appointment
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href={'/technicians'}>
                Technicians
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={'/clients'}>
                Clients
              </a>
            </li>
          </ul>
          <div className="d-flex">
            {location.pathname === '/' && (
              <button
                className="btn btn-secondary my-2 my-sm-0"
                data-bs-toggle="modal"
                data-bs-target="#addAppointmentModal"
                type="submit"
              >
                Add New
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
