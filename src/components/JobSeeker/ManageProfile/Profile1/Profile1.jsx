import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ImageBackend } from "../../../../config/Config";

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

export default function Profile1({ isFrom, setisFrom }) {
  const navigate = useNavigate();
  const [isUpdateid, setUpdateid] = useState(false);
  const [file, setFile] = useState();
  const [ispareadonly, setispareadonly] = useState(false);
  const { user, scope } = useSelector((state) => state.AuthReducer);
  const fixedOptions = [scope];
  const [isAutocompletevalue, setAutocompletevalue] = React.useState([]);
  const [isAvalue, setAvalue] = React.useState([]);
  const [Datevalue, setDateValue] = React.useState();
  const dispatch = useDispatch();
  const handleChangeDate = (newValue) => {
    onChangeText("DOB", newValue);
    setDateValue(newValue);
  };
  const { cities } = useSelector((state) => state.CommonReducer);
  const handleChange = (e) => setFile(URL.createObjectURL(e.target.files[0]));
  const onChangeText = (name, value) => {
    setisFrom({ ...isFrom, [name]: value });
  };

  React.useEffect(() => {
    if (user && user.length !== 0) {
      _userdatafunction();
    }
  }, [user]);

  const _userdatafunction = () => {
    console.log(ImageBackend + isFrom.PROFILEPIC);
    setFile(ImageBackend + isFrom.PROFILEPIC);
    setDateValue(user[0].DOB);
    setUpdateid(user[0].USER_ID);
    setAutocompletevalue(
      user[0].AREA_OF_INTREST ? JSON.parse(user[0].AREA_OF_INTREST) : []
    );
    if (
      user[0].CURRENT_ADDRESS !== null &&
      user[0].CURRENT_ADDRESS === user[0].PERMANENT_ADDRESS
    ) {
      setispareadonly(true);
    } else {
      setispareadonly(false);
    }
  };

  
  const _matchaddress = (e) => {
    if (e.target.checked) {
      setispareadonly(true);
      setisFrom({ ...isFrom, PERMANENT_ADDRESS: isFrom.CURRENT_ADDRESS });
    }
    if (!e.target.checked) {
      setispareadonly(false);
    }
  };
  const _defaultcheck = () => {
    if (isFrom.CURRENT_ADDRESS === isFrom.PERMANENT_ADDRESS) {
      return true;
    } else {
      return false;
    }
  };

  const handleOnClick = () => {
    navigate("/createcv", { replace: "true" });
  };

  return (
    <div>
      <form style={{ width: "100%", height: "40vh", overflowY: "scroll" }}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
              width: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 0,
            }}
            noValidate
            autoComplete="off"
          >
            <Avatar
              alt="PROFILEPIC"
              src={file}
              sx={{ width: 96, height: 96 }}
            />
            <IconButton
              sx={{ background: "#FFFFFF", mt: -5, mr: -10 }}
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                name="PROFILEPIC"
                onChange={(e) => {
                  handleChange(e);
                  onChangeText("PROFILEPIC", e.target.files[0]);
                }}
              />
              <PhotoCamera />
            </IconButton>
            <CssTextField
              sx={{ color: " #F7701D", width: "70%" }}
              required
              id="outlined-required"
              color="warning"
              label="First Name"
              onChange={(e) => onChangeText("F_NAME", e.target.value)}
              name="F_NAME"
              value={isFrom.F_NAME}
            />
            <CssTextField
              sx={{ color: " #F7701D", width: "70%" }}
              required
              id="outlined-required"
              size="small"
              color="warning"
              label="Middle Name"
              onChange={(e) => onChangeText("M_NAME", e.target.value)}
              name="M_NAME"
              value={isFrom.M_NAME}
            />
            <CssTextField
              sx={{ color: " #F7701D", width: "70%" }}
              required
              id="outlined-required"
              size="small"
              color="warning"
              label="Last Name"
              onChange={(e) => onChangeText("L_NAME", e.target.value)}
              name="L_NAME"
              value={isFrom.L_NAME}
            />
            <CssTextField
              sx={{ color: " #F7701D", width: "70%" }}
              required
              id="outlined-required"
              color="warning"
              size="small"
              label="Email"
              name="EMAIL"
              value={isFrom.EMAIL}
            />
            <CssTextField
              required
              id="outlined-number"
              label="Phone Number"
              size="small"
              type="number"
              onChange={(e) => onChangeText("PHONENO", e.target.value)}
              name="PHONENO"
              value={isFrom.PHONENO}
            />

            <LocalizationProvider
              size="small"
              sx={{ height: "3vh" }}
              dateAdapter={AdapterDateFns}
            >
              <DesktopDatePicker
                label="DOB"
                size="small"
                sx={{ height: "3vh" }}
                inputFormat="MM/dd/yyyy"
                autoFocus
                color="warning"
                value={Datevalue}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
                name="DOB"
              />
            </LocalizationProvider>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Your Current  Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={isFrom.ADDRESS}
                label="Your Current  Location"
                onChange={e=>{onChangeText('ADDRESS',e.target.value)}}
              >
                {
                  cities && cities.length!== 0 && cities.map((item,index)=>                  
                  <MenuItem key={index} value={item.CITY_ID}>{` ${item.CITY_NAME},${item.STATE_NAME},${item.COUNRTY_NAME}`}</MenuItem>
                  )
                }
                
              </Select>
            </FormControl>

            <CssTextField
              id="outlined-multiline-static"
              label="Current Address"
              multiline
              color="warning"
              size="small"
              rows={3}
              onChange={(e) => onChangeText("CURRENT_ADDRESS", e.target.value)}
              name="CURRENT_ADDRESS"
              value={isFrom.CURRENT_ADDRESS}
            />
            <FormGroup sx={{ width: "70%" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={_defaultcheck}
                    color="warning"
                    onClick={_matchaddress}
                  />
                }
                label="Same as current address"
              />
            </FormGroup>
            <CssTextField
              id="outlined-multiline-static"
              label="Permanent Address"
              multiline
              color="warning"
              size="small"
              rows={3}
              onChange={(e) =>
                onChangeText("PERMANENT_ADDRESS", e.target.value)
              }
              name="PERMANENT_ADDRESS"
              value={isFrom.PERMANENT_ADDRESS}
              disabled={ispareadonly ? true : false}
            />
            <div className="label_box">
              <label htmlFor="">Upload CV</label>
            </div>
            <Button
              sx={{
                width: "100%",
                height: "7vh",
                justifyContent: "space-around",
                mt: 2,
                mb: 2,
                textTransform: "none",
                border: "1px dashed #F7701D",
                color: "#000000",
              }}
              color="warning"
              variant="outlined"
              component="label"
            >
              <CloudUploadIcon color="warning" />
              Drag and Drop or Browse File
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={(e) => onChangeText("CV", e.target.files[0])}
                name="CV"
              />
            </Button>
            <label htmlFor="">or</label>
            <Button
              onClick={handleOnClick}
              variant="contained"
              className="profile_btn"
              sx={{
                width: "100%",
                height: "7vh",
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
              Create Resume + Cover Letter
            </Button>


            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Area Of Intrest</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={isFrom.AREA_OF_INTREST}
                label="area of intrest"
                onChange={e=>{onChangeText('AREA_OF_INTREST',e.target.value)}}
              >
                {
                  scope && scope.length!== 0 && scope.map((item,index)=>                  
                  <MenuItem key={index} value={item.SCOPE_ID}>{item.FIELD_NAME}</MenuItem>
                  )
                }
                
              </Select>
            </FormControl>

            <CssTextField
              id="outlined-multiline-static"
              label="Languagge Known By You "
              multiline
              color="warning"
              size="small"
              rows={3}
              onChange={(e) => onChangeText("LANGUAGE", e.target.value)}
              name="LANGUAGE"
              value={isFrom.LANGUAGE}
            />

            <CssTextField
              id="outlined-multiline-static"
              label="Linked In Url"
              multiline
              color="warning"
              size="small"
              rows={3}
              onChange={(e) => onChangeText("LINKEDIN", e.target.value)}
              name="LINKEDIN"
              value={isFrom.LINKEDIN}
            />
          </Box>
        </div>
      </form>
    </div>
  );
}
