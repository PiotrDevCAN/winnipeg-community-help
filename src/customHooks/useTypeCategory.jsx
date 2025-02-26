import React, { useEffect } from "react";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import useHelpCategoryRecord from "@/customHooks/record/useHelpCategoryRecord";
import useHelpTypeRecord from "@/customHooks/record/useHelpTypeRecord";

const useTypeCategory = (item) => {
  const {
    fetchRecordById: getTypeById,
    selectedRecord: type,
    isLoading: loadingType,
  } = useHelpTypeRecord();
  const {
    fetchRecordById: getCategoryById,
    selectedRecord: category,
    isLoading: loadingCategory,
  } = useHelpCategoryRecord();

  useEffect(() => {
    if (item) {
      const typeId = item.type_id;
      getTypeById(typeId);
    }
  }, [item, getTypeById]);

  useEffect(() => {
    if (type) {
      const category_id = type.category_id;
      getCategoryById(category_id);
    }
  }, [type, getCategoryById]);

  useLoadingMessage(loadingType, "Type");
  useLoadingMessage(loadingCategory, "Category");

  return { category, type };
};
export default useTypeCategory;
