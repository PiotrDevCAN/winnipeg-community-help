import { useCallback, useEffect, useMemo, useState } from "react";
import { useStaticCommunityContext } from "@/context/static/StaticCommunityContext";
import SelectAllOption from "@/components/SelectAllOption";
import prepareSelectData from "@/services/prepareSelectData";

const useCommunityFilter = () => {
  const {
    mainCommunitiesData,
    subCommunitiesData,
    selectedCommunityId,
    setSelectedCommunityId,
    selectedSubCommunityId,
    setSelectedSubCommunityId,
    loadingCommunities,
    loadingSubCommunities,
    getParentIdById,
    getSubCommunities,

    mainCommunitiesOptions,
    setMainCommunitiesOptions,
    subCommunitiesOptions,
    setSubCommunitiesOptions,
  } = useStaticCommunityContext();

  useEffect(() => {
    if (mainCommunitiesData.length !== 0) {
      const updatedMainCommunitiesData = prepareSelectData(mainCommunitiesData);
      setMainCommunitiesOptions(
        SelectAllOption.concat(updatedMainCommunitiesData)
      );
    }
  }, [mainCommunitiesData]);

  // useEffect(() => {
  //   if (subCommunitiesData.length !== 0) {
  //     const updatedSubCommunitiesData = prepareSelectData(subCommunitiesData);
  //     setSubCommunitiesOptions(
  //       SelectAllOption.concat(updatedSubCommunitiesData)
  //     );
  //   }
  // }, [subCommunitiesData]);

  const updateCommunity = useCallback((value, second) => {
    if (value !== null) {
      const communityId = parseInt(value);
      if (String(value).includes("all")) {
        setSubCommunitiesOptions([]);
        setSelectedCommunityId(null);
        setSelectedSubCommunityId(null);
      } else {
        const tempSubCommunities = getSubCommunities(communityId);
        const updatedSubCommunitiesData = prepareSelectData(tempSubCommunities);
        setSubCommunitiesOptions(
          SelectAllOption.concat(updatedSubCommunitiesData)
        );
        setSelectedCommunityId(communityId);
        setSelectedSubCommunityId(second);
      }
    } else {
      setSubCommunitiesOptions([]);
      setSelectedCommunityId(null);
      setSelectedSubCommunityId(null);
    }
  }, [getSubCommunities, setSubCommunitiesOptions, setSelectedCommunityId, setSelectedSubCommunityId]);

  const updateSubCommunity = useCallback((value) => {
    const communityId = parseInt(value);
    if (String(value).includes("all")) {
      setSelectedSubCommunityId(null);
    } else {
      setSelectedSubCommunityId(communityId);
    }
  }, [setSelectedSubCommunityId]);

  const handleCommunityChange = useCallback((value) => {
    updateCommunity(value);
  }, [updateCommunity]);

  const handleSubCommunityChange = useCallback((value) => {
    updateSubCommunity(value);
  }, [updateSubCommunity]);

  const triggerCommunityChange = useCallback(async (newCommunityId) => {
    if (newCommunityId) {
      const subCommunityId = parseInt(newCommunityId);
      const mainCommunityId = getParentIdById(subCommunityId);
      updateCommunity(mainCommunityId, subCommunityId);
    }
  }, [getParentIdById, updateCommunity]);

  return useMemo(
    () => ({
      mainCommunitiesData,
      subCommunitiesData,
      selectedCommunityId,
      setSelectedCommunityId,
      selectedSubCommunityId,
      setSelectedSubCommunityId,
      handleCommunityChange,
      handleSubCommunityChange,
      mainCommunitiesOptions,
      subCommunitiesOptions,
      loadingCommunities,
      loadingSubCommunities,
      updateCommunity,
      updateSubCommunity,
      triggerCommunityChange,
    }),
    [
      mainCommunitiesData,
      subCommunitiesData,
      selectedCommunityId,
      setSelectedCommunityId,
      selectedSubCommunityId,
      setSelectedSubCommunityId,
      handleCommunityChange,
      handleSubCommunityChange,
      mainCommunitiesOptions,
      subCommunitiesOptions,
      loadingCommunities,
      loadingSubCommunities,
      updateCommunity,
      updateSubCommunity,
      triggerCommunityChange,
    ]
  );
};

export default useCommunityFilter;
