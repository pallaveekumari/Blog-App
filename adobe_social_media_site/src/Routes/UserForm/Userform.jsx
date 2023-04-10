import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../UserForm/Userform.module.scss";
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Appbar from "../../Components/Appbar";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
import { editUser, setEditedUser } from "../../Redux/AppReducer/action";
const init = {
  name: "",
  email: "",
  bio: "",
  password: "",
};
const Userform = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const appReducer = useSelector((store) => store.AppReducer);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [formdata, setFormData] = useState(
    Object.keys(appReducer.editedUser).length == 0
      ? init
      : appReducer.editedUser
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  const handleSubmit = () => {
   
    if (formdata.name.length > 0 && formdata.name.length <= 50) {
      if (formdata.bio.length >= 0 && formdata.bio.length <= 200) {
        if (/\S+@\S+\.\S+/.test(formdata.email)) {
          dispatch(createUser(formdata)).then((res) => {
          
            if (res?.response?.data?.msg == "user already exist") {
              alert("This user is already exist please try with another email");
            } else {
              alert("New User Form is Created !");
              navigate("/login");
            }
          });
        } else {
          alert("Please enter valid email");
        }
      } else {
        alert("Bio must be within 0 to 200 characters");
      }
    } else {
      alert("Name must be within 1 to 50 characters");
    }
  };

  const handleUpdate = () => {
    dispatch(
      editUser(appReducer.editedUser._id, {
        name: formdata.name,
        bio: formdata.bio,
      })
    ).then((res) => {
      alert("User Updated Successfully");
      navigate("/userlist");
    });
  };

  useEffect(() => {
    return () => {
      dispatch(setEditedUser({}));
    };
  }, []);
  return (
    <Box>
      <Appbar />
      <Box className={styles.mainbox}>
        <Typography variant="h4" component="h2">
          Create A New User Here
        </Typography>

        <Box className={styles.formbox} component="form">
          <TextField
            id="outlined-basic"
            label="enter your name"
            variant="outlined"
            name={"name"}
            onChange={handleChange}
            fullWidth
            value={formdata.name}
          />
          {Object.keys(appReducer.editedUser).length == 0 && (
            <TextField
              id="outlined-basic"
              label="enter your email"
              variant="outlined"
              name={"email"}
              type="email"
              onChange={handleChange}
              fullWidth
              value={formdata.email}
            />
          )}
          <TextField
            id="outlined-basic"
            label="enter your bio"
            variant="outlined"
            name={"bio"}
            onChange={handleChange}
            fullWidth
            value={formdata.bio}
          />
          {Object.keys(appReducer.editedUser).length == 0 && (
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name={"password"}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          )}
          <Button
            onClick={
              Object.keys(appReducer.editedUser).length == 0
                ? handleSubmit
                : handleUpdate
            }
            variant="contained"
            color="success"
          >
            {Object.keys(appReducer.editedUser).length == 0
              ? "Submit"
              : "Update"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Userform;
