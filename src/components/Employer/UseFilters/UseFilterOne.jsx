import React from 'react'
import { useState } from 'react';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import TextField from "@mui/material/TextField";
import "../../../css/Employer/UseFilterOne.css"
import { styled } from "@mui/material/styles";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Slider from "@mui/material/Slider";



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
const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#F7701D",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const marks = [
  {
    value: 0,
    label: "0 Lakh",
  },
  {
    value: 40,
    label: "40 Lakh",
  },
  {
    value: 100,
    label: "1 Cr.",
  },
];
function valuetext(value) {
  return `${value} Lakh`;
}


const markslast = [
  {
    value: 0,
    label: "0 Lakh",
  },
  {
    value: 20,
    label: "20 Lakh",
  },
  {
    value: 50,
    label: "50 Lakh",
  },
];
function valuetextlast(value) {
  return `${value} Lakh`;
}


export default function UseFilterOne() {
  const [value, setValue] = React.useState([0, 20]);
  const [lastvalue, setLastvalue] = React.useState([0, 10]);

  const [datevalue, setDatevalue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChangedate = (newValue) => {
    setDatevalue(newValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangelast = (event, newValue) => {
    setLastvalue(newValue);
  };


  return (
    <div>
      <div className="usefilter1_container">
        <div className="usefilter1_form">
          <form>
            <div className="linkedin_LI">


              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                size='small'
                color="warning"
                label="Linkedin Profile"
              />


            </div>
            <div className="form-row">
              <LocalizationProvider dateAdapter={AdapterDateFns}
              >
                <DesktopDatePicker

                  label="DOB"
                  inputFormat="MM/dd/yyyy"
                  color="warning"
                  autoFocus
                  size="small"
                  value={datevalue}
                  onChange={handleChangedate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

            </div>
            <div className="form-row">
              <label htmlFor="Salary/Annum" className="label_textsalary">
                Salary/Annum
              </label>

              <PrettoSlider
                sx={{ color: "#F7701D", width: "60%", mt: 5, ml: 5, height: 0.25 }}
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                marks={marks}
                min={0}
                max={100}
                getAriaValueText={valuetext}
              />


            </div>
            <div className="form-row">
              <label htmlFor="Salary/Annum" className="label_textsalary">
                Last Drawn Salary                  </label>

              <PrettoSlider
                sx={{ color: "#F7701D", width: "60%", mt: 5, ml: 5, height: 0.25 }}
                getAriaLabel={() => "Temperature range"}
                value={lastvalue}
                onChange={handleChangelast}
                valueLabelDisplay="on"
                marks={markslast}
                min={0}
                max={50}
                getAriaValueText={valuetextlast}
              />


            </div>
            <div className="form-row">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                size='small'
                color="warning"
                label="Company"
              />

            </div>

          </form>
        </div>

      </div>
    </div>
  )
}
