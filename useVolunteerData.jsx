import { fetchAllRecords } from "@/redux/features/volunteer/volunteerSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useVolunteerData = () => {
  const data = useSelector((state) => state.volunteers);

  useEffect(() => {
    if (data.length === 0) {
      fetchAllRecords();
    }
  }, [data]);
  // }, [data, fetchAllRecords]);

  return data;
};

export default useVolunteerData;
