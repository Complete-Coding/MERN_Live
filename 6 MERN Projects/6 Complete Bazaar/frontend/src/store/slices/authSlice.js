import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token") || null,
  userType: localStorage.getItem("userType") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log('state: ', state, 'action: ', action.payload);
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userType = action.payload.userType;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userType", action.payload.userType);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userType = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userType");
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;