import {
  fetchAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
  getOffersNumber,
  getRequestsNumber,
  getUsers,
  getVolunteers,
  getPeopleInNeed,
} from "@/redux/features/community/communitySlice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const useCommunityActions = () => {
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

    getUsers: (id) => dispatch(getUsers(id)),
    getVolunteers: (id) => dispatch(getVolunteers(id)),
    getPeopleInNeed: (id) => dispatch(getPeopleInNeed(id)),
  };
};

export default useCommunityActions;
