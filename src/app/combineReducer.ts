import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import userReducer from "./users/userSLice";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

export default rootReducer;
