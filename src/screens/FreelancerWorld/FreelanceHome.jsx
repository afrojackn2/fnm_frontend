import React from 'react'
// import Employeehome from "../assets/employeehome.png";
// import EmployeeProfile from "../assets/EmployeeProfile.png";
import "../../css/Freelancer/FreelanceHome.css";
import { Link } from "react-router-dom";
import StarRating from "./StarRating/StarRating";
import Button from "@mui/material/Button";
import { Audioanswer } from '../../components/JobSeeker/ApplayQuestions/AudioAnswer/Audioanswer';

export default function FreelanceHome() {
  return (
    <div>
      <div className="EmployeeHome_main">
        <div className="employeehomepage">
          <div className="employee_header">
            <div className="employee_header_left">
              <h2 className='headeremployee'>Post a job today, hire<br /> tomorrow</h2>
              {/* <div className="employee_home_header_buttons">
              <Link to="/Hire" className="hire">
                I Want to hire
              </Link>
              <Link to="/Work" className="hire">
                I Want to Work
              </Link>
            </div> */}
            </div>
            <div className="employee_header_right">
              <img src="freeLancepic.png" alt='' className="employeehome_header_img"
              />{' '}
            </div>
          </div>
          <div className="employer_home_landing">
            <div className="employee_profile">
              <img src="freelencepic.png" alt='' />{' '}
              <Audioanswer />

            </div>
            <div className="employee_home_form">
              <form>
                <input type="text" placeholder="Akash Singh" />
                <input type="text" placeholder="Tech Jain It Solution" />
                <input type="text" placeholder="www.xyz.com" />
                <input type="text" placeholder="Jabalpur
" />
                <input type="text" placeholder="UI UX Designer
" />
                <input type="text" placeholder="behance.net/akashsingh39
" />
                <input type="text" placeholder="Many
" />


                <div className="star_rating">
                  <StarRating />
                </div>

                <div className="freelance_btns">
                  <Button
                    variant="contained"
                    className="profile_btn"
                    sx={{
                      width: "20%",
                      mt: 2,
                      mb: 2,
                      textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                  >
                    Message
                  </Button>
                  <Button
                    variant="contained"
                    className="profile_btn"
                    sx={{
                      width: "20%",
                      mt: 2,
                      mb: 2,
                      textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                  >
                    Share
                  </Button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
