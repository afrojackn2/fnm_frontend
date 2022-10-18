import React from "react";
import "../../../css/Employer/Employerhomebanner1.css";
import Button from "@mui/material/Button";

export default function Employerhomebanner1() {
  return (
    // <div>
    <div className="employerheader">
      <div className="left_employee_header">
        <div className="box_b1">
       
          <h1 className="reducehiring">Reduce your hiring time by upto 50 %</h1>
          {/* <p>or</p>
          <h1 className="reducehiring">Cut hiring time by half</h1>
<p>or</p>
<h1 className="reducehiring">Hire Great Employees</h1> */}

          <h3>
          Let Find My Next help you with quick talent acquisition! We ensure 100% genuine profiles.          </h3>
          <Button sx={{mt:4,mb:4,backgroundColor:"#F7701D",textTransform:"none","&:hover": {
      backgroundColor: '#F7701d'
    }}} variant="contained">Get Started</Button>
        </div>
      </div>
      <div className="right_employee_header">
        <div className="right_img"></div>
      </div>
    </div>
  );
}
