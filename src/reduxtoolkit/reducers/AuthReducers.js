import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "../../Services/AuthService";

const initialState = {
  auth: {},
  apiStatus: "",
  isLoading: false,
};

export const login = createAsyncThunk("login", async ({ email, password }) => {
  const { data } = await AuthServices.handleLogin({ email, password });
  return data;
});

const AuthSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.apiStatus = action.meta.requestStatus;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.apiStatus = action.meta.requestStatus;
      state.auth = action.payload;
    });
  },
});

export default AuthSlice.reducer;
