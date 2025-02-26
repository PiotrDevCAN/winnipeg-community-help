import {
  fetchAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
} from "@/redux/features/helpCategory/helpCategorySlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const useHelpCategoryActions = () => {
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
  };
};

export default useHelpCategoryActions;
