import {
  fetchAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
} from "@/redux/features/HelpCategory/helpCategorySlice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const useHelpCategoryActions = () => {
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

export default useHelpCategoryActions;
