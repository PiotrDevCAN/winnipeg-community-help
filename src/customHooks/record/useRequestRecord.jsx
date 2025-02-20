import { useSelector } from "react-redux";
import useRequestActions from "@/customHooks/actions/useRequestActions";

const useRequestRecord = () => {
  const { selectedRecord, error, isError, isLoading, status } = useSelector(
    (state) => state.requests
  );

  const { fetchRecordById, addRecord, modifyRecord, removeRecord } =
    useRequestActions();

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

export default useRequestRecord;
