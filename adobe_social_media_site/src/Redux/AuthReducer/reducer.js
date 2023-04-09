import * as types from "../AuthReducer/actionTypes";

const initialdata = {
  token: "",
  isLoading: false,
  isError: false,
  loggedInUser: JSON.parse(localStorage.getItem("user")) || {},
  isAuth: Boolean(localStorage.getItem("token")) || false,
};

export const reducer = (state = initialdata, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN__REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.LOGIN__SUCEESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        loggedInUser: payload.user,
        token: payload.token,
        isError: false,
      };

    case types.LOGIN__FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAuth: false,
        token: "",
      };

    case types.CREATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.CREATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.LOGGED_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        loggedInUser: {},
      };
    default:
      return state;
  }
};
