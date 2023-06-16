import { useNavigate } from "react-router-dom";

//
const Home = () => {
    const navigate = useNavigate()
  return (
    <div
      className="d-flex flex-sm-row text-white gap-5"
      style={{ backgroundColor: "#092347" }}
    >
      <div style={{ width: "53%", height: "100%", padding: "30px 50px" }}>
        <h1 className="display-3">
          Make a Professional Resume With Our Free Online Resume Builder
        </h1>
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          The fastest and easiest resume maker! Build a resume in minutes and
          take your career to the next level. See our resume examples and find
          the right resume template to highlight your skills and experience.
          Save time and frustration in our one-stop shop for all your
          job-seeking needs to complement your professional resume!
        </p>
        <button
          onClick={() => navigate("/create")}
          className="btn btn-primary btn-lg active px-5 my-4"
        >
          Make a Resume
        </button>
      </div>
      <div style={{ padding: "4% 10px" }}>
        {" "}
        <img
          src="https://www.myperfectresume.com/wp-content/uploads/2022/11/resume-made-with-MyPerfectResume-resume-builder.svg"
          alt="Sample Image"
          className="img-fluid d-block "
        />
      </div>
    </div>
  );
}

export default Home
