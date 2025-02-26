import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useAPIAuthContext } from "@/context/auth/APIAuthContext";
import APIService from "@/services/APIService";
import useCustomContext from "@/customHooks/useCustomContext";
import useHelpCategoryData from "@/customHooks/data/useHelpCategoryData";
import useHelpTypeData from "@/customHooks/data/useHelpTypeData";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

const StaticHelpDataContext = createContext();
StaticHelpDataContext.displayName = "Static Help Data";

export const useStaticHelpDataContext = () =>
  useCustomContext(StaticHelpDataContext);

export const StaticHelpProvider = ({ children }) => {
  const { isReady, getAccessToken } = useAPIAuthContext();

  const {
    data: categoriesData,
    error: errorCategories,
    isError: isErrorCategories,
    isLoading: loadingCategories,
    status: statusCategories,
  } = useHelpCategoryData();
  const {
    data: typesData,
    error: errorTypes,
    isError: isErrorTypes,
    isLoading: loadingTypes,
    status: statusTypes,
  } = useHelpTypeData();

  // MUST STAY
  // used to filter out the selected category
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedTypeId, setSelectedTypeId] = useState(null);

  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [typesOptions, setTypesOptions] = useState([]);

  // store the selected community data
  const [categoryData, setCategoryData] = useState(null);
  const [typeData, setTypeData] = useState(null);

  // main loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCategory = useCallback((id) => {
    const categoryId = parseInt(id);
    const category = categoriesData.find((item) => item.id === categoryId);
    return category;
  }, [categoriesData]);

  const getCategoryById = useCallback(
    async (id) => {
      if (isReady) {
        try {
          const categoryId = parseInt(id);

          const accessToken = await getAccessToken();
          const response = await apiService.makeRequest(
            `/help-category/${categoryId}/`,
            {
              method: "GET",
            },
            accessToken
          );

          if (response.status === "success") {
            const result = response.data;
            setCategoryData(result);
            return result;
          } else {
            console.error(response.message || "Failed to fetch item");
            setError(response.message);
          }
        } catch (err) {
          console.error("Error fetching item:", err);
          setError(err.message || "An error occurred while fetching an item");
        }
      }
    },
    [isReady, getAccessToken]
  );

  const getType = useCallback((id) => {
    const typeId = parseInt(id);
    const type = typesData.find((item) => item.id === typeId);
    return type;
  }, [typesData]);

  const getTypeById = useCallback(
    async (id) => {
      if (isReady) {
        try {
          const typeId = parseInt(id);

          const accessToken = await getAccessToken();
          const response = await apiService.makeRequest(
            `/help-type/${typeId}/`,
            {
              method: "GET",
            },
            accessToken
          );

          if (response.status === "success") {
            const result = response.data;
            setTypeData(result);
            return result;
          } else {
            console.error(response.message || "Failed to fetch item");
            setError(response.message);
          }
        } catch (err) {
          console.error("Error fetching item:", err);
          setError(err.message || "An error occurred while fetching an item");
        }
      }
    },
    [isReady, getAccessToken]
  );

  const getParentIdById = useCallback((id) => {
    const typeId = parseInt(id);
    const type = typesData.find((item) => item.id === typeId);
    if (type) {
      return type.category_id;
    } else {
      return null;
    }
  }, [typesData]);

  const getTypes = useCallback((id) => {
    const categoryId = parseInt(id);
    const result = typesData.filter((item) => item.category_id === categoryId);
    return result;
  }, [typesData]);

  const countTypes = useCallback((id) => {
    const categoryId = parseInt(id);
    const result = getTypes(categoryId);
    return result.length;
  }, [getTypes]);

  const contextValue = useMemo(
    () => ({
      categoriesData,
      typesData,

      categoriesOptions,
      setCategoriesOptions,
      typesOptions,
      setTypesOptions,

      selectedCategoryId,
      setSelectedCategoryId,
      selectedTypeId,
      setSelectedTypeId,

      categoryData,
      typeData,

      getCategory,
      getCategoryById,
      getType,
      getTypeById,
      getParentIdById,
      getTypes,
      countTypes,

      loadingCategories,
      loadingTypes,
      errorCategories,
      errorTypes,
      loading,
      error,
    }),
    [
      categoriesData,
      typesData,

      categoriesOptions,
      setCategoriesOptions,
      typesOptions,
      setTypesOptions,

      selectedCategoryId,
      setSelectedCategoryId,
      selectedTypeId,
      setSelectedTypeId,

      categoryData,
      typeData,

      getCategory,
      getCategoryById,
      getType,
      getTypeById,
      getParentIdById,
      getTypes,
      countTypes,

      loadingCategories,
      loadingTypes,
      errorCategories,
      errorTypes,
      loading,
      error,
    ]
  );

  return (
    <StaticHelpDataContext.Provider value={contextValue}>
      {children}
    </StaticHelpDataContext.Provider>
  );
};

export default StaticHelpDataContext;
