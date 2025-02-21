import {
  fetchAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
  getOffersNumber,
  getRequestsNumber,
  getPeopleInNeedNumber,
  getVolunteersNumber,
  getUsersNumber,
} from "@/redux/features/community/communitySlice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const useCommunityActions = () => {
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

    getOffersNumber: useCallback((id) => {
      dispatch(getOffersNumber(id))
    }, [dispatch]),
    getRequestsNumber: useCallback((id) => {
      dispatch(getRequestsNumber(id))
    }, [dispatch]),

    getPeopleInNeedNumber: useCallback((id) => {
      dispatch(getPeopleInNeedNumber(id))
    }, [dispatch]),
    getVolunteersNumber: useCallback((id) => {
      dispatch(getVolunteersNumber(id))
    }, [dispatch]),
    getUsersNumber: useCallback((id) => {
      dispatch(getUsersNumber(id))
    }, [dispatch]),
  };
};

export default useCommunityActions;
