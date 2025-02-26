import { useEffect } from "react";
import { useSelector } from "react-redux";
import useHelpTypeActions from "@/customHooks/actions/useHelpTypeActions";

const useHelpTypeData = () => {
  const { data, error, isError, isLoading, status } =
    useSelector((state) => state.helpTypes);

  const { fetchAllRecords } = useHelpTypeActions();

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data, fetchAllRecords]);

  return { data, error, isError, isLoading, status };
};

export default useHelpTypeData;
