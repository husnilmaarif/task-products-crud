import { Link } from "react-router-dom";
import "./index.scss";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow">
      <div className="container">
        <a className="navbar-brand" href="#">
          React x Express
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link exact to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
            <Link to="/tambah" className="nav-link">
              Tambah
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
