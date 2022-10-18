import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";

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

export default function Profile4({ isFrom, setisFrom }) {
  const [category, setCategory] = useState("no");
  const [value, setValue] = React.useState([0, 20]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChangeText("EXPECTED_SALARY", newValue);
  };

  const onChangeText = (name, value) => {
    setisFrom({ ...isFrom, [name]: value });
  };

  React.useEffect(() => {
    // console.log(isFrom.RELOCATE);
    setCategory(parseInt(isFrom.RELOCATE));
    setValue(isFrom.EXPECTED_SALARY)
  }, [])
  

  return (
    <div>
      <form
        classname="p3_main"
        style={{ width: "100%", height: "40vh", overflowY: "scroll" }}
      >
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
        <div className="checkboxRS">
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{ color: "#898787" }}
            >
              Ready to relocate
            </FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => {
                onChangeText("RELOCATE", e.target.value);
                setCategory(e.target.value);
              }}
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
            <FormLabel id="demo-row-radio-buttons-group-label">
              Select shift which you want to work
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={ parseInt(isFrom.PREFER_SHIFT)}
              onChange={(e) => {
                onChangeText("PREFER_SHIFT", e.target.value);
              }}
            >
              <FormControlLabel
                value={0}
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
                value={1}
                control={<Radio sx={{ color: "#F7701D" }} />}
                label="Day"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </form>
    </div>
  );
}

