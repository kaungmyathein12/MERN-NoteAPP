import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStateChange: false,
  currentUser: null,
  jwtToken: null,
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    onAuthStateChange: (state, action) => {
      state.authStateChange = true;
      state.currentUser = action.payload.user;
      if (action.payload.user === null) {
        state.jwtToken = null;
      } else {
        state.jwtToken = action.payload.token;
      }
    },
    login: (state, action) => {
      localStorage.setItem("jwtToken", action.payload);
      state.authStateChange = true;
      window.location.reload();
    },
    logout: (state) => {
      localStorage.removeItem("jwtToken");
      state.jwtToken = null;
      window.location.reload();
    },
  },
});

export const { onAuthStateChange, login, logout } = userSlice.actions;

export default userSlice.reducer;
