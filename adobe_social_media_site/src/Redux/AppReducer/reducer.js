import * as types from "../AppReducer/actionTypes";

const initialdata = {
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialdata, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.CREATE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
