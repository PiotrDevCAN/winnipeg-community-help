import React, { createContext, useState, useCallback } from "react";
import { useStaticHelpDataContext } from "@/context/static/StaticHelpDataContext";
import useCustomContext from "@/customHooks/useCustomContext";

const CombinedCategoryContext = createContext();
CombinedCategoryContext.displayName = "CombinedCategory";

export const useCombinedCategoryContext = () =>
  useCustomContext(CombinedCategoryContext);

export const CombinedCategoryProvider = ({ children }) => {
  const {
    getCategoryById,
    getTypeById,
    loading: staticLoading,
    error: staticError,
  } = useStaticHelpDataContext();

  const [category, setCategory] = useState(null);
  const [type, setType] = useState(null);

  const [loadingCategory, setLoadingCategory] = useState(false);
  const [loadingType, setLoadingType] = useState(false);

  const [errorCategory, setErrorCategory] = useState(null);
  const [errorType, setErrorType] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCategoriesData = useCallback(
    async (type_id) => {
      setLoading(true);
      setLoadingCategory(true);
      setLoadingType(true);

      try {
        const type = await getTypeById(type_id);
        if (type) {
          setType(type);
          const category = await getCategoryById(type.category_id);
          if (category) {
            setCategory(category);
          } else {
            setErrorCategory(true);
          }
        } else {
          setErrorType(true);
          setErrorCategory(true);
        }
        setLoadingCategory(false);
        setLoadingType(false);
      } catch (error) {
        setError(true);
        setErrorType(true);
        setErrorCategory(true);
      } finally {
        setLoading(false);
        setLoadingCategory(false);
        setLoadingType(false);
      }
    },
    [getTypeById, getCategoryById]
  );

  return (
    <CombinedCategoryContext.Provider
      value={{
        loadCategoriesData,
        category,
        type,
        loadingCategory,
        loadingType,
        errorCategory,
        errorType,
        loading,
        error,
      }}
    >
      {children}
    </CombinedCategoryContext.Provider>
  );
};

export default CombinedCategoryContext;
