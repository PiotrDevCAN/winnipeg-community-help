import { useEffect } from "react";
import { useSelector } from "react-redux";
import useMainCommunityActions from "@/customHooks/actions/useMainCommunityActions";

const useMainCommunityData = () => {
  const { data, error, isError, isLoading, selectedRecord, status } =
    useSelector((state) => state.mainCommunities);

  const { fetchAllRecords } = useMainCommunityActions();

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data, fetchAllRecords]);

  return { data, error, isError, isLoading, selectedRecord, status };
};

export default useMainCommunityData;
