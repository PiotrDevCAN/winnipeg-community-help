import { getAccessToken } from "@/services/APIAuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIService from "@/services/APIService";
import reduxInitialState from "@/data/reduxInitialState";

const API_URL = import.meta.env.VITE_APP_API_BASE_URL;
const apiService = new APIService(API_URL);

const endpoint = "offer";

export const fetchAllRecords = createAsyncThunk(
  "offer/fetchAllRecords",
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
  "offer/getRecordById",
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
  "offer/createRecord",
  async (offer) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(offer),
    });
    return response.json();
  }
);

export const updateRecord = createAsyncThunk(
  "offer/updateRecord",
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
  "offer/deleteRecord",
  async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return id;
  }
);

const offerSlice = createSlice({
  name: "offer",
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
          (offer) => offer.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteRecord.fulfilled, (state, action) => {
        state.data = state.data.filter((offer) => offer.id !== action.payload);
      });
  },
});

export default offerSlice.reducer;
