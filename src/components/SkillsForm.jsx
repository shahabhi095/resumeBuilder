import { useNavigate } from "react-router-dom";
import CraeateNav from "./CraeateNav";
import { BiArrowBack } from "react-icons/bi";
const SkillsForm = () => {
    const navigate = useNavigate();
    const HandleSave = (event) => {
      event.preventDefault();
     // console.log(contact);
    };
  return (
    <div className="d-flex flex-sm-row gap-5">
      {" "}
      <CraeateNav />
      <div
        className="container-fluid"
        style={{ color: "#002d6b", marginTop: "20px" }}
      >
        <h1>What skills would you like to highlight?</h1>
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          Choose from our pre-written examples below or write your own.
        </p>
        <p>* indicates a required field</p>
        <form style={{ width: "90%" }} onSubmit={HandleSave}>
          <div className="row">
            <div className="col">
              <label>School Name</label>
              <input
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="e.g. Oxford Software School"
              />
            </div>
            <div className="col">
              <label>School Location</label>
              <input
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="e.g. New Delhi India"
              />
            </div>
          </div>

          <div className="row py-2">
            <div className="col-6">
              <label>Degree</label>
              <input
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="e.g. Btech"
              />
            </div>
          </div>

          <div
            className="container-fluid"
            style={{ display: "flex", justifyContent: "center", marginTop:"30px" }}
          >
           
            <div>
              <button type="submit" className="btn btn-primary btn-lg active">
                Save
              </button>
            </div>
          </div>
        </form>

        <div
          className="container-fluid mx-0 px-0 py-2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <div>
            {" "}
            <button
              onClick={() => navigate("/create/experience")}
              className="btn btn-outline-secondary btn-lg px-5 border-2"
            >
              <BiArrowBack /> Back
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={() => navigate("/create/summary")}
              className="btn btn-primary btn-lg active px-5"
            >
              Next: Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsForm;