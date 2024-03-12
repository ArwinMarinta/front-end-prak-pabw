"use client";
import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const cookies = new Cookies(); // Import js-cookie library

const initialState = {
  token: cookies.get("token") || null, // Get token from cookies
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        const decoded = jwtDecode(action.payload);
        const expirationDate = new Date(decoded.exp * 1000);
        cookies.set("token", action.payload, { expires: expirationDate });
      } else {
        cookies.remove("token");
      }
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
