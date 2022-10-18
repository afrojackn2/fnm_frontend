import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import "../../../css/Employer/UseFilterTwo.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
// import { makeStyles } from '@mui/styles';


// const useStyles=makeStyles((theme) =>({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 200
//   }
// }))


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


export default function UseFilterTwo() {
  const [value, setValue] = React.useState();
  const [langvalue, setLangvalue] = React.useState();

  const handleChangelang = (event) => {
    setLangvalue(event.target.langvalue);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };




  return (
    <div>
      <div className="usefilter2_container">
        <div className="usefilter2_form">
          <form>
            <div className="form-row2">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                color="warning"
                label="College/University"
              />
            </div>
            <div className="form-row2">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                color="warning"
                label="Notice Period"
              />
            </div>
            <div className="form-row2">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                color="warning"
                label="Degree"
              />
            </div>
            <div className="form-row2">
              {/* <CssTextField
                  sx={{ color: " #F7701D", width: "100%" }}
                  required
                  id="outlined-required"
                  color="warning"
                  label="Locations"
                /> */}
              <FormControl sx={{borderColor:"#F7701D"}}>
                <InputLabel>Locations</InputLabel>
                <Select
                  labelId="select-demo"
                  id="location-select"
                  value={value}
                  onChange={handleChange}
                  // input={<OutlinedInput label="Name" />}
                  // MenuProps={MenuProps}
                >
                    <MenuItem value={"bhopal"}>Bhopal</MenuItem>
                    <MenuItem value={"delhi"}>Delhi</MenuItem>
                    <MenuItem value={"patna"}>Patna</MenuItem>

                </Select>
              </FormControl>
            </div>
            <div className="form-row2">
                            <FormControl sx={{borderColor:"#F7701D"}}>
                <InputLabel>Language Preference</InputLabel>
                <Select
                  labelId="select-demo"
                  id="language-select"
                  value={langvalue}
                  onChange={handleChangelang}
                >
                    <MenuItem value={"Hindi"}>Hindi</MenuItem>
                    <MenuItem value={"English"}>English</MenuItem>
                </Select>
              </FormControl>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
