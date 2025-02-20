import { useEffect } from "react";
import { useSelector } from "react-redux";
import useNeedyActions from "@/customHooks/actions/useNeedyActions";

const useNeedyData = () => {
  const { data, error, isError, isLoading, selectedRecord, status } =
    useSelector((state) => state.peopleInNeed);

  const { fetchAllRecords } = useNeedyActions();

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data]);
  // }, [data, fetchAllRecords]);

  return { data, error, isError, isLoading, selectedRecord, status };
};

export default useNeedyData;
