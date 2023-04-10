import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Content.module.scss";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  getAllPosts,
  setEditedPost,
} from "../../Redux/AppReducer/action";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const [selectedLike, setSelectedLike] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [selectedDelete, setSelectedDelete] = useState({});
  const [editPost, setEditPost] = useState("");

  const dispatch = useDispatch();
  const appReducer = useSelector((store) => store.AppReducer);
  const navigate = useNavigate();

  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleChangeLike = (i) => {
    setSelectedLike(i);
  };

  const handleDelete = () => {
    setDeleteLoader(true);
    dispatch(deletePost(selectedDelete._id)).then((res) => {
      dispatch(getAllPosts());
      setOpenDeleteDialog(false);
      setDeleteLoader(false);
    });
  };

  const handleEdit = (el) => {
    dispatch(setEditedPost(el));
    navigate("/postform");
  };

  useEffect(() => {
    dispatch(getAllPosts());

  }, []);
  return (
    <Box className={styles.mainContentBox}>
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
      <Box
        onClick={() => {
          navigate("/postform");
        }}
        className={styles.createPostBox}
      >
        {" "}
        Start a post ...
      </Box>
      {appReducer.posts.map((el, index) => {
        return (
          <Box className={styles.eachBox}>
            <p className={styles.contentText}>{el.content}</p>

            <Box className={styles.likeUnlikeBox}>
              <Box
                className={styles.likeBox}
                onClick={() => handleChangeLike(index)}
              >
                {selectedLike == index ? (
                  <ThumbUpIcon />
                ) : (
                  <ThumbUpOutlinedIcon />
                )}{" "}
                Like
              </Box>
              <Box className={styles.likeBox}>
                <PreviewOutlinedIcon /> View
              </Box>
              <Box onClick={() => handleEdit(el)} className={styles.likeBox}>
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
  );
};

export default Content;
