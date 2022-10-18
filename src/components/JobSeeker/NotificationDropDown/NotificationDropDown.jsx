import React from 'react'
import Button from "@mui/material/Button";

import "../../../css/jobseeker/NotificationDropDown.css"
export default function NotificationDropDown() {
  return (
    <>
    
      <div className='Notification_content'>

        <div className='NotificationDropDown'>
          <div className='DropDownNoti'>
            {/* <div className="notification_heading">
          <h2>Notification</h2>
          <button className="notification_view">View More</button>
        </div> */}

            {/* <p>Successfully aplllied to Tech Jain</p>
            <div className='v1-N'></div>
            <p>Your application is pending for T.C.S</p>
            <div className='v1-N'></div>
            <p> Earned 100 credits for your activity on FMN</p>
            <div className='v1-N'></div>
            <p>Recruiter Response</p>
            <div className='v1-N'></div> */}
            <p>NO NOtifcation found</p>
            <div className='v1-N'></div>


            <div className="notification_btn_grp">
              <Button
                variant="contained"
                sx={{ textTransform: "none", padding: ".3rem", m:1, backgroundColor: "#F7701D", color: "#FFFFF", '&:hover': { backgroundColor: '#F7701D' } }}
              >
                View All
              </Button>
              <Button
                variant="contained"
                sx={{ textTransform: "none", padding: ".3rem",m:1, backgroundColor: "#F7701D", color: "#FFFFF", '&:hover': { backgroundColor: '#F7701D' } }}
              >
                Clear All
              </Button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

