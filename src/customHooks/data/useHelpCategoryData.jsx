import { useEffect } from "react";
import { useSelector } from "react-redux";
import useHelpCategoryActions from "@/customHooks/actions/useHelpCategoryActions";

const useHelpCategoryData = () => {
  const { data, error, isError, isLoading, selectedRecord, status } =
    useSelector((state) => state.helpCategories);

  const { fetchAllRecords } = useHelpCategoryActions();

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data]);
  // }, [data, fetchAllRecords]);

  return { data, error, isError, isLoading, selectedRecord, status };
};

export default useHelpCategoryData;
