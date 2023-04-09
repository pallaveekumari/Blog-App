import * as types from "../AuthReducer/actionTypes";

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN__REQUEST });

  return axios.post("http://localhost:8080/users/login",payload)
    
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.token));
      dispatch({ type: types.LOGIN__SUCEESS});
    })
    .catch((err) => {
      console.log(err);

      dispatch({ type: types.LOGIN__FAILURE });
    });
};