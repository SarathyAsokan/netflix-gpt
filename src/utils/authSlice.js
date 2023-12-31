import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userAuth: null,
    isSignedIn: false
  },
  reducers: {
    addUserAuth: (state, action) => {
        state.userAuth = action.payload;
        state.isSignedIn = true;
    },
    clearUserAuth: (state, action) => {
        state.userAuth = null;
        state.isSignedIn = false;
    }
  },
});


export const {addUserAuth, clearUserAuth} = authSlice.actions;
export default authSlice.reducer;
