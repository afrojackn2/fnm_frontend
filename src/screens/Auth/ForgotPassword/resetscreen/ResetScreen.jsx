import React, { useState } from "react";
import "./ForgotPasswordpage2.css";
import { styled } from "@mui/material/styles";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../utils/axiosInstance";
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

export default function ResetScreen() {
  const [isotp, setisotp] = useState(null);
  const [ispassword, setpassword] = useState(null);
  const [iscpassword, setcpassword] = useState(null);
  const { emailId } = useParams();

  const onhandlesubmit = () => {
    if (!emailId) {
      toast.error("somthing went wrong!");
      return false;
    }  
    
    if (!isotp) {
      toast.error("please enter otp");
      return false;
    }
    if (!ispassword) {
      toast.error("please enter password");
      return false;
    }
    if (!iscpassword) {
      toast.error("please enter confirm password");
      return false;
    }
    if (ispassword !== iscpassword) {
      toast.error("please enter same password");
      return false;
    }


    if (isotp && ispassword && iscpassword) {
      axiosInstance.post('/user/reset-password',{
        EMAIL:emailId, 
        PASSWORD:ispassword,
        OTP:isotp 
      }).then(res=>{
        try{
            toast.success("password change successfully")
        }
        catch{
          toast.error("somthing went wrong!")


        }
       
      })
    }
  };

  return (
    <div>
      <div className="forgotpassword_container2">
        <img src="jobseeker/fmnlogo.svg" alt="_" />
        <div className="otp_container">
          <div className="forgotheading2">
            <h2>Enter OTP</h2>
            <p>
              Please enter OTP which you have recieved on <br />
              your email address for the verification purpose
            </p>
          </div>
          <div className="forgot_input1">
            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              required
              id="outlined-required"
              color="warning"
              label="Enter OTP"
              onChange={(e) => setisotp(e.target.value)}
            />
          </div>
        </div>
        <div className="rememberpassword_container">
          <h2>Reset Password</h2>
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            color="warning"
            label="New Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            color="warning"
            label="ReEnter Password"
            onChange={(e) => setcpassword(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={onhandlesubmit}
            sx={{
              backgroundColor: "#F7701D",
              width: "64%",
              color: "#FFFFF",
              "&:hover": { backgroundColor: "#F7701D" },
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
