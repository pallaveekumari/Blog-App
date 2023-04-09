import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../LoginForm/Loginform.module.scss";
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
import { createUser, login } from "../../Redux/AuthReducer/action";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const init = {
  email: "",
  password: "",
};
const Loginform = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [formdata, setFormData] = useState(init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(login(formdata)).then((res) => {
      let token = localStorage.getItem("token");

      if (token) {
        alert("Login Successfull !");
        navigate("/");
      } else {
        alert("oops something went wrong...");
      }
    });
  };

  return (
    <Box>
      <Appbar />
      <Box className={styles.maincontainer}>
        <Box className={styles.mainbox}>
          <Typography variant="h4" component="h2">
            User Can Login Here
          </Typography>

          <Box className={styles.formbox} component="form">
            <TextField
              id="outlined-basic"
              label="enter your email"
              variant="outlined"
              name={"email"}
              onChange={handleChange}
              fullWidth
            />

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
            <Button onClick={handleSubmit} variant="contained" color="success">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Loginform;
