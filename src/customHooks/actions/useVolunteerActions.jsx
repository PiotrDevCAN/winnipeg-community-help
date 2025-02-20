import {
  fetchAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
  getOffersNumber,
  getRequestsNumber,
} from "@/redux/features/volunteer/volunteerSlice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const useVolunteerActions = () => {
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

    getOffersNumber: (id) => dispatch(getOffersNumber(id)),
    getRequestsNumber: (id) => dispatch(getRequestsNumber(id)),
  };
};

export default useVolunteerActions;
