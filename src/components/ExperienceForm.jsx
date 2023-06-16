import { useNavigate } from "react-router-dom";
import CraeateNav from "./CraeateNav";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { experienceAction } from "../redux/action";

export const expInitialState={
designation:"",
company:"",
location:"",
start_month:"",
start_year:"",
end_month:"",
end_year:""
}

const ExperienceForm = () => {
     const Experience = useSelector((store) => store.Experience);
     const dispatch = useDispatch();
  const navigate = useNavigate();
  const [experience, setExperience] = useState(Experience);

  const {
    designation,
    company,
    location,
    start_month,
    start_year,
    end_month,
    end_year,
  } = experience;
   const HandleChange = (e) => {
    
     setExperience({ ...experience, [e.target.name]: e.target.value });
   };

   const HandleSave = (event) => {
     event.preventDefault();
    dispatch(experienceAction(experience));

   };
   console.log(experience)
  return (
    <div className="d-flex flex-sm-row gap-5">
      {" "}
      <CraeateNav />
      <div
        className="container-fluid"
        style={{ color: "#002d6b", marginTop: "20px" }}
      >
        <h1>Tell us about your professional experience</h1>
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          Start with your most recent experience and work backward.
        </p>
        <p>* indicates a required field</p>
        <form style={{ width: "90%" }} onSubmit={HandleSave}>
          <div className="row">
            <div className="col">
              <label>What was your Designation</label>
              <input
                name="designation"
                value={designation}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="Software Developer"
              />
            </div>
            <div className="col">
              <label>Company Name</label>
              <input
                name="company"
                value={company}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="Oracle India Pvt Ltd"
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-6">
              <label>Location</label>
              <input
                name="location"
                value={location}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="Delhi India"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label>Start Date</label>
              <select
                className="form-control border border-secondary py-2"
                placeholder="Month"
                name="start_month"
                value={start_month}
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
              <label htmlFor=""></label>
              <select
                name="start_year"
                value={start_year}
                onChange={HandleChange}
                className="form-control border border-secondary py-2"
              >
                <option value="Year">Year</option>
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
                <option value="2027">2011</option>
                <option value="2026">2010</option>
                <option value="2025">2009</option>
                <option value="2024">2008</option>
              </select>
            </div>
            <div className="col-3">
              <label>End Date</label>
              <select
                className="form-control border border-secondary py-2"
                placeholder="Month"
                name="end_month"
                value={end_month}
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
              <label></label>
              <select
                name="end_year"
                value={end_year}
                onChange={HandleChange}
                className="form-control border border-secondary py-2"
              >
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
                <option value="2027">2011</option>
                <option value="2026">2010</option>
                <option value="2025">2009</option>
                <option value="2024">2008</option>
              </select>
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
              onClick={() => navigate("/create/education")}
              className="btn btn-outline-secondary btn-lg px-5 border-2"
            >
              <BiArrowBack /> Back
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={() => navigate("/create/skills")}
              className="btn btn-primary btn-lg active px-5"
            >
              Next: Skills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;
