import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import "./CreateCV.css";
import "../../../../css/jobseeker/CreateCV.css";
import Button from "@mui/material/Button";
import Certification from "../../ResumeBuildByOwn/Certification";
import PersonalDetail from "../../ResumeBuildByOwn/PersonalDetail";
import Educations from "../../ResumeBuildByOwn/Educations";
import Employment from "../../ResumeBuildByOwn/Employment";
import Skills from "../../ResumeBuildByOwn/Skills";
import Industry from "../../ResumeBuildByOwn/Industry";
import Template1 from "../Templates/Template1/Template1";
import Template2 from "../Templates/Template2/Template2";
import Template3 from "../Templates/Template3/Template3";
export default function CreateCV() {
  const [personalDetails, setPersonalDetails] = useState(false);
  const [education, setEducation] = useState(false);
  const [employment, setEmployment] = useState(false);
  const [industry, setIndustry] = useState(false);
  const [skills, setSkills] = useState(false);
  const [certification, setCertification] = useState(false);
  return (
    <div className="createcv_container">
      <div className="sidebarcreatecv">
        <div className="createCV-SideBar">
          <img src="jobseeker/fmnlogo.svg" alt="_"></img>
          <div className="DropDown-CategoryCV">
            <button className="DropDown-CategoryCV-BTN">
              Fill the Details
            </button>
          </div>

          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setPersonalDetails(true)}
            >
              Personal Details
              <AddCircleIcon />
            </button>
          </div>
          {personalDetails && (
            <PersonalDetail PersonalDetail={setPersonalDetails} />
          )}
          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setEducation(true)}
            >
              Education
              <AddCircleIcon />
            </button>
            {education && <Educations educations={setEducation} />}
          </div>
          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setEmployment(true)}
            >
              Employement
              <AddCircleIcon />
            </button>
            {employment && <Employment employments={setEmployment} />}
          </div>
          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setIndustry(true)}
            >
              Industry
              <AddCircleIcon />
            </button>
            {industry && <Industry industries={setIndustry} />}
          </div>
          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setSkills(true)}
            >
              Skills
              <AddCircleIcon />
            </button>
            {skills && <Skills skill={setSkills} />}
          </div>
          <div className="DropDown-CategoryCV">
            <button
              className="DropDown-CategoryCV-BTN"
              onClick={() => setCertification(true)}
            >
              Certifications
              <AddCircleIcon />
            </button>
            {certification && (
              <Certification certifications={setCertification} />
            )}
          </div>
          <div className="DropDown-CategoryCV">
            <button className="DropDown-CategoryCV-BTN">
              Add More
              <AddCircleIcon />
            </button>
          </div>
        </div>
        <div className="createcv_btn_grp">
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#F7701D",
              color: "#FFFFF",
              "&:hover": { backgroundColor: "#F7701D" },
            }}
          >
            Create My CV
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#F7701D",
              color: "#FFFFF",
              "&:hover": { backgroundColor: "#F7701D" },
            }}
          >
            Download CV
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#F7701D",
              color: "#FFFFF",
              "&:hover": { backgroundColor: "#F7701D" },
            }}
          >
            Choose Templates
          </Button>
        </div>
      </div>
      <div className="createcv_img">
        <Template1/>
      
      </div>
    </div>
  );
}
