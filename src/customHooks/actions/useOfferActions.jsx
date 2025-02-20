import {
  fetchAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
} from "@/redux/features/offer/offerSlice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const useOfferActions = () => {
  const dispatch = useDispatch();

  return {
    fetchAllRecords: useCallback(async () => {
      dispatch(fetchAllRecords());
    }, [dispatch]),
    fetchRecordById: (id) => dispatch(getRecordById(id)),
    addRecord: (record) => dispatch(createRecord(record)),
    modifyRecord: (id, updatedData) =>
      dispatch(updateRecord({ id, updatedData })),
    removeRecord: (id) => dispatch(deleteRecord(id)),
  };
};

export default useOfferActions;
