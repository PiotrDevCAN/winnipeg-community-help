import { useEffect } from "react";
import { useSelector } from "react-redux";
import useVolunteerActions from "@/customHooks/actions/useVolunteerActions";

const useVolunteerData = () => {
  const { data, error, isError, isLoading, selectedRecord, status } =
    useSelector((state) => state.volunteers);

  const { fetchAllRecords } = useVolunteerActions();

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data, fetchAllRecords]);

  return { data, error, isError, isLoading, selectedRecord, status };
};

export default useVolunteerData;
