import React, { useEffect } from "react";
import { useCombinedCategoryContext } from "@/context/preview/CombinedCategoryContext";
import useLoadingMessage from "@/customHooks/useLoadingMessage";

const useTypeCategory = (item) => {
  const {
    loadCategoriesData,
    category,
    type,
    loadingCategory,
    loadingType,
    errorCategory,
    errorType,
  } = useCombinedCategoryContext();

  useEffect(() => {
    if (item) {
      const typeId = item.type_id;
      loadCategoriesData(typeId);
    }
  }, [item, loadCategoriesData]);

  useLoadingMessage(loadingType, "Type");
  useLoadingMessage(loadingCategory, "Category");

  // if (loadingCategory || !category) return <p>Loading category data...</p>;
  // if (loadingType || !type) return <p>Loading type data...</p>;
  // if (errorCategory) return <p>Error in obtaining category</p>;
  // if (errorType) return <p>Error in obtaining type data</p>;

  return { category, type };
};
export default useTypeCategory;
