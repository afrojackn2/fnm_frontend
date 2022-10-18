import React, { useState } from "react";
import UseFilterOne from "./UseFilterOne";
import UseFilterTwo from "./UseFilterTwo";
import UseFilterThree from "./UseFilterThree";
import UseFilterFour from "./UseFilterFour";
import "../../../css/Employer/UseFilter.css"
import Button from '@mui/material/Button';
import Modal from "@mui/material/Modal";

import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function UseFilter({ PopupPagefilter }) {
  const handleClose = () => PopupPagefilter(false);

  const [page, setPage] = useState(0);
  const [filter,setFilter] = useState("");
  const PageDisplay = () => {
    if (page === 0) {
      // setFilter("Personal Info");
      return <UseFilterOne />;
    } else if (page === 1) {
      // setFilter("Academic Info")
      return <UseFilterTwo />;
      // setFilter("Professional Info")
    } else if (page === 2) {
      // setFilter("Job Related Info")
      return <UseFilterThree />;
    } else {
      // setFilter("Submit Info")
      return <UseFilterFour />;
    }
  };
  // const PageHeading = () => {
  //   if (page === 0) {
  //     setFilter("Personal Info");
  //     // return <UseFilterOne />;
  //   } else if (page === 1) {
  //     setFilter("Academic Info")
  //     // return <UseFilterTwo />;
  //     setFilter("Professional Info")
  //   } else if (page === 2) {
  //     setFilter("Job Related Info")
  //     // return <UseFilterThree />;
  //   } else {
  //     setFilter("Submit Info")
  //     // return <UseFilterFour />;
  //   }
  // };
  return (
    <div >
      <Modal
        keepMounted
        open={PopupPagefilter}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        sx={{ outline: 'none' }}
      >

        <div className="filter_container">
          <div className="TitleCloseBtn">
            <button
              onClick={() => {
                PopupPagefilter(false);
              }}
            >
              X
            </button>
          </div>
          <div className="usefilter_form_container">

            <div className="usefilter_form_content">
              <div className="usefilter_header">
                <FilterAltIcon className="filtericon" />
                <h3 className="filterhead">
                  {/* {PageHeading()} */}
                  {page==0 && "Personal Info"}
                  {page==1 && "Academic Info"}
                  {page==2 && "Professional Info"}
                  {page==3 && "Submit Info"}
                </h3>
                <button className="skip_btn">Skip</button>
              </div>
              <div className="UF_form_container">
                <div className="form_container_body">{PageDisplay()}</div>
                <div className="form_container_footer">
                  <Button className="form_btn"
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D", width: "20%", color: "#000000", '&:hover': { backgroundColor: ' rgba(140,221,220,0.5)' },
                    }}
                  >
                    Save
                  </Button>
                  <Button className="form_btn"
                    onClick={() => {
                      setPage((currPage) => currPage + 1)
                    }}

                    variant="contained"
                    sx={{
                      backgroundColor: "rgba(140,221,220,0.5)", width: "20%", color: "#000000", '&:hover': { backgroundColor: ' rgba(140,221,220,0.5)' },
                    }}
                  >
                    Next
                  </Button>

                </div>
              </div>
            </div>

          </div>
        </div>

      </Modal>
    </div>
  );
}
