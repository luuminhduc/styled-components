import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postList: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

const { reducer: postReducer } = postSlice;

export default postReducer;
