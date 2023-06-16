import { useNavigate } from "react-router-dom";
import CraeateNav from "./CraeateNav";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { headingAction } from "../redux/action";

export const contactInitialState = {
  first_name: "",
  last_name: "",
  city: "",
  country: "",
  pin: "",
  phone: "",
  email: "",
};

const HeadingForm = () => {
  const  Contact  = useSelector((store) =>store.Contact);

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [contact, setContact] = useState(Contact);
const { first_name, last_name ,city, country, pin,phone,email} = contact;

const HandleChange=(e)=>{
setContact({...contact, [e.target.name]:e.target.value})
}

const HandleSave=(event)=>{
 event.preventDefault();
  dispatch(headingAction(contact));
}
  return (
    <div className="d-flex flex-sm-row gap-5">
      {" "}
      <CraeateNav />
      <div
        className="container-fluid"
        style={{ color: "#002d6b", marginTop: "20px" }}
      >
        <h1>What’s the best way for employers to contact you?</h1>
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          We suggest including an email and phone number.
        </p>
        <p>* indicates a required field</p>
        <form style={{ width: "90%" }} onSubmit={HandleSave}>
          <div className="row">
            <div className="col">
              <label>First Name</label>
              <input
                name="first_name"
                value={first_name}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <label>Last Name</label>
              <input
                name="last_name"
                value={last_name}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-6">
              <label>City</label>
              <input
                value={city}
                name="city"
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="City Name"
              />
            </div>
            <div className="col-4">
              <label>Country</label>
              <input
                name="country"
                value={country}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="Country Name"
              />
            </div>
            <div className="col-2">
              <label>Pincode</label>
              <input
                name="pin"
                value={pin}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="Pincode"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Phone</label>
              <input
                name="phone"
                value={phone}
                onChange={HandleChange}
                type="text"
                className="form-control border border-secondary py-2"
                placeholder="Phone Number"
              />
            </div>
            <div className="col">
              <label>Email</label>
              <input
                name="email"
                value={email}
                onChange={HandleChange}
                type="email"
                required={1}
                className="form-control border border-secondary py-2"
                placeholder="Email"
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
              disabled={1}
              className="btn btn-outline-secondary btn-lg px-5 border-2"
            >
              <BiArrowBack /> Back
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={() => {
                email.includes("@") ? navigate("/create/education") : null;
              }}
              className="btn btn-primary btn-lg active px-5"
            >
              Next: Education
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingForm;
