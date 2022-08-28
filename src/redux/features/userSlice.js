import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStateChange: false,
  currentUser: null,
  totalNotes: 0,
  deletedNote: 0,
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    onAuthStateChange: (state, action) => {
      state.authStateChange = true;
      state.currentUser = action.payload;
    },
    login: (state, action) => {
      localStorage.setItem("jwtToken", action.payload);
      state.authStateChange = true;
    },
    logout: () => {
      localStorage.removeItem("jwtToken");
      window.location.reload();
    },
    setTotalNote: (state, action) => {
      state.totalNotes = action.payload;
    },
    setDeletedNote: (state) => {
      state.deletedNote = state.deletedNote + 1;
    },
  },
});

export const { onAuthStateChange, login, logout, setTotalNote } =
  userSlice.actions;

export default userSlice.reducer;
