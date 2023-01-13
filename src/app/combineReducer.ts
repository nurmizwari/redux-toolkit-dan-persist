import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import userReducer from "./users/userSLice";
import apiReducer from "./api";
import snackBarReducer from "./snackBarSlice";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
  api: apiReducer,
  snackBar: snackBarReducer,
});

export default rootReducer;
