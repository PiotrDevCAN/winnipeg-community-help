import React, { useEffect } from "react";
import { Select } from "antd";
import { VscTypeHierarchySub } from "react-icons/vsc";
import useCategoryFilter from "@/customHooks/filters/useCategoryFilter";

const Type = ({ preSelectedId }) => {
  const {
    triggerTypeChange,
    selectedTypeId,
    handleTypeChange,
    typesOptions,
    loadingTypes,
  } = useCategoryFilter();

  useEffect(() => {
    if (preSelectedId) {
      triggerTypeChange(preSelectedId);
    }
  }, [preSelectedId, triggerTypeChange]);

  return (
    <>
      <Select
        value={selectedTypeId}
        suffixIcon={<VscTypeHierarchySub />}
        showSearch
        placeholder="Select a Type"
        optionFilterProp="label"
        onChange={handleTypeChange}
        options={typesOptions}
        loading={loadingTypes}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default Type;
