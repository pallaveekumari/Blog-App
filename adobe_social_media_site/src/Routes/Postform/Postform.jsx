import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Appbar from "../../Components/Appbar";
import { createPost } from "../../Redux/AppReducer/action";
import styles from "../Postform/Postform.module.scss";
const init = {
  content: "",
};
const Postform = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [formdata, setformdata] = useState(init);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(createPost(formdata)).then((res) => {
      alert("Post is created !");
      navigate("/")
    });
  };
  return (
    <Box>
      <Appbar />
      <Box className={styles.maincontainer}>
      <Box className={styles.mainbox}>
        <Typography variant="h4" component="h2">
          You Can Create Your Content Here
        </Typography>
        <Box className={styles.formbox}>
          <TextField
            id="outlined-multiline-static"
            label="write your content"
            multiline
            rows={4}
            name={"content"}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Postform;
