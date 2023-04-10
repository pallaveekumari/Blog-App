import * as types from "../AuthReducer/actionTypes";
import axios from "axios";
//login
export const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN__REQUEST });

  return axios
    .post("https://adobe-backend-189z.onrender.com/users/login", payload)

    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({ type: types.LOGIN__SUCEESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN__FAILURE });
    });
};
//signup==createuser
export const createUser = (payload) => (dispatch) => {
  dispatch({ type: types.CREATE_USER_REQUEST });

  return axios
    .post("https://adobe-backend-189z.onrender.com/users", payload)

    .then((res) => {
      dispatch({ type: types.CREATE_USER_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.CREATE_USER_FAILURE, error: err });
      return err;
    });
};

// Logout user
export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  dispatch({ type: types.LOGGED_OUT_SUCCESS });
};
