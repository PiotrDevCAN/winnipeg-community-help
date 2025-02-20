import React, { useCallback } from "react";
import { useAPIAuthContext } from "@/context/auth/APIAuthContext";
import APIService from "@/services/APIService";

import { useDispatch, useSelector } from "react-redux";
import {
  refreshTokenAction,
  loginAction,
  logoutAction,
} from "@/redux/features/authAPI/authAPISlice";
import useAPITokens from "@/customHooks/auth/useAPITokens";
import { getAccessToken } from "@/services/APIAuthService";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

export const useFetchData = () => {
  // const { isReady, getAccessToken } = useAPIAuthContext();

  // const dispatch = useDispatch();
  // const { accessToken, refreshToken, status, error, isLoading, isError } =
  //   useSelector((state) => state.authAPI);

  const { accessToken, refreshToken } = useAPITokens();

  // console.log("tokens check");
  // console.log(accessToken);
  // console.log(refreshToken);

  const fetchData = useCallback(
    async (onLoading, onError, onFinish) => {
      // if (isReady) {
      try {
        onLoading(true);

        const accessToken = await getAccessToken();
        const response = await apiService.makeRequest(
          "/community/",
          {},
          accessToken
        );

        if (response.status === "success") {
          onFinish(response.data || []);
        } else {
          console.error(response.message || "Unknown error occurred");
          onError(response.message);
        }

        if (response.pagination) {
          // console.log('Pagination Info - communities:', response.pagination);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        onError(err.message || "An error occurred while fetching data");
      } finally {
        onLoading(false);
      }
      // };
      // }, [isReady, getAccessToken]);
    },
    [accessToken]
  );

  return fetchData;
};

export default useFetchData;
