import React from "react";
// import "./PersonalDetail.css";
import "../../../css/jobseeker/PersonalDetail.css"

import { Modal,Button } from "@mui/material";
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";


export default function PersonalDetail({ PersonalDetail }) {
  const handleClose = () => PersonalDetail(false);

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className="personaldetail_container">
          <div className="PersonalDetails">
            <h2>Personal Details</h2>
            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="First Name"
              size="small"
              color="warning"
            />
            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Middle Name"
              size="small"
              color="warning"
            />
            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Last Name"
              size="small"
              color="warning"
            />
            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="date"
              label="Birthday"
              size="small"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Linkedin Profile"
              size="small"
              color="warning"
            />
            <div className="button_e_ss">
                <Button
                  sx={{
                    width: "25%",
                    textTransform: "none",
                    color: "#000000",
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    "&:hover": {
                      backgroundColor: "#F7701D",
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  sx={{
                    width: "25%",
                    textTransform: "none",
                    color: "#000000",
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    "&:hover": {
                      backgroundColor: "#F7701D",
                    },
                  }}
                >
                  Submit
                </Button>
              </div>
          </div>
        </div>

        {/* </div> */}
      </Modal>
    </>
  );
}
