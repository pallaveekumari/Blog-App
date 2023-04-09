import * as types from "../AppReducer/actionTypes";

export const createUser = () => (dispatch) => {
  dispatch({ type: types.CREATE_USER_REQUEST });

  return axios
    .post("http://localhost:8080/users")

    .then((res) => {
      dispatch({ type: types.CREATE_USER_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: types.CREATE_USER_FAILURE, error: err });
    });
};
