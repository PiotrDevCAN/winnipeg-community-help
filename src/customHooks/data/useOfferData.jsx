import { useEffect } from "react";
import { useSelector } from "react-redux";
import useOfferActions from "@/customHooks/actions/useOfferActions";

const useOfferData = () => {
  const { data, error, isError, isLoading, selectedRecord, status } =
    useSelector((state) => state.offers);

  const { fetchAllRecords } = useOfferActions();

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data]);
  // }, [data, fetchAllRecords]);

  return { data, error, isError, isLoading, selectedRecord, status };
};

export default useOfferData;
