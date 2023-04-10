import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Appbar from "../../Components/Appbar";
import {
  createPost,
  editPost,
  setEditedPost,
} from "../../Redux/AppReducer/action";
import styles from "../Postform/Postform.module.scss";

const Postform = () => {
  const appReducer = useSelector((store) => store.AppReducer);
  const authReducer = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setformdata] = useState(
    Object.keys(appReducer.editedPost).length == 0
      ? { content: "" }
      : appReducer.editedPost
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const handleSubmit = () => {
    if (authReducer.isAuth) {
      if (formdata.content.length < 1 || formdata.content.length > 300) {
        alert("Please enter valid content...");
      } else {
        dispatch(createPost(formdata)).then((res) => {
          alert("Post is created !");
          navigate("/");
        });
      }
    } else {
      alert("Please login first and then try to create post");
    }
  };

  const handleUpdate = () => {
    if (authReducer.isAuth) {
      if (formdata.content.length < 1 || formdata.content.length > 300) {
        alert("Please enter valid content...");
      } else {
        dispatch(editPost(appReducer.editedPost._id, formdata)).then((res) => {
          alert("Post Updated Successfully");
          navigate("/");
        });
      }
    } else {
      alert("Please login first and then try to create post");
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setEditedPost({}));
    };
  }, []);

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
              value={formdata.content}
              onChange={handleChange}
            />
            <Button
              onClick={
                Object.keys(appReducer.editedPost).length == 0
                  ? handleSubmit
                  : handleUpdate
              }
              variant="contained"
              color="success"
            >
              {Object.keys(appReducer.editedPost).length == 0
                ? "Submit"
                : "Update"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Postform;
