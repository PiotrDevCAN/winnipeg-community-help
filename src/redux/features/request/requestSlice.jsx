import { getAccessToken } from "@/services/APIAuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIService from "@/services/APIService";
import reduxInitialState from "@/data/reduxInitialState";

const API_URL = import.meta.env.VITE_APP_API_BASE_URL;
const apiService = new APIService(API_URL);

const endpoint = "request";

export const fetchAllRecords = createAsyncThunk(
  "request/fetchAllRecords",
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
  "request/getRecordById",
  async (id) => {
    const accessToken = await getAccessToken();
    const response = await apiService.makeRequest(
      `/${endpoint}/${id}`,
      {},
      accessToken
    );
    return response.data;
  }
);

export const createRecord = createAsyncThunk(
  "request/createRecord",
  async (request) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    return response.json();
  }
);

export const updateRecord = createAsyncThunk(
  "request/updateRecord",
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
  "request/deleteRecord",
  async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return id;
  }
);

const requestSlice = createSlice({
  name: "request",
  initialState: reduxInitialState,
  reducers: {
    increment: (state) => state + 1,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecords.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllRecords.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchAllRecords.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getRecordById.fulfilled, (state, action) => {
        state.selectedRecord = action.payload;
      })
      .addCase(createRecord.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateRecord.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (request) => request.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteRecord.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (request) => request.id !== action.payload
        );
      });
  },
});

export default requestSlice.reducer;
