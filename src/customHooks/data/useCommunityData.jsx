import { useEffect } from "react";
import { useSelector } from "react-redux";
import useCommunityActions from "@/customHooks/actions/useCommunityActions";

const useCommunityData = () => {
  const { data, error, isError, isLoading, status } =
    useSelector((state) => state.communities);

  const { fetchAllRecords } = useCommunityActions();

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data, fetchAllRecords]);

  return { data, error, isError, isLoading, status };
};

export default useCommunityData;
