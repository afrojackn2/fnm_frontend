import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
// import "../../../css/Employer/UseFilterTwo.css";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";

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

export default function Profile3({ isFrom, setisFrom }) {
  const [value, setValue] = React.useState();
  const [langvalue, setLangvalue] = React.useState();
  const [category, setCategory] = React.useState();
  const [chnageshift, setchnageshift] = React.useState();

  const handleChangelang = (event) => {
    setLangvalue(event.target.langvalue);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onChangeText = (name, value) => {
    setisFrom({ ...isFrom, [name]: value });
  };

  return (
    <div>
      <form
        className="p2_main"
        style={{ width: "100%", height: "40vh", overflowY: "scroll" }}
      >
        <div className="form-row2">
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            size="small"
            type="number"
            color="warning"
            label="Experience"
            value={isFrom.EXPERIANCE}
            onChange={(e) => onChangeText("EXPERIANCE", e.target.value)}
          />
        </div>
        <div className="form-row2">
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            size="small"
            color="warning"
            label="Job Position"
            value={isFrom.JOB_POSITON}
            onChange={(e) => onChangeText("JOB_POSITON", e.target.value)}
          />
        </div>
        <div className="form-row2">
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            size="small"
            color="warning"
            label="Name of Company"
            value={isFrom.NAME_OF_COMPANY}
            onChange={(e) => onChangeText("NAME_OF_COMPANY", e.target.value)}
          />
        </div>
        <div className="form-row2">
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            size="small"
            color="warning"
            label="Company Address"
            value={isFrom.COMPANY_ADDRESS}
            onChange={(e) => onChangeText("COMPANY_ADDRESS", e.target.value)}
          />
        </div>
        <div className="form-row2">
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            size="small"
            type="number"
            color="warning"
            label="Previous Company CTC"
            value={parseInt(isFrom.PREV_COMPANY_SALARY)}
            onChange={(e) =>
              onChangeText("PREV_COMPANY_SALARY", e.target.value)
            }
          />
        </div>
        <div className="checkboxRS">
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{ color: "#898787" }}
            >
              Rotational Shift
            </FormLabel>
            <RadioGroup
              value={parseInt(isFrom.SHIFT_TYPE)}
              onChange={(e) => onChangeText("SHIFT_TYPE", e.target.value)}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value={1}
                control={<Radio sx={{ color: "#F7701D" }} />}
                label="Yes"
              />
              <FormControlLabel
                value={0}
                control={<Radio sx={{ color: "#F7701D" }} />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="checkboxRS">
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{ color: "#898787" }}
            >
              Job Type
            </FormLabel>
            <RadioGroup
              value={isFrom.WORKTYPE_TYPE}
              onChange={(e) => onChangeText("WORKTYPE_TYPE", e.target.value)}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="ON_SITE"
                control={<Radio sx={{ color: "#F7701D" }} />}
                label="On-site"
              />
              <FormControlLabel
                value="WORK_FROM_HOME"
                control={<Radio sx={{ color: "#F7701D" }} />}
                label="WFH"
              />
              <FormControlLabel
                value="HYBRID"
                control={<Radio sx={{ color: "#F7701D" }} />}
                label="Hybrid"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="form-row2">
          <CssTextField
            type="number"
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            size="small"
            color="warning"
            label="Notice Period"
            value={isFrom.NOTICE_PERIOD}
            onChange={(e) => onChangeText("NOTICE_PERIOD", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
