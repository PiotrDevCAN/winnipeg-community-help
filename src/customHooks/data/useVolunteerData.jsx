import { useEffect } from "react";
import { useSelector } from "react-redux";
import useVolunteerActions from "@/customHooks/actions/useVolunteerActions";

const useVolunteerData = () => {
  const { data, error, isError, isLoading, status } =
    useSelector((state) => state.volunteers);

  const { fetchAllRecords } = useVolunteerActions();

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data, fetchAllRecords]);

  return { data, error, isError, isLoading, status };
};

export default useVolunteerData;
