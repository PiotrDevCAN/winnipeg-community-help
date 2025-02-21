import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
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
    selectedRecord: selectedCategoryRaw,
    status: statusCategories,
  } = useHelpCategoryData();
  const {
    data: typesData,
    error: errorTypes,
    isError: isErrorTypes,
    isLoading: loadingTypes,
    selectedRecord: selectedTypeRaw,
    status: statusTypes,
  } = useHelpTypeData();

  // MUST STAY
  // used to filter out the selected category
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedTypeId, setSelectedTypeId] = useState(null);

  // MUST STAY
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [typesOptions, setTypesOptions] = useState([]);

  // store the selected community data
  const [categoryData, setCategoryData] = useState([]);
  const [typeData, setTypeData] = useState([]);

  // main loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCategory = (id) => {
    const categoryId = parseInt(id);
    const category = categoriesData.find((item) => item.id === categoryId);
    return category;
  };

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

  const getType = (id) => {
    const typeId = parseInt(id);
    const type = typesData.find((item) => item.id === typeId);
    return type;
  };

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

  const getParentIdById = (id) => {
    const typeId = parseInt(id);
    const type = typesData.find((item) => item.id === typeId);
    if (type) {
      return type.category_id;
    } else {
      return 0;
    }
  };

  const getTypes = (id) => {
    const categoryId = parseInt(id);
    const result = typesData.filter((item) => item.category_id === categoryId);
    return result;
  };

  const countTypes = (id) => {
    const categoryId = parseInt(id);
    const result = getTypes(categoryId);
    return result.length;
  };

  useEffect(() => {
  //   setMainCommunitiesData(mainCommunitiesDataRaw || []);
  }, []);

  useEffect(() => {
  //   setSubCommunitiesData(subCommunitiesDataRaw || []);
  }, []);

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
