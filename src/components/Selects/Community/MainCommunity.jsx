import React from "react";
import { Select } from "antd";
import useCommunityFilter from "@/customHooks/filters/useCommunityFilter";
import { TbBuildingCommunity } from "react-icons/tb";

const MainCommunity = () => {
  const {
    selectedCommunityId,
    handleCommunityChange,
    mainCommunitiesOptions,
    loadingCommunities,
  } = useCommunityFilter();

  return (
    <>
      <Select
        value={selectedCommunityId}
        suffixIcon={<TbBuildingCommunity />}
        showSearch
        placeholder="Select a Community"
        optionFilterProp="label"
        onChange={handleCommunityChange}
        options={mainCommunitiesOptions}
        loading={loadingCommunities}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default MainCommunity;
