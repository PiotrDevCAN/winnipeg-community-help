import { getAccessToken, getRefreshToken } from "@/services/APIAuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_APP_API_BASE_URL;

const initialAccessToken = null;
const initialRefreshToken = null;
// const initialAccessToken = getAccessToken();
// const initialRefreshToken = getRefreshToken();

export const refreshTokenAction = createAsyncThunk(
  "authAPI/refreshToken",
  async ({ refreshToken }) => {
    const response = await fetch(`${API_URL}/auth/refresh-token-oauth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Token refresh failed");
    }

    const { accessToken } = await response.json();
    return accessToken;
  }
);

export const loginAction = createAsyncThunk(
  "authAPI/login",
  async ({ username, password }) => {
    const response = await fetch(`${API_URL}/auth/authenticate-oauth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed APIAuthService");
    }

    return await response.json();
  }
);

export const logoutAction = createAsyncThunk("authAPI/logout", async () => {
  // Optional: notify the server about the logout
  await fetch(`${API_URL}/auth/logout-oauth`, { method: "POST" });
});

const authAPISlice = createSlice({
  name: "authAPI",
  initialState: {
    accessToken: initialAccessToken,
    refreshToken: initialRefreshToken,
    status: "idle",
    error: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    increment: (state) => state + 1,
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshTokenAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(refreshTokenAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload;
      })
      .addCase(refreshTokenAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(loginAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.status = "succeeded";
        state.accessToken = null;
      });
  },
});

export const actions = authAPISlice.actions;

export default authAPISlice.reducer;
