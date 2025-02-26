import { getAccessToken } from "@/services/APIAuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIService from "@/services/APIService";
import reduxInitialState from "@/data/reduxInitialState";
import useSucceededCallback from "@/customHooks/redux/useSucceededCallback";
import usePendingCallback from "@/customHooks/redux/usePendingCallback";
import useFailedCallback from "@/customHooks/redux/useFailedCallback";
import useSucceededRecordCallback from "@/customHooks/redux/useSucceededRecordCallback";

const API_URL = import.meta.env.VITE_APP_API_BASE_URL;
const apiService = new APIService(API_URL);

const endpoint = "main-community";

export const fetchAllRecords = createAsyncThunk(
  "mainCommunity/fetchAllRecords",
  async () => {
    const accessToken = await getAccessToken();
    const response = await apiService.makeRequest(
      `/${endpoint}/`,
      {},
      accessToken
    );
    return response;
  }
);

export const getRecordById = createAsyncThunk(
  "mainCommunity/getRecordById",
  async (id) => {
    const accessToken = await getAccessToken();
    const response = await apiService.makeRequest(
      `/${endpoint}/${id}`,
      {},
      accessToken
    );
    return response;
  }
);

export const createRecord = createAsyncThunk(
  "mainCommunity/createRecord",
  async (community) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(community),
    });
    return response.json();
  }
);

export const updateRecord = createAsyncThunk(
  "mainCommunity/updateRecord",
  async ({ id, updatedData }) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    return response.json();
  }
);

export const deleteRecord = createAsyncThunk(
  "mainCommunity/deleteRecord",
  async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return id;
  }
);

const mainCommunitySlice = createSlice({
  name: "mainCommunity",
  initialState: reduxInitialState,
  reducers: {
    increment: (state) => state + 1,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecords.pending, usePendingCallback)
      .addCase(fetchAllRecords.fulfilled, useSucceededCallback)
      .addCase(fetchAllRecords.rejected, useFailedCallback)

      .addCase(getRecordById.pending, usePendingCallback)
      .addCase(getRecordById.fulfilled, useSucceededRecordCallback)
      .addCase(getRecordById.rejected, useFailedCallback)

      .addCase(createRecord.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateRecord.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (community) => community.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteRecord.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (community) => community.id !== action.payload
        );
      });
  },
});

export default mainCommunitySlice.reducer;
