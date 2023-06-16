import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-0 px-5">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item active mx-3">
              <Link className="navbar-brand" to={"/create"}>
                Create/Edit
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="navbar-brand" to="/view">
                Preview
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary btn-lg active">Download</button>
      </nav>
    </div>
  );
}

export default Navbar
