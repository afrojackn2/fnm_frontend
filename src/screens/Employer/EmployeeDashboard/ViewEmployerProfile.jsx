import React, { useState } from "react";
import "../../../css/jobseeker/EmployerProfile.css";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserProfile } from "../../../redux/action/JobSeekerAction";
import {
  CircularLoding,
  GetUserAction,
} from "../../../redux/action/AuthAction";
import { ImageBackend } from "../../../config/Config";
import SideBar from "../../../components/Employer/employersidebar/JobSeekerdashboard";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#F7701D",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#F7701D",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#F7701D",
    },
    "&:hover fieldset": {
      borderColor: " #F7701D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F7701D",
    },
  },
});

export default function ViewEmployerProfile() {
  const [user, setuser] = useState([]);
  const [LocationsValue, setLocationsValue] = useState([]);
  const userdata = useSelector((state) => state.AuthReducer.user);
  const { cities } = useSelector((state) => state.CommonReducer);
  const mainuser = useSelector((state) => state.AuthReducer.user);

  var userVerify = () => {
    if (mainuser && mainuser.length !== 0 && mainuser[0].USER_ROLE == 1) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    if (userdata.length !== 0 && cities.length !== 0) {
      setuser(userdata);
      const result = cities.filter(
        (word) => word.CITY_ID === userdata[0].ADDRESS
      );
      setLocationsValue(result[0]);
    }
  }, [userdata, cities]);

  return (
    <div className="EmployerProfileForm">
      {/* {userVerify() ? <SideBar /> : <JobSeekerdashboard />} */}
      <div className="EmployerProfile">
        {/* <DashboardProfile /> */}
        <div className="form">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "70%" },
              width: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
              mb: 2,
              borderRadius: "7px",
              boxShadow: "0px 0 0px 0px rgba(0, 0, 0, 0.4)",
              zIndex: 0,
            }}
            noValidate
            autoComplete="off"
          >
            <Box
              component="form"
              className="profile_box"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "75%" },
                width: "77%",
                display: "flex",
                // border:"3px solid blue",
                flexDirection: "column",
                alignItems: "center",
                mt: 5,
                mb: 2,
                borderRadius: "7px",
                boxShadow: "3px 0 15px 1px rgba(0, 0, 0, 0.4)",
                // background:"grey",
                zIndex: 0,
                pt: 2,
                pb: 0,
              }}
              noValidate
              autoComplete="off"
            >
              <h3>Your Personal Details</h3>
              <Avatar
                alt="PROFILEPIC"
                src={user.length !== 0 && ImageBackend + user[0].PROFILEPIC}
                sx={{ width: 100, height: 100 }}
              />
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100%" },
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  mt: 1,
                  mb: 2,
                  borderRadius: "7px",
                  zIndex: 0,
                }}
                noValidate
                autoComplete="off"
              >
                <br />
                <h5 className="profile_employer_data1">
                  <b> Name:</b>{" "}
                  {user.length !== 0 &&
                    user[0].F_NAME + user[0].M_NAME + user[0].L_NAME}
                  <span>
                    <CheckCircleIcon
                      sx={{ transform: "scale(.5)", color: "green" }}
                    />
                  </span>
                </h5>
                <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                <h5 className="profile_employer_data">
                  <b> Email: </b>
                  {user.length !== 0 && user[0].EMAIL}
                  <span>
                    <CheckCircleIcon
                      sx={{ transform: "scale(.5)", color: "green" }}
                    />
                  </span>
                </h5>
                <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                <h5 className="profile_employer_data">
                  <b>Mobile No:</b> +91-{user.length !== 0 && user[0].PHONENO}{" "}
                  <span>
                    <CheckCircleIcon
                      sx={{ transform: "scale(.5)", color: "green" }}
                    />
                  </span>
                </h5>
                <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                <h5 className="profile_employer_data">
                  <b>Address:</b>{" "}
                  {user.length !== 0 &&
                    LocationsValue &&
                    `${LocationsValue.CITY_NAME}, ${LocationsValue.STATE_NAME}, ${LocationsValue.COUNRTY_NAME} `}{" "}
                  <span>
                    <CheckCircleIcon
                      sx={{ transform: "scale(.5)", color: "green" }}
                    />
                  </span>
                </h5>
                <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                <h5 className="profile_employer_data">
                  <b>Company: </b> {user.length !== 0 && user[0].COMPANY_NAME}{" "}
                  <span>
                    <CheckCircleIcon
                      sx={{ transform: "scale(.5)", color: "green" }}
                    />
                  </span>
                </h5>
                <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                <h5 className="profile_employer_data">
                  <b>About yourself:</b>{" "}
                  {user.length !== 0 && user[0].ABOUT_YOURSELF}{" "}
                  <span>
                    <CheckCircleIcon
                      sx={{ transform: "scale(.5)", color: "green" }}
                    />
                  </span>
                </h5>
                <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                <h5 className="profile_employer_data">
                  <b>About Company : </b>{" "}
                  {user.length !== 0 && user[0].COMPANY_PRODILE}{" "}
                  <span>
                    <CheckCircleIcon
                      sx={{ transform: "scale(.5)", color: "green" }}
                    />
                  </span>
                </h5>
                <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                <h5 className="profile_employer_data">
                  <b>User Type:</b>{" "}
                  {user.length !== 0 && user[0].USER_ROLE == 1
                    ? "employeer  "
                    : "jobseeker"}{" "}
                  <span>
                    <CheckCircleIcon
                      sx={{ transform: "scale(.5)", color: "green" }}
                    />
                  </span>
                </h5>
                <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                <h5 className="profile_employer_data">
                  <b>Country:</b> India{" "}
                  <span>
                    <CheckCircleIcon
                      sx={{ transform: "scale(.5)", color: "green" }}
                    />
                  </span>
                </h5>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
