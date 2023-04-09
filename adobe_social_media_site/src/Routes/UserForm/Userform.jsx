import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../UserForm/Userform.module.scss";
import {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  const handleSubmit = () => {
    
  };
  return (
    <Box>
        <Appbar/>
      
<Typography variant="h3" component="h2">
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
  );
};

export default Userform;
