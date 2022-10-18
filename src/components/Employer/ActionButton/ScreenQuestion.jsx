import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";

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

export default function ScreenQuestion({ Screenqu, userdata }) {

  const [isScreninglink, setisScreninglink] = React.useState(null);


  const dispatch = useDispatch();
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }

  const handlesubmit = () => {
    axiosInstance.post('employer/AssiginAssignment', {
      USER_ID: userdata.USER_ID,
      JOB_ID: userdata.JOB_ID,
      ASSIGNSCREENING: JSON.stringify({
        "link": isScreninglink,
      })

    }).then((res) => {
      toast.info("You Have Assign Assignment Succesfully!!");
      handleClose();
    })
  }



  const handleClose = () => {
    Screenqu(false);
  };

  return (
    <div>
      <Dialog open={Screenqu} onClose={handleClose}>
        <DialogTitle>Screening Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            if you have Screening question link Put here or you can choose FNM
            Screening Question.
          </DialogContentText>
          <CssTextField
            autoFocus
            margin="dense"
            id="name"
            label="Screening Question Link"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setisScreninglink(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              width: "auto%",
              textTransform: "none",
              color: "#000000",
              backgroundColor: "rgba(247, 112, 29, 0.39)",
              "&:hover": {
                backgroundColor: "rgba(247, 112, 29, 0.39)",
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: "auto%",
              textTransform: "none",
              color: "#000000",
              backgroundColor: "rgba(247, 112, 29, 0.39)",
              "&:hover": {
                backgroundColor: "rgba(247, 112, 29, 0.39)",
              },
            }}
            onClick={handlesubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
