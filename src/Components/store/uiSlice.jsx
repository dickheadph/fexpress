import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showSideBar: false,
    hasAccount: false,
    readMore: false,
  },
  reducers: {
    toggleSideBar(state) {
      state.showSideBar = !state.showSideBar;
    },
    register(state) {
      state.hasAccount = !state.hasAccount;
    },
    about(state) {
      state.readMore = !state.readMore;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
