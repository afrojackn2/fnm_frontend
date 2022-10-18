import React, { useState } from "react";
import { MdSort } from "react-icons/md";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FilterListIcon from "@mui/icons-material/FilterList";
import Tooltip from "@mui/material/Tooltip";
import Data from "../../../mockJson/JobPostedData";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import "../../../css/Employer/JobPosted.css";
import UseFilter from "../../../components/Employer/UseFilters/UseFilter";
import BoostJob from "./BoostJob";
import EditPopup from "../../../components/Employer/EditPopup/EditPopup";
import DeletePopup from "../../../components/Employer/DeletePopup/DeletePopup";
import SharePopup from "../../../components/Employer/SharePopup/SharePopup";
import ViewJob from "../ViewJob/ViewJob";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function JobPosted() {
  const [isjobp, setisjobp] = useState([]);
  const [jobpostfilter, setJobPostFilter] = useState(false);
  const { mycreatedpost } = useSelector((state) => state.EmployerReducer);

  React.useEffect(() => {
    if (mycreatedpost && mycreatedpost.length !== 0) {
      setisjobp(mycreatedpost);
    }
  }, [mycreatedpost]);

  return (
    <div className="background_img">
      <div className="Job_posted_main_content">
        <JobSeekerdashboard />
        <div className="Job_Posted_content">
          <DashboardProfile />
          <div className="JobPosted">
            <div className="jobpost">
              <div className="Job-Head">
                <p
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={() => {
                    setJobPostFilter(true);
                  }}
                >
                  <Tooltip title="Filter Candidate list" arrow>
                    <FilterListIcon
                      color="warning"
                      sx={{ mr: 1, cursor: "pointer" }}
                    />
                  </Tooltip>
                  User Filter
                </p>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox sx={{ color: "#F7701d" }} />}
                    label="Select all"
                  />
                </FormGroup>

                {jobpostfilter && (
                  <UseFilter jobpostfilter={setJobPostFilter} />
                )}
              </div>
              <div className="Job-body">
                {isjobp &&
                  isjobp.length !== 0 &&
                  isjobp.map((Applyed, index) => (
                    <JobPostedFun key={index} {...Applyed} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobPostedFun(props) {
  const [jobBoost, setJobBoost] = useState(false);
  const [editJob, setEditJob] = useState(false);
  const [deleteJob, setDeleteJob] = useState(false);
  const [viewJob, setViewJob] = useState(false);
  const [iscity, setiscity] = useState([]);
  const nevigation = useNavigate();
  const [isscopedata, setisscopedata] = useState({});
  const [CTC, setCTC] = useState(null);

  const skills = useSelector((state) => state.AuthReducer.scope);
  const { industrytype, categorytype, cities, scope } = useSelector(
    (state) => state.CommonReducer
  );

  React.useEffect(() => {
    if (cities.length !== 0) {
      const cityname = cities.filter(
        (data) => data.CITY_ID === parseInt(props.JOB_LOCATION)
      );
      setiscity(cityname);
    }

    if (skills.length !== 0) {
      const fileterdata = skills.filter(
        (data) => data.SCOPE_ID === parseInt(props.DESIGNATION)
      );
      setisscopedata(fileterdata[0]);
    }
  }, [cities, skills]);

  let employerbtn = false;
  const { TYPE_OF_JOB, postdate, expireddate, DESIGNATION } = props;
  var newdegnation = JSON.parse(DESIGNATION);

  React.useEffect(() => {
    setCTC(JSON.parse(props.SALARY_ANNUM));
  }, []);

  const gotoreferpage = () => {
    nevigation("/referpage?jobid=" + props.JOB_ID);
  };

  const handlelisted = (e) => {
    if (e.target.value == 1) {
      nevigation("/acessfromdb", {
        state: { accept: true, shortlist: null, postid: props.JOB_ID },
      });
    }
    if (e.target.value == 2)
      nevigation("/acessfromdb", {
        state: { accept: null, shortlist: true, postid: props.JOB_ID },
      });
  };

  return (
    <div className="Job-card-Data">
      <div className="jobcard">
        <div className="card-top">
          <button className="BTN-Top" onClick={() => setEditJob(true)}>
            EDIT
          </button>
          {editJob && (
            <EditPopup
              closeBtn={setEditJob}
              CREATION_TYPE={props.CREATION_TYPE}
              JOB_ID={props.JOB_ID}
              POST_TYPE={props.POST_TYPE}
            />
          )}
          <button className="BTN-Top" onClick={() => setDeleteJob(true)}>
            DELETE
          </button>
          {deleteJob && (
            <DeletePopup closeDel={setDeleteJob} JOB_ID={props.JOB_ID} />
          )}
          <button className="BTN-Top" onClick={() => setJobBoost(true)}>
            BOOST JOB
          </button>
          {jobBoost && (
            <BoostJob
              closeboost={setJobBoost}
              JOB_ID={props.JOB_ID}
              USER_ID={props.USER_ID}
            />
          )}
          <button className="BTN-Top" onClick={gotoreferpage}>
            SHARE
          </button>
          {/* {shareJob && <SharePopup closeshare={setShareJob} />} */}

          <select
            className="BTN-Top"
            name="VIEW APPLICATIONS"
            id=""
            onChange={handlelisted}
          >
            <option>please select </option>
            <option value={1}>All Applied</option>
            <option value={2}>All Shortlisted</option>
          </select>
        </div>
        <div className="job-card-head">
          <h2>{props.COMPANY_NAME}</h2>
          <p>{props.createdAt}</p>
        </div>
        <div className="job-card-body">
          <p>{newdegnation && newdegnation.FIELD_NAME}</p>
          <p>{props.MODE_OF_WORK + " job"}</p>
          <p>{isscopedata && isscopedata.FIELD_NAME}</p>

          <p>
            {iscity &&
              iscity !== null &&
              iscity !== "null" &&
              iscity.length !== 0 &&
              `${iscity[0].CITY_NAME} , ${iscity[0].STATE_NAME} , ${iscity[0].COUNRTY_NAME}`}
          </p>

          <p>
            {CTC &&
            CTC.length !== 0 &&
            typeof parseInt(CTC) == "number"
              ? `near around ${CTC} LPA `
              : `between  ${CTC}  LPA`}
          </p>
        </div>
        <div className="job-card-foot">
          <button className="BTN-save" onClick={() => setViewJob(true)}>
            View
          </button>
          {viewJob && (
            <ViewJob
              closeview={setViewJob}
              jobdetails={props}
              employerbtn={employerbtn}
            />
          )}
          <p>{postdate}</p>
          <p>{expireddate}</p>
        </div>
      </div>
    </div>
  );
}
