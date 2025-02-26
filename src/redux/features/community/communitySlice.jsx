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
    return response;
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

export const getPeopleInNeedNumber = createAsyncThunk(
  "community/getPeopleInNeedNumber",
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

export const getVolunteersNumber = createAsyncThunk(
  "community/getVolunteersNumber",
  async (id) => {
    const accessToken = await getAccessToken();
    const response = await apiService.makeRequest(
      `/volunteer/list/community/${id}/`,
      {},
      accessToken
    );
    return response;
  }
);

export const getUsersNumber = createAsyncThunk("community/getUsersNumber", async (id) => {
  const accessToken = await getAccessToken();
  const response = await apiService.makeRequest(
    `/user/list/community/${id}/`,
    {},
    accessToken
  );
  return response;
});

const communitySlice = createSlice({
  name: "community",
  initialState: {
    ...reduxInitialState,
    numberOfRequests: 999,
    numberOfOffers: 888,
    numberOfPeopleInNeed: 0,
    numberOfVolunteers: 0,
    numberOfUsers: 0,
  },
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
      })

      // .addCase(getOffersNumber.pending, (state) => {
      //   state.status = "loading";
      //   state.isLoading = true;
      // })
      .addCase(getOffersNumber.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        const { data } = action.payload;
        const { amount } = data;
        state.numberOfOffers = amount;
      })

      // .addCase(getRequestsNumber.pending, (state) => {
      //   state.status = "loading";
      //   state.isLoading = true;
      // })
      .addCase(getRequestsNumber.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        const { data } = action.payload;
        const { amount } = data;
        state.numberOfRequests = amount;
      })

      // .addCase(getPeopleInNeedNumber.pending, (state) => {
      //   state.status = "loading";
      //   state.isLoading = true;
      // })
      .addCase(getPeopleInNeedNumber.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        const { data } = action.payload;
        const { amount } = data;
        state.numberOfPeopleInNeed = amount;
      })
      // .addCase(getVolunteersNumber.pending, (state) => {
      //   state.status = "loading";
      //   state.isLoading = true;
      // })
      .addCase(getVolunteersNumber.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        const { data } = action.payload;
        const { amount } = data;
        state.numberOfVolunteers = amount;
      })
      // .addCase(getUsersNumber.pending, (state) => {
      //   state.status = "loading";
      //   state.isLoading = true;
      // })
      .addCase(getUsersNumber.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        const { data } = action.payload;
        const { amount } = data;
        state.numberOfUsers = amount;
      })
  },
});

export default communitySlice.reducer;
