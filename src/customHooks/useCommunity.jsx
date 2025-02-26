import React, { useEffect } from "react";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import useMainCommunityRecord from "@/customHooks/record/useMainCommunityRecord";
import useCommunityRecord from "@/customHooks/record/useCommunityRecord";

const useCommunity = (item) => {
  const {
    fetchRecordById: getCommunityById,
    selectedRecord: subCommunity,
    isLoading: loadingMainCommunity
  } = useCommunityRecord();
  const {
    fetchRecordById: getMainCommunityById,
    selectedRecord: mainCommunity,
    isLoading: loadingSubCommunity
  } = useMainCommunityRecord();

  useEffect(() => {
    if (item && !subCommunity) {
      // console.log('NOW LOAD SUB COMMUNITY');
      const communityId = item.community_id;
      getCommunityById(communityId);
    } else {
      // console.log('SKIP SUB COMMUNITY');
    }
  }, [item, getCommunityById, subCommunity]);

  useEffect(() => {
    if (item && subCommunity && !mainCommunity) {
      console.log('NOW LOAD MAIN COMMUNITY');
      const community_id = subCommunity.community_id;
      getMainCommunityById(community_id);
    } else {
      console.log('SKIP MAIN COMMUNITY');
    }
  }, [item, getMainCommunityById, subCommunity, mainCommunity]);

  useLoadingMessage(loadingMainCommunity, "Main Community");
  useLoadingMessage(loadingSubCommunity, "Sub Community");

  return { mainCommunity, subCommunity };
};
export default useCommunity;
