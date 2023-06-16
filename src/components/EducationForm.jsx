import { useNavigate } from "react-router-dom";
import CraeateNav from "./CraeateNav";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { educationAction } from "../redux/action";

export const eduInitialState = {
  school_name: "",
  school_location: "",
  degree: "",
  field: "",
  month: "",
  year: "",
};

const EducationForm = () => {
   const Education = useSelector((store) => store.Education);
   const dispatch = useDispatch()
  const navigate = useNavigate();
  const [education, setEducation] = useState(Education);

  const { school_name, school_location, degree, field, month, year } =
    education;
  const HandleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const HandleSave = (event) => {
    event.preventDefault();
    dispatch(educationAction(education))
  };
  return (
    <div className="d-flex flex-sm-row gap-5">
      {" "}
      <CraeateNav />
      <div
        className="container-fluid"
        style={{ color: "#002d6b", marginTop: "20px" }}
      >
        <h1>Tell us about your education</h1>
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          Enter your education experience so far, even if you are a current
          student or did not graduate.
        </p>
        <p>* indicates a required field</p>
        <form style={{ width: "90%" }} onSubmit={HandleSave}>
          <div className="row">
            <div className="col">
              <label>School Name</label>
              <input
                name="school_name"
                value={school_name}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="e.g. Oxford Software School"
              />
            </div>
            <div className="col">
              <label>School Location</label>
              <input
                name="school_location"
                value={school_location}
                onChange={HandleChange}
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
                name="degree"
                value={degree}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="e.g. Btech"
              />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-6">
              <label>Field of Study</label>
              <input
                name="field"
                value={field}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="e.g. Financial Accounting"
              />
            </div>
            <div className="col-3">
              <label>Graduation Month</label>
              <select
                className="form-control border border-secondary py-2"
                placeholder="Month"
                name="month"
                value={month}
                onChange={HandleChange}
              >
                <option value="Month">Month</option>
                <option value="January">January</option>
                <option value="Feburary">Feburary</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="col-3">
              <label>Graduation Year</label>
              <select
                name="year"
                value={year}
                onChange={HandleChange}
                className="form-control border border-secondary py-2"
              >
                <option value="2027">2027</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2027">2019</option>
                <option value="2026">2018</option>
                <option value="2025">2017</option>
                <option value="2024">2016</option>
                <option value="2023">2015</option>
                <option value="2022">2014</option>
                <option value="2021">2013</option>
                <option value="2020">2012</option>
              </select>
            </div>
          </div>
        
          <div
            className="container-fluid"
            style={{ display: "flex", justifyContent: "center",marginTop:"30px" }}
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
          style={{ display: "flex", justifyContent: "space-between", alignItems:"center" ,width:"90%" }}
        >
          <div>
            {" "}
            <button
              type="button"
              onClick={() => navigate("/create")}
              className="btn btn-outline-secondary btn-lg px-5 border-2"
            >
              <BiArrowBack /> Back
            </button>
          </div>
          <div>
            {" "}
            <button
              type="button"
              onClick={() => navigate("/create/experience")}
              className="btn btn-primary btn-lg active px-5"
            >
              Next: Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
