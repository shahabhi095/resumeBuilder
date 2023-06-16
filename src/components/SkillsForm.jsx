import { useNavigate } from "react-router-dom";
import CraeateNav from "./CraeateNav";
import { BiArrowBack } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { skillsAction } from "../redux/action";
const SkillsForm = () => {

  const Skills = useSelector((store)=>store.Skills)
  const dispatch = useDispatch()

  const [skills, setSkills] = useState(Skills);
  const [addSkills, setAddSkills] = useState("")

    const navigate = useNavigate();
console.log(skills)
    const HandleSave = (event) => {
      event.preventDefault();
     dispatch(skillsAction(skills))
    };
const HandleRemove=(item,id)=>{
 const arr = skills.filter((el,i)=>el!=item && i!=id)
 setSkills(arr)
}
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
          Write your own skills and click on add button.
        </p>

        <div style={{ width: "90%" }}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text py-3">Add your Skills</span>
            </div>
            <input
              type="text"
              aria-label="Enter skills"
              className="form-control"
              value={addSkills}
              onChange={(e) => setAddSkills(e.target.value)}
            />
            <button
              className="btn btn-primary btn-lg active"
              onClick={() => {
                setSkills([...skills, addSkills]);
                setAddSkills("");
              }}
            >
              ADD
            </button>
          </div>
        </div>

        <div
          className="container-fluid mx-0 px-0 py-3"
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <button
              onClick={() => navigate("/create/experience")}
              className="btn btn-outline-secondary btn-lg px-5 border-2"
            >
              <BiArrowBack /> Back
            </button>
          </div>
          <div>
            <button
              onClick={HandleSave}
              type="submit"
              className="btn btn-primary btn-lg active"
            >
              Save
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
        <div
          className="d-flex align-content-start flex-wrap gap-4"
          style={{
            width: "90%",
          }}
        >
          {skills &&
            skills.map((el, i) => (
              <h5 key={i * 1000} className="border border-dark p-2">
                {el} <RxCrossCircled onClick={() => HandleRemove(el, i)} />
              </h5>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsForm;