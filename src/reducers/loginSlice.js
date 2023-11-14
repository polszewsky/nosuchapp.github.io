import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    password: "",
    isAuth: false,
    isSync: false,
  },
  reducers: {
    loginAuthenticate: (state) => {
      state.isAuth = true;
      state.username = "johndoe@gmail.com";
      state.password = "MySecretPassword1234";
    },
    synchronizeUser: (state) => {
      state.isSync = true;
    },
  },
});

export const { loginAuthenticate, synchronizeUser } = loginSlice.actions;

export default loginSlice.reducer;
