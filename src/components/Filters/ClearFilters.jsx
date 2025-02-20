import React from "react";
import { Space } from "antd";
import useClearFilters from "@/customHooks/filters/useClearFilters";
import ClearFiltersButton from "@/components/Buttons/ClearFilters";

const ClearFilters = () => {
  const { handleClearFilters } = useClearFilters();
  return (
    <Space>
      <ClearFiltersButton key="1" id={null} onClick={handleClearFilters} />
    </Space>
  );
};

export default ClearFilters;
