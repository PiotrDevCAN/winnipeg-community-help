import { getAccessToken } from "@/services/APIAuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIService from "@/services/APIService";
import reduxInitialState from "@/data/reduxInitialState";
// import useReduxSlice from "@/customHooks/useReduxSlice";

const API_URL = import.meta.env.VITE_APP_API_BASE_URL;
const apiService = new APIService(API_URL);

const endpoint = "community";

export const fetchAllRecords = createAsyncThunk(
  "community/fetchAllRecords",
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
  "community/getRecordById",
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
  "community/createRecord",
  async (record) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    return response.json();
  }
);

export const updateRecord = createAsyncThunk(
  "community/updateRecord",
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
  "community/deleteRecord",
  async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return id;
  }
);

export const getOffersNumber = createAsyncThunk(
  "community/getOffersNumber",
  async (id) => {
    const accessToken = await getAccessToken();
    const response = await apiService.makeRequest(
      `/${endpoint}/${id}/offers`,
      {},
      accessToken
    );
    return response;
  }
);

export const getRequestsNumber = createAsyncThunk(
  "community/getRequestsNumber",
  async (id) => {
    const accessToken = await getAccessToken();
    const response = await apiService.makeRequest(
      `/${endpoint}/${id}/requests`,
      {},
      accessToken
    );
    return response;
  }
);

export const getUsers = createAsyncThunk("community/getUsers", async (id) => {
  const accessToken = await getAccessToken();
  const response = await apiService.makeRequest(
    `/users/list/community/${id}/`,
    {},
    accessToken
  );
  return response;
});

export const getVolunteers = createAsyncThunk(
  "community/getVolunteers",
  async (id) => {
    const accessToken = await getAccessToken();
    const response = await apiService.makeRequest(
      `/volunteers/list/community/${id}/`,
      {},
      accessToken
    );
    return response;
  }
);

export const getPeopleInNeed = createAsyncThunk(
  "community/getPeopleInNeed",
  async (id) => {
    const accessToken = await getAccessToken();
    const response = await apiService.makeRequest(
      `/needy/list/community/${id}/`,
      {},
      accessToken
    );
    return response;
  }
);

const communitySlice = createSlice({
  name: "community",
  initialState: {
    ...reduxInitialState,
    numberOfRequests: 0,
    numberOfOffers: 0,
    numberOfUsers: 0, // USERS IN COMMUNITY
    numberOfPeopleInNeed: 0, // PERSON IN NEED IN COMMUNITY
    numberOfVolunteers: 0, // VOLUNTEERS IN COMMUNITY
  },
  reducers: {
    increment: (state) => state + 1,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecords.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchAllRecords.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllRecords.rejected, (state, action) => {
        state.status = "failed";
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getRecordById.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(getRecordById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.selectedRecord = action.payload;
      })
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

export default communitySlice.reducer;
