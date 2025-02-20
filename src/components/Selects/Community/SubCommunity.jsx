import { Select } from "antd";
import React, { useEffect } from "react";
import useCommunityFilter from "@/customHooks/filters/useCommunityFilter";
import { RiCommunityLine } from "react-icons/ri";

const SubCommunity = ({ preSelectedId }) => {
  const {
    triggerCommunityChange,
    selectedSubCommunityId,
    handleSubCommunityChange,
    subCommunitiesOptions,
    loadingSubCommunities,
  } = useCommunityFilter();

  useEffect(() => {
    if (preSelectedId) {
      triggerCommunityChange(preSelectedId);
    }
  }, [preSelectedId, triggerCommunityChange]);

  return (
    <>
      <Select
        value={selectedSubCommunityId}
        suffixIcon={<RiCommunityLine />}
        showSearch
        placeholder="Select a Sub Community"
        optionFilterProp="label"
        onChange={handleSubCommunityChange}
        options={subCommunitiesOptions}
        loading={loadingSubCommunities}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default SubCommunity;
