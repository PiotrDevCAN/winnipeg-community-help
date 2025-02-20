import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import useCustomContext from "@/customHooks/useCustomContext";
import useNeedyData from "@/customHooks/data/useNeedyData";
import useVolunteerData from "@/customHooks/data/useVolunteerData";

const StaticPeopleContext = createContext();
StaticPeopleContext.displayName = "Static People";

export const useStaticPeopleContext = () =>
  useCustomContext(StaticPeopleContext);

export const StaticPeopleProvider = ({ children }) => {
  const {
    data: needyDataRaw,
    error: errorPeopleInNeed,
    isError: isErrorPeopleInNeed,
    isLoading: loadingPeopleInNeed,
    selectedRecord: selectedNeedyRaw,
    status: statusPeopleInNeed,
  } = useNeedyData();
  const {
    data: volunteersDataRaw,
    error: errorVolunteer,
    isError: isErrorVolunteers,
    isLoading: loadingVolunteers,
    selectedRecord: selectedVolunteerRaw,
    status: statusVolunteers,
  } = useVolunteerData();

  // MUST STAY
  // store the data fetched from API
  const [needyData, setNeedyData] = useState([]);
  const [volunteersData, setVolunteersData] = useState([]);

  // MUST STAY
  // used to filter out the selected people
  const [selectedNeedyId, setSelectedNeedyId] = useState(null);
  const [selectedVolunteerId, setSelectedVolunteerId] = useState(null);

  // main loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setNeedyData(needyDataRaw.data || []);
  }, [needyDataRaw]);

  useEffect(() => {
    setVolunteersData(volunteersDataRaw.data || []);
  }, [volunteersDataRaw]);

  const contextValue = useMemo(
    () => ({
      needyData,
      volunteersData,

      selectedNeedyId,
      setSelectedNeedyId,
      selectedVolunteerId,
      setSelectedVolunteerId,

      loadingPeopleInNeed,
      loadingVolunteers,
      errorPeopleInNeed,
      errorVolunteer,
      loading,
      error,
    }),
    [
      needyData,
      volunteersData,

      selectedNeedyId,
      setSelectedNeedyId,
      selectedVolunteerId,
      setSelectedVolunteerId,

      loadingPeopleInNeed,
      loadingVolunteers,
      errorPeopleInNeed,
      errorVolunteer,
      loading,
      error,
    ]
  );

  return (
    <StaticPeopleContext.Provider value={contextValue}>
      {children}
    </StaticPeopleContext.Provider>
  );
};

export default StaticPeopleContext;
