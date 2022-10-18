import React from "react";
import Button from "@mui/material/Button";
import "../../../../css/jobseeker/Giveget.css"

const Giveget = () => {
  return (
    <>
      <div className="get_container">
        <div className="left_get">
          <h3 className="get_heading">Give Get and Start Applying</h3>
          <h5 className='create_refer_conten'> Getting job too easy on FMN. Create your profile in
            less than 10 minutes with your CV and Cover 
            letter services of FMN.</h5>

          <Button variant="contained"
          sx={{
            width: "30%",
            textTransform: "none",
            color: "#ffffff",
            backgroundColor: "#F7701D",
            "&:hover": { backgroundColor: "#F7701D" },
          }}
          >Get</Button>
        </div>
        <div className="right_get">
          <img className="get_give_img"
            src="jobseeker/getsideimg.png"
            alt="_"
          />
        </div>
      </div>
    </>
  );
};

export default Giveget;
