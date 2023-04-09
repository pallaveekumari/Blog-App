import * as types from "../AuthReducer/actionTypes";
import axios from "axios";
export const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN__REQUEST });

  return axios
    .post("http://localhost:8080/users/login", payload)

    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.token));
      dispatch({ type: types.LOGIN__SUCEESS });
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN__FAILURE });
    });
};

export const createUser = (payload) => (dispatch) => {
  dispatch({ type: types.CREATE_USER_REQUEST });

  return axios
    .post("http://localhost:8080/users", payload)

    .then((res) => {
      dispatch({ type: types.CREATE_USER_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.CREATE_USER_FAILURE, error: err });
    });
};
