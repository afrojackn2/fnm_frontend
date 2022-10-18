import React from 'react'
import { Modal,Button } from "@mui/material";
import "../../../css/jobseeker/Employment.css"
import { CssTextField } from '../../../css/Employer/MaterialUicss/OwnCompany';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function Employment({ employments }) {
  const handleClose = () => employments(false);

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className="employment_cont">
          <div className="employment_container">
            <div className='Employment'>
              <h2>Employment</h2>
              <div className='Emp'>
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Company"
                  size="small"
                  color="warning"
                />
                <div className='Employment-Type'>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Mode of Employement</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio color='warning' />} label="FullTime" />
                      <FormControlLabel value="male" control={<Radio color='warning' />} label="Contractual" />
                      <FormControlLabel value="other" control={<Radio color='warning' />} label="Intern" />
                    </RadioGroup>
                  </FormControl>

                </div>
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Designation"
                  size="small"
                  color="warning"
                />
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Department"
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
      </Modal>
    </>

  )
}
