import React from "react";
import "../../../css/jobseeker/CreateCard.css";
import Button from "@mui/material/Button";

export default function CreateCard() {
  return (
    <div className="create_container">
      <div className="createprofile_container">
        <div className="CP_left">
          <h4 className="referhead">Sign Up & Start Applying</h4>
          <h5 className="create_refer_conten">
            {" "}
            Follow the simple steps to create an impressive profile at FMN in
            under 10 minutes and begin applying.
          </h5>
          <Button
            variant="contained"
            sx={{
              width: "25%",
              mt: 2,
              mb: 2,
              textTransform: "none",
              color: "#ffffff",
              backgroundColor: "#F7701D",
              "&:hover": { backgroundColor: "#F7701D" },
            }}
          >
            {/* Create */}Sign Up
          </Button>
        </div>
        <div className="CP_right">
          <img
            src="jobseeker/jobhunt.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
