import { useSelector } from "react-redux";
import useNeedyActions from "@/customHooks/actions/useNeedyActions";

const useNeedyRecord = () => {
  const { selectedRecord, error, isError, isLoading, status } = useSelector(
    (state) => state.peopleInNeed
  );

  const { fetchRecordById, addRecord, modifyRecord, removeRecord } =
    useNeedyActions();

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

export default useNeedyRecord;
