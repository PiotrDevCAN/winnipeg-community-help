import { useSelector } from "react-redux";
import useVolunteerActions from "@/customHooks/actions/useVolunteerActions";

const useVolunteerRecord = () => {
  const { selectedRecord, error, isError, isLoading, status } = useSelector(
    (state) => state.volunteers
  );

  const { fetchRecordById, addRecord, modifyRecord, removeRecord } =
    useVolunteerActions();

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

export default useVolunteerRecord;
