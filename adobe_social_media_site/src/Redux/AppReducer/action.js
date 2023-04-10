import axios from "axios";
import * as types from "../AppReducer/actionTypes";

//create post
export const createPost = (payload) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: types.CREATE_POST_REQUEST });
  return axios
    .post("https://adobe-backend-189z.onrender.com/posts", payload, {
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
    .delete(`https://adobe-backend-189z.onrender.com/posts/${id}`)
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
    .put(`https://adobe-backend-189z.onrender.com/posts/${id}`, payload)
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
    .get("https://adobe-backend-189z.onrender.com/posts/allposts/all")
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
  return axios
    .get("https://adobe-backend-189z.onrender.com/analytics/users")
    .then((res) => {
      dispatch({ type: types.GET_USERS_COUNT, payload: res.data.total_users });
    })
    .catch((err) => {
      return err;
    });
};
// get post count
export const getPostsCount = () => (dispatch) => {
  return axios
    .get("https://adobe-backend-189z.onrender.com/analytics/posts")
    .then((res) => {
      dispatch({ type: types.GET_POSTS_COUNT, payload: res.data.total_posts });
    })
    .catch((err) => {
      return err;
    });
};
//get top users
export const getTopUsers = () => (dispatch) => {
  return axios
    .get("https://adobe-backend-189z.onrender.com/analytics/users/top-active")
    .then((res) => {
      dispatch({ type: types.GET_TOP_USERS, payload: res.data });
    })
    .catch((err) => {
      return err;
    });
};
// get top posts
export const getTopPosts = () => (dispatch) => {
  return axios
    .get("https://adobe-backend-189z.onrender.com/analytics/posts/top-liked")
    .then((res) => {
      dispatch({
        type: types.GET_TOP_POSTS,
        payload: res.data.top_active_posts,
      });
    })
    .catch((err) => {
      return err;
    });
};
// get all users
export const getAllUsers = () => (dispatch) => {
  return axios
    .get("https://adobe-backend-189z.onrender.com/users/getusers/all")
    .then((res) => {
      dispatch({ type: types.GET_ALL_USERS, payload: res.data.data });
    })
    .catch((err) => {
      return err;
    });
};
// delete user
export const deleteUser = (id) => (dispatch) => {
  return axios
    .delete(`https://adobe-backend-189z.onrender.com/users/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_USER });
    })
    .catch((err) => {
      return err;
    });
};
//edit user
export const editUser = (id, payload) => (dispatch) => {
  return axios
    .put(`https://adobe-backend-189z.onrender.com/users/${id}`, payload)
    .then((res) => {
      dispatch({ type: types.EDIT_USER });
    })
    .catch((err) => {
      return err;
    });
};

export const setEditedUser = (data) => (dispatch) => {
  dispatch({ type: types.SET_EDITED_USER, payload: data });
};
