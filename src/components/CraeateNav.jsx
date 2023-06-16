import { Link } from "react-router-dom";

const CraeateNav = () => {
  return (
    <div
      className="text-center text-white"
      style={{ backgroundColor: "#092347", width: "20%", height: "100vh" }}
    >
      {" "}
      <nav className="nav flex-column gap-3 h5 my-4">
        <Link className="navbar-brand " to={"/create"}>
          Heading
        </Link>
        <Link className="navbar-brand" to={"/create/education"}>
          Education
        </Link>
        <Link className="navbar-brand" to={"/create/experience"}>
          Experience
        </Link>
        <Link className="navbar-brand" to={"/create/skills"}>
          Skills
        </Link>
        <Link className="navbar-brand" to={"/create/summary"}>
          Summary
        </Link>
      </nav>
    </div>
  );
}
export default CraeateNav