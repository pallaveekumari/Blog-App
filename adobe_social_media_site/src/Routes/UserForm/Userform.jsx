import React, { useState } from "react";

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
import {useDispatch} from "react-redux"
import { createUser } from "../../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
const init = {
  name: "",
  email: "",
  bio: "",
  password: "",
};
const Userform = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [formdata, setFormData] = useState(init);
const dispatch=useDispatch()
const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(createUser(formdata)).then((res)=>{
      alert("New User Form is Created !")
      navigate("/")
    })
  };
  return (
    <Box>
        <Appbar/>
        <Box className={styles.mainbox}>
<Typography variant="h4" component="h2">
 Create A New User Here
</Typography>

      <Box
        className={styles.formbox}
        component="form"
       
      >
        <TextField
          id="outlined-basic"
          label="enter your name"
          variant="outlined"
          name={"name"}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="enter your email"
          variant="outlined"
          name={"email"}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="enter your bio"
          variant="outlined"
          name={"bio"}
          onChange={handleChange}
          fullWidth
        />
        <FormControl variant="outlined"  fullWidth>
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
          Submit
        </Button>
      </Box>
    </Box>
    </Box>
  );
};

export default Userform;
