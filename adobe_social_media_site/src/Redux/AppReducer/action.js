import axios from "axios";
import * as types from "../AppReducer/actionTypes";

//create post
export const createPost = (payload) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: types.CREATE_POST_REQUEST });
  return axios
    .post("http://localhost:8080/posts", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: types.CREATE_POST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.CREATE_POST_FAILURE, error: err });
    });
};
//delete post
export const deletePost = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_POST_REQUEST });
  return axios
    .delete(`http://localhost:8080/posts/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_POST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_POST_FAILURE });
    });
};
//edit post
export const editPost = (id, payload) => (dispatch) => {
  dispatch({ type: types.EDIT_POST_REQUEST });
  return axios
    .put(`http://localhost:8080/posts/${id}`, payload)
    .then((res) => {
      dispatch({ type: types.EDIT_POST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.EDIT_POST_FAILURE });
    });
};
//get all posts
export const getAllPosts = () => (dispatch) => {
  dispatch({ type: types.GET_POST_REQUEST });
  return axios
    .get("http://localhost:8080/posts/allposts/all")
    .then((res) => {
      dispatch({ type: types.GET_POST_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_POST_FAILURE });
    });
};
//set edited post
export const setEditedPost = (data) => (dispatch) => {
  dispatch({ type: types.SET_EDITED_POST, payload: data });
};
//get users count
export const getUsersCount = () => (dispatch) => {
  return axios.get("http://localhost:8080/analytics/users").then((res) => {
    dispatch({ type: types.GET_USERS_COUNT, payload: res.data.total_users });
  });
};
// get post count
export const getPostsCount = () => (dispatch) => {
  return axios.get("http://localhost:8080/analytics/posts").then((res) => {
    dispatch({ type: types.GET_POSTS_COUNT, payload: res.data.total_posts });
  });
};
//get top users
export const getTopUsers = () => (dispatch) => {
  return axios
    .get("http://localhost:8080/analytics/users/top-active")
    .then((res) => {
      dispatch({ type: types.GET_TOP_USERS, payload: res.data });
    });
};
// get top posts
export const getTopPosts = () => (dispatch) => {
  return axios
    .get("http://localhost:8080/analytics/posts/top-liked")
    .then((res) => {
      dispatch({
        type: types.GET_TOP_POSTS,
        payload: res.data.top_active_posts,
      });
    });
};
// get all users
export const getAllUsers = () => (dispatch) => {
  return axios.get("http://localhost:8080/users/getusers/all").then((res) => {
    dispatch({ type: types.GET_ALL_USERS, payload: res.data.data });
  });
};
// delete user
export const deleteUser = (id) => (dispatch) => {
  return axios.delete(`http://localhost:8080/users/${id}`).then((res) => {
    dispatch({ type: types.DELETE_USER });
  });
};
//edit user
export const editUser = (id, payload) => (dispatch) => {
  return axios.put(`http://localhost:8080/users/${id}`, payload).then((res) => {
    dispatch({ type: types.EDIT_USER });
  });
};

