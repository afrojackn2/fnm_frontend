import React, { useState } from "react";
import ApplyData from "../../../mockJson/AppliedData"
// import Background from "../assets/background.png"
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import "../../../css/jobseeker/AppliedJob.css"
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
export default function AppliedJob() {

  const [isAppliedjobs, setisAppliedjobs] = React.useState([]);

  React.useEffect(() => {
    axiosInstance.get('jobseeker/ApplyJob').then((result) => {
      if (result.data.status == 1) {
        setisAppliedjobs(result.data.data);
      }
      if (result.data.status == 0) {
        toast.error("Somthing Went Wrong!")
      }

    })

  }, [])

  return (
    <>
      <div className="background_img">

        <div className="applied_main_job">
          <JobSeekerdashboard />
          <div className="Applied_Job_content">
            <DashboardProfile />
            <div className="Applied_jobs">
              <div></div>
              <div className="Applied-Job-Cards-Section">
                {isAppliedjobs && isAppliedjobs.length !== 0 && isAppliedjobs.map((AppliedJob, index) => (
                  <ApplyJobsData key={index} {...AppliedJob} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}







function ApplyJobsData(props) {

  const EXPERIENCE = JSON.parse(props.EXPERIENCE);
  const CTC = JSON.parse(props.SALARY_ANNUM);
  const [isSkills, setisSkills] = useState(null);
  const skills = useSelector((state) => state.AuthReducer.scope);



  const getskillname = () => {
    const arr = [];
    const newskill = JSON.parse(props.SKILLS);
    newskill.map((data, index) => {
      const variableOne = skills.filter(itemInArray => itemInArray.SCOPE_ID === data);
      arr.push(variableOne);
    })
    setisSkills(arr);
  }

  React.useEffect(() => { getskillname() }, [])

  return (
    <div className="Job-Applied-Card">
      <div className="Job-Applied">
        <div className="job_applied_container">
          <div className="JOB-applied-Comp">
            <h3>{props.ID + " . " + props.COMPANY_NAME.toUpperCase()}</h3>
            <h4>{`${EXPERIENCE[0]} - ${EXPERIENCE[1]} Year`}</h4>
            <h4>{props.MODE_OF_WORK}</h4>

            
            {/* <h4>{isSkills && isSkills.map((data, index) => (
              <span>{data[0].FIELD_NAME} ,  </span>
            ))}</h4> */}

            <h4>{CTC && ` ${CTC[0]} to ${CTC[1]}  CTC`}</h4>

          </div>
          <div className="Applied-JOB-Button">
            <button className="Applied_job_btn">Applied</button>
          </div>
        </div>
        <div className="Applied_bookmark_img">
          <img src="jobseeker/Applied.png" alt="" />
        </div>
      </div>
    </div>
  );
}
