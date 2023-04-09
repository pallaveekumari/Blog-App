import { reducer as AuthReducer } from "../Redux/AuthReducer/reducer";
import thunk from "redux-thunk";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
export const store = legacy_createStore(
  combineReducers({ AuthReducer }),
  applyMiddleware(thunk)
);
