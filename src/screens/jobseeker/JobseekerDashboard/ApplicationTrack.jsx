import React from "react";
import "../../../css/jobseeker/ApplicationTrack.css";
import TrackData from "../../../mockJson/ApplicationTrackData";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useDispatch } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

export default function ApplicationTrack() {
  const [iscardData, setiscardData] = React.useState([]);
  const [istrackid, settrackid] = React.useState(null);

  const dispatch = useDispatch();
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  const handlesubmit = () => {
    Loading(true);
    axiosInstance.get("jobseeker/trackyourjob").then((res) => {
      setiscardData(res.data.data);
      Loading(false);
    });
  };

  React.useEffect(() => {
    handlesubmit();
  }, []);

  const settrackindfun = (value) => {
    settrackid(value);
  };

  const filterdata = (data) => {
    console.log(
      iscardData.filter(
        (itemInArray) => itemInArray.COMPANY_NAME === data.toString()
      )
    );
  };

  return (
    <>
      <div className="background_img">
        <div className="Track_your_job">
          <JobSeekerdashboard />
          <div className="Application_Track">
            <DashboardProfile />
            <div className="Application_track_container">
              <div
                className="inputsections"
                style={{ flexDirection: "row-reverse" }}
              >
                <input
                  type="text"
                  placeholder="enter the company name"
                  name="Jobs"
                  style={{
                    padding: "1.5vh",
                    width: "30%",
                    height: "5vh",
                  }}
                  onChange={(e) => {
                    filterdata(e.target.value);
                  }}
                />
              </div>
              <div className="TrackApplication_Cards_Section">
                {iscardData &&
                  iscardData.length !== 0 &&
                  iscardData.map((TrackCard, index) => (
                    <TrackListCards
                      key={index}
                      TrackCard={TrackCard}
                      settrackindfun={settrackindfun}
                    />
                  ))}
              </div>

              <Progressbar istrackid={istrackid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const TrackListCards = ({ TrackCard, settrackindfun }) => {
  const [isdesignation, setisdesignation] = React.useState([]);

  return (
    <>
      <div className="TrackData_Card">
        <div className="Track_Card">
          <div className="JOB_Name">
            <h2>
              {" "}
              <b>{TrackCard.COMPANY_NAME}</b>
            </h2>
            <h4>DESIGNATION :-{JSON.parse(TrackCard.DESIGNATION).FIELD_NAME}</h4>
          </div>
          <div className="JOB_info">
            <h4>
              TYPE OF JOB :- <b>{TrackCard.TYPE_OF_JOB}</b>
            </h4>
            <h4>
              APPLIED DATE :- <b>{TrackCard.APPLIEDDATE}</b>
            </h4>
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              settrackindfun(TrackCard.APPLICATION_STATUS);
            }}
          >
            Check Status
          </Button>
        </div>
      </div>
    </>
  );
};

export const Progressbar = ({ istrackid }) => {
  console.log(istrackid);
  return (
    <div className="progressbar_container">
      <h2>Application Status</h2>

      <div className="progressbar_track">
        {
          <>
            {parseInt(istrackid) == 0 ||
            parseInt(istrackid) == 1 ||
            parseInt(istrackid) == 2 ||
            parseInt(istrackid) == -1 ? (
              <>
                <div className="track_div">
                  <div className="track_icon_div"></div>
                  Applied
                </div>

                <hr className="jobtrackprocess" />
                <div className="track_div">
                  <div className="track_icon_div"></div>
                  Application Sent
                </div>
              </>
            ) : null}
            {parseInt(istrackid) == 1 ||
            parseInt(istrackid) == 2 ||
            parseInt(istrackid) == -1 ? (
              <>
                <hr className="jobtrackprocess" />
                <div className="track_div">
                  <div className="track_icon_div"></div>
                  Application Viewed
                </div>
              </>
            ) : null}

            {parseInt(istrackid) == 2 ? (
              <>
                <hr className="jobtrackprocess" />
                <div className="track_div_last">
                  <div className="track_icon_div"></div>
                  Shortlisted
                </div>
              </>
            ) : null}

            {parseInt(istrackid) == -1 && (
              <>
                <hr
                  className="jobtrackprocess"
                  style={{ backgroundColor: "red" }}
                />
                <div className="track_div_last">
                  <div
                    className="track_icon_div"
                    style={{ backgroundColor: "red" }}
                  ></div>
                  Application Rejected
                </div>
              </>
            )}
          </>
        }
      </div>
    </div>
  );
};
