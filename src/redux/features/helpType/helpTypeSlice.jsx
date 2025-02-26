import { getAccessToken } from "@/services/APIAuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIService from "@/services/APIService";
import reduxInitialState from "@/data/reduxInitialState";
import usePendingCallback from "@/customHooks/redux/usePendingCallback";
import useSucceededCallback from "@/customHooks/redux/useSucceededCallback";
import useFailedCallback from "@/customHooks/redux/useFailedCallback";
import useSucceededRecordCallback from "@/customHooks/redux/useSucceededRecordCallback";

const API_URL = import.meta.env.VITE_APP_API_BASE_URL;
const apiService = new APIService(API_URL);

const endpoint = "help-type";

export const fetchAllRecords = createAsyncThunk(
  "helpType/fetchAllRecords",
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
  "helpType/getRecordById",
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
  "helpType/createRecord",
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
  "helpType/updateRecord",
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
  "helpType/deleteRecord",
  async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return id;
  }
);

const helpTypeSlice = createSlice({
  name: "helpType",
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

export default helpTypeSlice.reducer;
