import { useNavigate } from "react-router-dom";
import CraeateNav from "./CraeateNav";
 import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { summaryAction } from "../redux/action";

const Summary = () => {
  const Summary = useSelector((store)=>store.Summary)
  const dispatch = useDispatch()
   const navigate = useNavigate();
   const [summary, setSummary] = useState(Summary);
    const HandleSave = () => {
    dispatch(summaryAction(summary));

    };
    const HandleChange=(e)=>{
      setSummary(e.target.value)
    }
  return (
    <div className="d-flex flex-sm-row gap-5">
      {" "}
      <CraeateNav />
      <div
        className="container-fluid"
        style={{ color: "#002d6b", marginTop: "20px" }}
      >
        <h1>Briefly tell us about your background</h1>
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          Choose from our pre-written examples below or write your own.
        </p>
        <div className="form-group green-border-focus" style={{ width: "90%" }}>
          <label className="py-3">Colorful border on :focus state</label>
          <textarea
            className="form-control py-2"
            id="exampleFormControlTextarea5"
            rows="6"
            cols="50"
            value={summary}
            onChange={HandleChange}
          ></textarea>
        </div>
        <div
          className="container-fluid py-5 px-0 m-0"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <div>
            {" "}
            <button
              onClick={() => navigate("/create/skills")}
              className="btn btn-outline-secondary btn-lg px-5 border-2"
            >
              <BiArrowBack /> Back
            </button>
          </div>
          <div>
            <button
              onClick={HandleSave}
              type="button"
              className="btn btn-primary btn-lg active"
            >
              Save
            </button>
          </div>
          <div>
            {" "}
            <button onClick={()=>navigate("/view")} className="btn btn-primary btn-lg active px-5">
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary
