import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  token: "",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, payload) {},
    logOut(state) {},
  },
});

export const authAction = authSlice.actions;
export default authSlice;
