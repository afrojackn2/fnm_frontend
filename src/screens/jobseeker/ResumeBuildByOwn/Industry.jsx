import React from "react";
// import "./Industry.css"
import { Modal,Button } from "@mui/material";
import "../../../css/jobseeker/Industry.css"
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";

export default function Industry({ industries }) {
  const handleClose = () => industries(false);

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className="industries_cont">
          <div className="industry_container">
            <div className="industryy">
              <h2>Industry</h2>
              <div className="industry_ip_label">
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="College/University"
                  size="small"
                  color="warning"
                />
                <div className="Date">
                  <CssTextField
                    sx={{ color: " #F7701D", width: "40%" }}
                    id="date"
                    label="Start Date"
                    size="small"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <CssTextField
                    sx={{ color: " #F7701D", width: "40%" }}
                    id="date"
                    label="Last Date"
                    size="small"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Roles &amp; Responsibilities"
                  size="small"
                  color="warning"
                />
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Annual CTC"
                  size="small"
                  color="warning"
                />
              </div>
              <div className="button_e">
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
        </div>

        {/* </div> */}
      </Modal>
    </>

  );
}
