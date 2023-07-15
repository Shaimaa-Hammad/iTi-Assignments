import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-warning bg-gradient fixed-top">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto fs-5">
        <li className="nav-item fw-semibold fs-4">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item px-lg-5 fw-semibold fs-4">
          <Link to="/add" className="nav-link">Add Movie</Link>
        </li>
      </ul>
    </div>
  </nav>
    );
};

export default Navbar;