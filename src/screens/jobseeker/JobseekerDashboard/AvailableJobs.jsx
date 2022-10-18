import React from "react";
import "../../../css/jobseeker/Available.css";
import { useState } from "react";
import SharePopup from "../../../components/JobSeeker/JOBSeekercontent/SharePopup";
import HrpingPopup from "../../../components/JobSeeker/JOBSeekercontent/HrpingPopup";
import ApplyPopup from "../../../components/JobSeeker/JOBSeekercontent/ApplyPopup";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useDispatch, useSelector } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";
import {
  AppliedJobAction,
  getallpost,
  GetAppliedJob,
} from "../../../redux/action/JobSeekerAction";
import { get_savedjobs } from "../../../redux/action/EmployerAction";
import ResponsiveDialog from "../../../components/Confirmation/ResponsiveDialog";
import { ImageBackend } from "../../../config/Config";
import ViewJob from "../../Employer/ViewJob/ViewJob";
import ViewJobseekerjob from "../../Employer/ViewJob/ViewJobseekerjob";

export default function AvailableJobs() {
  const dispatch = useDispatch();
  const AvilableJob = useSelector((state) => state.JobseekerReducer.allpost);

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };
  React.useEffect(() => {
    dispatch(getallpost(Loading));
    dispatch(get_savedjobs(Loading, () => {}));
    dispatch(GetAppliedJob(Loading));
  }, []);

  return (
    <div>
      <div className="background_img">
        <div className="availjon_main">
          <JobSeekerdashboard />
          <div className="Job_Card_Content">
            <DashboardProfile />
            <div className="JOB-Seeker-Cards-Section">
              {AvilableJob &&
                AvilableJob.map((CardList, index) => (
                  <JobsListCards key={index} {...CardList} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobsListCards(props) {
  const [open, setOpen] = React.useState(false);
  const [shareFamily, setShareFamily] = useState(false);
  const [pingHr, setPingHr] = useState(false);
  const [applyJob, setApplyJob] = useState(false);
  const [isSaved, setisSaved] = useState(false);
  const [isSkills, setisSkills] = useState(null);
  const skills = useSelector((state) => state.AuthReducer.scope);
  const appliedpost = useSelector(
    (state) => state.JobseekerReducer.appliedpost
  );
  const savedjobs = useSelector((state) => state.EmployerReducer.savedjobs);
  const dispatch = useDispatch();
  const [isAppliedByMe, setisAppliedByMe] = useState(false);
  const [viewJob, setViewJob] = React.useState(false);

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };
  React.useEffect(() => {
    if (appliedpost.length !== 0) {
      const filter = appliedpost.filter(
        (option) => option.JOB_ID === props.B_ID
      );
      if (filter.length > 0) {
        setisAppliedByMe(true);
      }
    }
  }, [appliedpost]);

  const getskillname = () => {
    const arr = [];
    const newskill = JSON.parse(props.SKILLS);
    newskill &&
      newskill.length !== 0 &&
      newskill.map((data, index) => {
        const variableOne = skills.filter(
          (itemInArray) => itemInArray.SCOPE_ID === data
        );
        arr.push(variableOne);
      });
    setisSkills(arr);
  };
  React.useEffect(() => {
    getskillname();
  }, []);

  React.useEffect(() => {
    _checksaved();
  }, [savedjobs]);
  const _checksaved = () => {
    savedjobs.map((data, index) => {
      if (data.SAVE_JOB_ID === props.B_ID) {
        setisSaved(true);
      }
    });
  };
  const _savedJob = () => {
    const jsondata = {
      SAVE_JOB_ID: props.B_ID,
    };
    axiosInstance.post("employer/save-job", jsondata).then((result) => {
      if (result.data.status === 1) {
        setisSaved(true);
        toast.success(result.data.message);
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
    });
  };
  const getposts = () => {
    dispatch(getallpost(Loading));
  };
  const SubmitAnswer = (givenanswer) => {
    Loading(true)
    let array = [];
    Object.keys(givenanswer).forEach(function (key) {
      array.push(givenanswer[key])
    });
    const formData = new FormData();
    formData.append("JOB_ID", props.B_ID);
    formData.append("ANSWER_SUBBMITTED", JSON.stringify(array));
    dispatch(AppliedJobAction(formData, Loading, getposts));
    setApplyJob(false);
    Loading(false);
  };

  const handleClickOpen = () => {
    if (
      props.QUESTION &&
      props.QUESTION !== "" &&
      props.QUESTION.length !== 0
    ) {
      setApplyJob(true);
      setOpen(false);
    } else {
      const formData = new FormData();
      formData.append("JOB_ID", props.B_ID);
      formData.append("ANSWER_SUBBMITTED", "0");
      dispatch(AppliedJobAction(formData, Loading, getposts));
      toast.success("you have applied for job successfully");
    }
  };
  const EXPERIENCE = JSON.parse(props.EXPERIENCE);
  const CTC = JSON.parse(props.SALARY_ANNUM);

  return (
    <>
      <div className="JOB-Seeker-Card">
        <div className="JOB-Card">
          <div className="JOB-Name">
            <div>
              <h3>{props.B_ID + " . " + props.COMPANY_NAME.toUpperCase()}</h3>
              <h4>
                {EXPERIENCE &&
                  EXPERIENCE.length !== 0 &&
                  ` ${EXPERIENCE[0]} - ${EXPERIENCE[1]} Year`}
              </h4>
              <h4>{props.MODE_OF_WORK}</h4>
              <h4>
                {/* {isSkills && isSkills.length !== 0 && isSkills.map((data, index) => (
                <span>{data[0].FIELD_NAME} ,  
                </span>
              ))} */}
              </h4>
              <h4>
                {CTC && CTC.length !== 0 && ` ${CTC[0]} to ${CTC[1]}  CTC`}
              </h4>
            </div>
            <div>
              <img
                src={ImageBackend + props.IMAGE}
                alt=""
                srcset=""
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <div className="jobseeker_btns">
            <div className="Apply-JOB-Button">
              {isAppliedByMe ? (
                <button
                  className="Apply-JOB-BTN"
                  style={{ backgroundColor: "gray", color: "whitesmoke" }}
                  disabled
                >
                  Applied
                </button>
              ) : (
                <button
                  className="Apply-JOB-BTN"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Apply
                </button>
              )}
            </div>
            {isAppliedByMe ? null : (
              <div className="Reaction-Buttons">
                <button className="RB" onClick={() => setViewJob(true)}>
                  {" "}
                  <img src="jobseeker/eye.png" alt="" />{" "}
                </button>
                <button
                  className="RB"
                  onClick={() => {
                    setShareFamily(true);
                  }}
                >
                  <img src="jobseeker/share.png" alt="" />
                </button>
                {shareFamily && (
                  <SharePopup Share={setShareFamily} JOBID={props.ID} />
                )}

                <button
                  className="RBH"
                  onClick={() => {
                    setPingHr(true);
                  }}
                >
                  <img src="jobseeker/hr.png" alt="" />
                </button>
                {pingHr && <HrpingPopup Ping={setPingHr} email={props.EMAIL} />}

                {isSaved ? null : (
                  <button className="RBS" type="button" onClick={_savedJob}>
                    {" "}
                    <img src="jobseeker/saved.png" alt="" />{" "}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <ResponsiveDialog
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        textfile={"Do YOur Really Want To Apply For This Job"}
      />
      {applyJob && (
        <ApplyPopup
          Apply={setApplyJob}
          jobque={JSON.parse(props.QUESTION)}
          SubmitAnswer={SubmitAnswer}
        />
      )}

      {viewJob && (
        <ViewJobseekerjob
          closeview={setViewJob}
          jobdetails={props}
          employerbtn={false}
          setApplyJob={setApplyJob}
        />
      )}
    </>
  );
}
