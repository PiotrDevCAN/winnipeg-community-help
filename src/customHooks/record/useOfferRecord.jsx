import { useSelector } from "react-redux";
import useOfferActions from "@/customHooks/actions/useOfferActions";

const useOfferRecord = () => {
  const { selectedRecord, error, isError, isLoading, status } = useSelector(
    (state) => state.offers
  );

  const { fetchRecordById, addRecord, modifyRecord, removeRecord } =
    useOfferActions();

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

export default useOfferRecord;
