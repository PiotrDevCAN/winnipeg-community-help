import React from "react";
import { Select } from "antd";
import { TbCategory } from "react-icons/tb";
import useCategoryFilter from "@/customHooks/filters/useCategoryFilter";

const Category = () => {
  const {
    selectedCategoryId,
    handleCategoryChange,
    categoriesOptions,
    loadingCategories,
  } = useCategoryFilter();

  return (
    <>
      <Select
        value={selectedCategoryId}
        suffixIcon={<TbCategory />}
        showSearch
        placeholder="Select a Category"
        optionFilterProp="label"
        onChange={handleCategoryChange}
        options={categoriesOptions}
        loading={loadingCategories}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default Category;
