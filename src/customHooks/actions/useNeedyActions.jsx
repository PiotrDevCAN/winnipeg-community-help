import {
  fetchAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
  getOffersNumber,
  getRequestsNumber,
} from "@/redux/features/needy/needySlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const useNeedyActions = () => {
  const dispatch = useDispatch();

  return {
    fetchAllRecords: useCallback(async () => {
      dispatch(fetchAllRecords());
    }, [dispatch]),
    fetchRecordById: useCallback(async (id) => {
      dispatch(getRecordById(id))
    }, [dispatch]),
    addRecord: (record) => dispatch(createRecord(record)),
    modifyRecord: (id, updatedData) =>
      dispatch(updateRecord({ id, updatedData })),
    removeRecord: (id) => dispatch(deleteRecord(id)),

    getOffersNumber: (id) => dispatch(getOffersNumber(id)),
    getRequestsNumber: (id) => dispatch(getRequestsNumber(id)),
  };
};

export default useNeedyActions;
