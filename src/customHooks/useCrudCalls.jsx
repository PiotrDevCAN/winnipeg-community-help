import { useState } from "react";
import APIService from "@/services/APIService";
import { useAPIAuthContext } from "@/context/auth/APIAuthContext";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

export const useCrudCalls = () => {
  const [data, setData] = useState([]);

  const { getAccessToken } = useAPIAuthContext();

  const createRecord = async (path, newItem, onLoading, onError) => {
    try {
      const accessToken = await getAccessToken();
      const response = await apiService.makeRequest(
        `/${path}/`,
        {
          method: "POST",
          body: JSON.stringify(newItem),
        },
        accessToken
      );

      if (response.status === "success") {
        setData((prevData) => [...prevData, response.data]);
      } else {
        console.error(response.message || "Failed to create item");
        onError(response.message);
      }
    } catch (err) {
      console.error("Error creating item:", err);
      onError(err.message || "An error occurred while creating an item");
    }
  };

  const readRecord = async (path, id, onFinish, onLoading, onError) => {
    try {
      onLoading(true);

      const accessToken = await getAccessToken();
      const response = await apiService.makeRequest(
        `/${path}/${id}/`,
        {
          method: "GET",
        },
        accessToken
      );

      if (response.status === "success") {
        const result = response.data;
        // setItem(result);
        onFinish(result);
      } else {
        console.error(response.message || "Failed to fetch item");
        onError(response.message);
      }
    } catch (err) {
      console.error("Error fetching item:", err);
      onError(err.message || "An error occurred while fetching an item");
    } finally {
      onLoading(false);
    }
  };

  const updateRecord = async (path, id, updatedData, onLoading, onError) => {
    try {
      const accessToken = await getAccessToken();
      const response = await apiService.makeRequest(
        `/${path}/${id}/`,
        {
          method: "PUT",
          body: JSON.stringify(updatedData),
        },
        accessToken
      );

      if (response.status === "success") {
        setData((prevData) =>
          prevData.map((item) => (item.id === id ? response.data : item))
        );
      } else {
        console.error(response.message || "Failed to update item");
        onError(response.message);
      }
    } catch (err) {
      console.error("Error updating item:", err);
      onError(err.message || "An error occurred while updating an item");
    }
  };

  const deleteRecord = async (path, id, onLoading, onError) => {
    try {
      const accessToken = await getAccessToken();
      const response = await apiService.makeRequest(
        `/${path}/${id}/`,
        {
          method: "DELETE",
        },
        accessToken
      );

      if (response.status === "success") {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      } else {
        console.error(response.message || "Failed to delete item");
        onError(response.message);
      }
    } catch (err) {
      console.error("Error deleting item:", err);
      onError(err.message || "An error occurred while deleting an item");
    }
  };

  return { data, createRecord, updateRecord, deleteRecord, readRecord };
};

export default useCrudCalls;
