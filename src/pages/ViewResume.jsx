import { useSelector } from "react-redux";
import "./view.css";
import { BiPhone, BiLocationPlus } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
const ViewResume = () => {
   const Education = useSelector((store) => store.Education);
     const Experience = useSelector((store) => store.Experience);
       const Contact = useSelector((store) => store.Contact);
        const Summary = useSelector((store) => store.Summary);
        const Skills = useSelector((store) => store.Skills);
      
       console.log(Experience.end_month)
  return (
    <div className="page">
      <div className="row m-0 p-0">
        {/* Heading and Contact */}
        <div className="col-5 m-0 p-4" style={{ backgroundColor: "#f2d7d6" }}>
          <h2>
            {Contact.first_name && Contact.last_name
              ? `${Contact.first_name} ${Contact.last_name}`
              : "YOUR NAME"}
          </h2>
          {Contact.phone && Contact.phone ? (
            <p>
              <BiPhone /> {Contact.phone}
            </p>
          ) : null}
          {Contact.email && Contact.email ? (
            <p>
              <AiOutlineMail /> {Contact.email}
            </p>
          ) : null}
          {Contact.country && Contact.country ? (
            <p>
              <BiLocationPlus />
              {Contact.country}, {Contact.city}, {Contact.pin}
            </p>
          ) : null}
        </div>
        {/* Professional Summary */}
        <div
          className="col-7 m-0"
          style={{ backgroundColor: "#faefef", padding: "25px 60px 15px 20px" }}
        >
          <h3>PROFESSIONAL SUMMARY</h3>
          <p style={{ overflow: "break-word", textAlign: "justify" }}>
            {Summary}
          </p>
        </div>
      </div>

      <div className="row m-0 p-0">
        {/* Left section for skills and education */}
        <div className="col-5 m-0 p-3" style={{ backgroundColor: "#faefef" }}>
          <div>
            {Skills && Skills ? <h4>SKILLS</h4> : null}
            <ul>
              {Skills && Skills.map((el, i) => <li key={i * 100}>{el}</li>)}
            </ul>
          </div>
          <div>
            {Education && Education ? <h5>EDUCATIONAL BACKGROUND</h5> : null}
            <h5>
              {Education.school_name} {Education.school_location}
            </h5>

            <h6>{Education.degree}</h6>
            <p>{Education.field}</p>
            <p>{Education.month + " " + Education.year}</p>
          </div>
        </div>
        {/* Right section for experience and project */}
        <div className="col-7 m-0 p-0">
          <div className="p-3">
            {Experience.company.length > 0 ? <h5>EXPERIENCE</h5> : null}
            <h5>{Experience.company + " " + Experience.location}</h5>
            <h6>{Experience.designation}</h6>
            <p>
              {Experience.start_month +
                " " +
                Experience.start_year +
                " " +
                Experience.end_month +
                " " +
                Experience.end_year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewResume
