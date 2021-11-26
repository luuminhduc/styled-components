import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";
const store = configureStore({
  reducer: {
    postReducer,
  },
});

export default store;
