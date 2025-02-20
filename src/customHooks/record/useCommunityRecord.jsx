import { useSelector } from "react-redux";
import useCommunityActions from "@/customHooks/actions/useCommunityActions";

const useCommunityRecord = () => {
  const { selectedRecord, error, isError, isLoading, status } = useSelector(
    (state) => state.communities
  );

  const { fetchRecordById, addRecord, modifyRecord, removeRecord } =
    useCommunityActions();

  return {
    fetchRecordById,
    addRecord,
    modifyRecord,
    removeRecord,
    selectedRecord,
    error,
    isError,
    isLoading,
    status,
  };
};

export default useCommunityRecord;
