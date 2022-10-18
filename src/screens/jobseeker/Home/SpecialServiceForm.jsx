import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import "../../../css/jobseeker/SpecialService.css";
import { useDispatch } from "react-redux";
import { specialService } from "../../../redux/action/JobSeekerAction";
import NavbarJS from "./NavbarJS";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "55%",
//   bgcolor: "background.paper",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   boxShadow: 24,
//   pt: 4,
//   borderRadius: "7px",
// };

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

export default function SpecialServiceForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobno, setMobNo] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(specialService(name, email, mobno));
    alert(name, email, mobno);
    setName("");
    setEmail("");
    setMobNo("");
  };

  return (
    <div className="ss" style={{ outline: "none" }}>
      <NavbarJS/>
      <Box  className="special_service">
        <Typography id="modal-modal-title" variant="h6" component="h2">
        CV Building Session with Expert         </Typography>
        <div className="cv_content">
          <p>
            Find My Next can help you with remote assessment and tailoring ATS
            integrated resumes/CV along with impressive and effective cover
            letters. Get in touch with us and discover the latest industry
            trends, important keywords, significant highlights to include in
            your resume, and tips to write effective cover letters. Craft
            personalized smart cover letters and show your skills as a brilliant
            employee using our services.
          </p>
        </div>
        <form action="" style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <CssTextField
              sx={{ color: " #F7701D", width: "70%" }}
              required
              id="outlined-required"
              color="warning"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CssTextField
              sx={{ color: " #F7701D", width: "70%" }}
              required
              id="outlined-required"
              color="warning"
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CssTextField
              sx={{ color: " #F7701D", width: "70%" }}
              required
              id="outlined-required"
              color="warning"
              label="Phone no."
              type="number"
              value={mobno}
              onChange={(e) => setMobNo(e.target.value)}
            />
          </Box>
        </form>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            m: 3,
          }}
        >
          <Button
            variant="contained"
            className="profile_btn"
            sx={{
              width: "30%",
              mt: 2,
              mb: 2,
              textTransform: "none",
              color: "#000000",
              backgroundColor: "rgba(247, 112, 29, 0.39)",
              "&:hover": { backgroundColor: "rgba(247, 112, 29, 0.39)" },
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}
