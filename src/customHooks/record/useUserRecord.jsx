import { useSelector } from "react-redux";
import useUserActions from "@/customHooks/actions/useUserActions";

const useUserRecord = () => {
  const { selectedRecord, error, isError, isLoading, status } = useSelector(
    (state) => state.users
  );

  const { fetchRecordById, addRecord, modifyRecord, removeRecord } =
    useUserActions();

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

export default useUserRecord;
