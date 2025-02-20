import { useCallback, useEffect, useMemo, useState } from "react";
import { useStaticPeopleContext } from "@/context/static/StaticPeopleContext";
import SelectAllOption from "@/components/SelectAllOption";
import prepareSelectData from "@/services/prepareUserSelectData";

const usePeopleFilter = () => {
  const {
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
  } = useStaticPeopleContext();

  // store the options for the dropdowns
  const [peopleInNeedOptions, setPeopleInNeedOptions] = useState([]);
  const [volunteersOptions, setVolunteersOptions] = useState([]);

  useEffect(() => {
    if (needyData.length !== 0) {
      const updatedUsersData = prepareSelectData(needyData);
      setPeopleInNeedOptions(SelectAllOption.concat(updatedUsersData));
    }
  }, [needyData]);

  useEffect(() => {
    if (volunteersData.length !== 0) {
      const updatedVolunteersData = prepareSelectData(volunteersData);
      setVolunteersOptions(SelectAllOption.concat(updatedVolunteersData));
    }
  }, [volunteersData]);

  const updateNeedy = useCallback((value) => {
    if (value !== null) {
      const needyId = parseInt(value);
      if (String(value).includes("all")) {
        setSelectedNeedyId(null);
      } else {
        setSelectedNeedyId(needyId);
      }
    } else {
      setSelectedNeedyId(value);
    }
  }, [setSelectedNeedyId]);

  const updateVolunteer = useCallback((value) => {
    if (value !== null) {
      const volunteerId = parseInt(value);
      if (String(value).includes("all")) {
        setSelectedVolunteerId(null);
      } else {
        setSelectedVolunteerId(volunteerId);
      }
    } else {
      setSelectedVolunteerId(value);
    }
  }, [setSelectedVolunteerId]);

  const handleNeedyChange = useCallback((value) => {
    updateNeedy(value);
  }, [updateNeedy]);

  const handleVolunteerChange = useCallback((value) => {
    updateVolunteer(value);
  }, [updateVolunteer]);

  return useMemo(
    () => ({
      needyData,
      volunteersData,
      selectedNeedyId,
      setSelectedNeedyId,
      selectedVolunteerId,
      setSelectedVolunteerId,
      handleNeedyChange,
      handleVolunteerChange,
      peopleInNeedOptions,
      volunteersOptions,
      loadingPeopleInNeed,
      loadingVolunteers,
      errorPeopleInNeed,
      errorVolunteer,
      updateNeedy,
      updateVolunteer,
    }),
    [
      needyData,
      volunteersData,
      selectedNeedyId,
      setSelectedNeedyId,
      selectedVolunteerId,
      setSelectedVolunteerId,
      handleNeedyChange,
      handleVolunteerChange,
      peopleInNeedOptions,
      volunteersOptions,
      loadingPeopleInNeed,
      loadingVolunteers,
      errorPeopleInNeed,
      errorVolunteer,
      updateNeedy,
      updateVolunteer,
    ]
  );
};

export default usePeopleFilter;
