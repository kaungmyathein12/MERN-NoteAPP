import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStateChange: false,
  currentUser: null,
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    onAuthStateChange: (state, action) => {
      state.currentUser = action.payload;
      state.authStateChange = true;
    },
    login: (state, action) => {
      localStorage.setItem("jwtToken", action.payload);
      state.authStateChange = true;
    },
  },
});

export const { onAuthStateChange, login } = userSlice.actions;

export default userSlice.reducer;
