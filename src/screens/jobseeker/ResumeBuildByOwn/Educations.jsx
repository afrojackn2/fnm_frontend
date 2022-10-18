import { Button, Divider, Modal } from "@mui/material";
import * as React from "react";
import "../../../css/jobseeker/Educations.css"
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";

export default function Educations({ educations }) {
  const handleClose = () => educations(false);
  const [count, setCount] = React.useState(1);
  let Form = [];
  for (let index = 0; index < count; index++) {
    Form.push(
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
        <CssTextField
          sx={{ color: " #F7701D", width: "90%" }}
          id="outlined-multiline-static"
          label="School"
          size="small"
          color="warning"
        />
        <CssTextField
          sx={{ color: " #F7701D", width: "90%" }}
          id="outlined-multiline-static"
          label="College/University"
          size="small"
          color="warning"
        />
        <CssTextField
          sx={{ color: " #F7701D", width: "90%" }}
          id="outlined-multiline-static"
          label="Degree"
          size="small"
          color="warning"
        />
        <Divider sx={{ border: "1px solid black", width: "95%" }} />

      </div>
    )
  }

  const AddEducation = () => {
    setCount(count + 1);
  }

  const scrollActive = () => {
    if (count > 1) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className="education_cont">
          <div className="education_container">
            <h2>Educations</h2>
            <div className="Education">
              <div className={scrollActive() ? "Edufield_input_scroll" : "Edufield_input"}>
                {Form.map((instance) => instance)}
                <Button onClick={AddEducation}
                  sx={{
                    width: "auto",
                    margin: "auto",
                    textTransform: "none",
                    color: "#000000",
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    "&:hover": {
                      backgroundColor: "#F7701D",
                    },
                  }}
                >
                  Add Education
                </Button>
              </div>
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
        </div>
      </Modal>
    </>
  );
}
