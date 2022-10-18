import React, { useState } from "react";
import "../../../css/Employer/UseFilterThree.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
// import { createTheme } from "@mui/material/styles";
// import { ThemeProvider } from "@mui/material/styles";


// const theme = {
//   overrides: {
//     MuiRadio: {
//       root: {
//         color: '#F7701D',
//       },
//       colorSecondary: {
//         '&$checked': {
//           color: '#F7701D',
//         },
//       },
//     },
//   },
// }

// const muiTheme = createTheme(theme)






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

export default function UseFilterThree() {
  const [category, setCategory] = useState("no");
  return (
    <div>
      <div className="usefilter3_container">
        <div className="usefilter3_form">
          <form>
            <div className="checkboxRS">
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#898787" }}
                >
                  Rotational Shift
                </FormLabel>
                <RadioGroup
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio sx={{ color: "#F7701D" }} />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio sx={{ color: "#F7701D" }} />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="checkboxRS">
              {/* <ThemeProvider   theme={muiTheme}>             */}
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Shift
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="night"
                    control={
                      <Radio
                        sx={{
                          color: "#F7701D",
                          "&$checked": { color: "#F7701D" },
                        }}
                      />
                    }
                    label="Night"
                  />
                  <FormControlLabel
                    value="day"
                    control={<Radio sx={{ color: "#F7701D" }} />}
                    label="Day"
                  />
                </RadioGroup>
              </FormControl> 

{/* </ThemeProvider> */}
            </div>
            <div className="form-row3">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                color="warning"
                label="GET"
              />
            </div>
            <div className="form-row3">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                color="warning"
                label="Relocation"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
