import React, { useEffect, useState } from "react";
import Appbar from "../../Components/Appbar";
import styles from "./UserList.module.scss";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../Redux/AppReducer/action";
import { useNavigate } from "react-router-dom";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { deepPurple } from "@mui/material/colors";
// import Box from "@mui/material/Box";

const UserList = () => {
  const appReducer = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  // console.log(appReducer.users);

  const [selectedLike, setSelectedLike] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [selectedDelete, setSelectedDelete] = useState({});
  const [editPost, setEditPost] = useState("");

  const navigate = useNavigate();

  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleDelete = () => {
    dispatch(deleteUser(selectedDelete._id)).then((res) => {
      dispatch(getAllUsers());
      setOpenDeleteDialog(false);
    });
    // console.log(selectedDelete);
  };

  //gcyhcujclujcvujcuj
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <Box>
      <Appbar />
      <Typography variant="h4"> Users List</Typography>
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure ? "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You want to delete this post.
          </DialogContentText>
        </DialogContent>
        {deleteLoader ? (
          <DialogActions className={styles.loaderBox}>
            <CircularProgress />
          </DialogActions>
        ) : (
          <DialogActions>
            <Button
              onClick={() => {
                handleDelete();
              }}
            >
              YES
            </Button>
            <Button onClick={handleCloseDeleteDialog}>NO</Button>
          </DialogActions>
        )}
      </Dialog>

      <Box className={styles.container}>
        {appReducer.users.map((el, i) => {
          return (
            <Box className={styles.eachBox}>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>{i + 1}</Avatar>
              <Box className={styles.eachUserTextBox}>
                <Typography variant="p" component={"div"}>
                  Name : {el.name}
                </Typography>
                <Typography variant="p" component={"div"}>
                  Email : {el.email}
                </Typography>
              </Box>

              <Box className={styles.likeUnlikeBox}>
                <Box className={styles.likeBox}>
                  <EditOutlinedIcon /> Edit
                </Box>
                <Box
                  className={styles.likeBox}
                  onClick={() => {
                    setSelectedDelete(el);
                    handleClickOpenDeleteDialog();
                  }}
                >
                  <DeleteOutlineOutlinedIcon /> Delete
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default UserList;
