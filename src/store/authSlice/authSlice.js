import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, authChecked: false },
  reducers: {
    logIn(state, action) {
      state.user = {
        uid: action.payload.uid,
        email: action.payload.email,
        username: action.payload.displayName,
      };
      console.log(state.user);
    },
    logOut(state) {
      state.user = null;
    },
    checkAuthentication(state, action) {
      state.authChecked = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
