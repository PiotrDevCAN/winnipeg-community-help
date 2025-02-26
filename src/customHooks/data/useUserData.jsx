import { useEffect } from "react";
import { useSelector } from "react-redux";
import useUserActions from "@/customHooks/actions/useUserActions";

const useUserData = () => {
  const { data, error, isError, isLoading, status } =
    useSelector((state) => state.users);

  const { fetchAllRecords } = useUserActions();

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data, fetchAllRecords]);

  return { data, error, isError, isLoading, status };
};

export default useUserData;
