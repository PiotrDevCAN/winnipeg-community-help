import { useEffect } from "react";
import { useSelector } from "react-redux";
import useRequestActions from "@/customHooks/actions/useRequestActions";

const useRequestData = () => {
  const { data, error, isError, isLoading, selectedRecord, status } =
    useSelector((state) => state.requests);

  const { fetchAllRecords } = useRequestActions();

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data]);
  // }, [data, fetchAllRecords]);

  return { data, error, isError, isLoading, selectedRecord, status };
};

export default useRequestData;
