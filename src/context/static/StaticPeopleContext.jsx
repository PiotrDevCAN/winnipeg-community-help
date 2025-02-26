import React, {
  createContext,
  useState,
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
    data: needyData,
    error: errorPeopleInNeed,
    isError: isErrorPeopleInNeed,
    isLoading: loadingPeopleInNeed,
    status: statusPeopleInNeed,
  } = useNeedyData();
  const {
    data: volunteersData,
    error: errorVolunteer,
    isError: isErrorVolunteers,
    isLoading: loadingVolunteers,
    status: statusVolunteers,
  } = useVolunteerData();

  // MUST STAY
  // used to filter out the selected people
  const [selectedNeedyId, setSelectedNeedyId] = useState(null);
  const [selectedVolunteerId, setSelectedVolunteerId] = useState(null);

  // main loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
