import * as types from "../AppReducer/actionTypes";

const initialdata = {
  isLoading: false,
  isError: false,
  posts: [],
  users: [],
  editedPost: {},
  totalUsers: 0,
  totalPosts: 0,
  topUsers: [],
  topPosts: [],
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
    case types.GET_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        posts: [],
      };
    case types.GET_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        posts: payload,
      };
    case types.SET_EDITED_POST:
      return {
        ...state,
        isLoading: false,
        isError: false,
        editedPost: payload,
      };
    case types.GET_USERS_COUNT:
      return {
        ...state,
        isLoading: false,
        isError: false,
        totalUsers: payload,
      };
    case types.GET_POSTS_COUNT:
      return {
        ...state,
        isLoading: false,
        isError: false,
        totalPosts: payload,
      };
    case types.GET_TOP_USERS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        topUsers: payload,
      };
    case types.GET_TOP_POSTS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        topPosts: payload,
      };
    case types.GET_ALL_USERS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: payload,
      };
    default:
      return state;
  }
};
