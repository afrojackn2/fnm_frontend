import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import SideBar from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useSelector } from "react-redux";
import "./AllNotification.css";

export default function AllNotification() {
  const { user } = useSelector((state) => state.AuthReducer);
  const { blogposts } = useSelector((state) => state.CommonReducer);
  const [isbolog, setisbolog] = useState([]);

  var userVerify = () => {
    if (user && user.length !== 0 && user[0].USER_ROLE == 1) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    if (blogposts && blogposts.length !== 0) {
      setisbolog(blogposts);
    }
  }, [blogposts]);

  return (
    <>
      <div className="background_img">
        <div className="activity_container">
          {userVerify() ? <SideBar /> : <JobSeekerdashboard />}

          <div className="All_activity_content">
            <DashboardProfile />
            <div
              style={{
                height: "80vh",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-around",
                flexWrap: "wrap",
                paddingLeft: 0,
              }}
            >
              <div style={{ width: "100%" }}>
                <h1 style={{ textAlign: "center" }}>
                  {" "}
                  <u> Notification </u>{" "}
                </h1>
              </div>
              <br />
              {isbolog && isbolog.length !== 0 ? (
                isbolog.map((data, index) => (
                  <Notificationcard data={data} key={index} />
                ))
              ) : (
                <div>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Notificationcard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div style={{ marginBottom: "2rem", width: "100%", margin: "0 4%" }}>
      <div className="itemEmp">
        <div className="titleEmp">
          <h6 className="questionnoEmp"> &#x2022; this is my new file </h6>
        </div>
      </div>
    </div>
  );
};
