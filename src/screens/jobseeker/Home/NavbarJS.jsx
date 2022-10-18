import React, { useState } from 'react'
import "../../../css/jobseeker/Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SpecialServiceCard from "./SpecialServiceCard";
import jwt_decode from "jwt-decode";

export default function NavbarJS() {
  const [hamberger, setHamberger] = useState(false);
  const [isDashboard, setDashboard] = useState(false);
  const toggle = () => setHamberger(!hamberger);
  const [isAuth, setAuth] = React.useState(false);
  const [age, setAge] = React.useState("");
  const [popup, setPopup] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleOnClick = () => {
    setPopup(true);
  };

  React.useEffect(() => {
    var mytoken = sessionStorage.getItem("token");
    if (mytoken) {
      let decodedToken = jwt_decode(mytoken);
      setAuth(true);
      if (decodedToken.type == 1) setDashboard("/createjobpost");
      if (decodedToken.type == 2) setDashboard("/availablejobs");
    }
  }, []);

  return (
    <div>
      <div className="Navbar">
        <div
          className={hamberger ? "navbarResponsive" : "navbar"}
          onClick={() => setHamberger(false)}
        >
          <Link to="/">
            <img
              src="jobseeker/fmnlogo.svg"
              alt="_"
            />
          </Link>
          <Link to="/">Job</Link>
          <Link to="/JobseekerSubscription">Subscriptions</Link>
          <h4 className="special_fmn" onClick={handleOnClick}>
            Specialised FMN Service
          </h4>
          {popup && <SpecialServiceCard Popup={setPopup} />}
          <Link to="#referal">Referral</Link>
          <a href="/FaqTab">FAQ</a>
          <Link to="/blogposts">Blogs</Link>
          <a href="#contact">Contact</a>
          <Link to="/employerhome">Employer</Link>
          {!isAuth && (
            <Link to="/Signuplogin" className="Next_Page">
              <button>Register / Login</button>
            </Link>
          )}
          {isAuth && (
            <Link to={isDashboard}>
              <button type="button">Dashboard</button>
            </Link>
          )}
        </div>
        <button className="mobile_menu_icon" onClick={toggle}>
          {hamberger ? "X" : <FaBars />}
        </button>
      </div>
    </div>
  )
}
