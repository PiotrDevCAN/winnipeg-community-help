import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useAPIAuthContext } from "@/context/auth/APIAuthContext";
import APIService from "@/services/APIService";
import useCustomContext from "@/customHooks/useCustomContext";
import useMainCommunityData from "@/customHooks/data/useMainCommunityData";
import useCommunityData from "@/customHooks/data/useCommunityData";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

const StaticCommunityContext = createContext();
StaticCommunityContext.displayName = "Static Community";

export const useStaticCommunityContext = () =>
  useCustomContext(StaticCommunityContext);

export const StaticCommunityProvider = ({ children }) => {
  const { isReady, getAccessToken } = useAPIAuthContext();

  const {
    data: mainCommunitiesData,
    error: errorMainCommunities,
    isError: isErrorMainCommunities,
    isLoading: loadingMainCommunities,
    status: statusMainCommunities,
  } = useMainCommunityData();
  const {
    data: subCommunitiesData,
    error: errorSubCommunities,
    isError: isErrorSubCommunities,
    isLoading: loadingSubCommunities,
    status: statusSubCommunities,
  } = useCommunityData();

  // MUST STAY
  // used to filter out the selected community
  const [selectedCommunityId, setSelectedCommunityId] = useState(null);
  const [selectedSubCommunityId, setSelectedSubCommunityId] = useState(null);

  const [mainCommunitiesOptions, setMainCommunitiesOptions] = useState([]);
  const [subCommunitiesOptions, setSubCommunitiesOptions] = useState([]);

  // store the selected community data
  const [mainCommunityData, setMainCommunityData] = useState(null);
  const [subCommunityData, setSubCommunityData] = useState(null);

  // main loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCommunity = useCallback((id) => {
    const communityId = parseInt(id);
    const community = mainCommunitiesData.find(
      (item) => item.id === communityId
    );
    return community;
  }, [mainCommunitiesData]);

  const getCommunityById = useCallback(
    async (id) => {
      if (isReady) {
        try {
          const communityId = parseInt(id);

          const accessToken = await getAccessToken();
          const response = await apiService.makeRequest(
            `/main-community/${communityId}/`,
            {
              method: "GET",
            },
            accessToken
          );

          if (response.status === "success") {
            const result = response.data;
            setMainCommunityData(result);
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

  const getSubCommunity = useCallback((id) => {
    const communityId = parseInt(id);
    const subCommunity = subCommunitiesData.find(
      (item) => item.id === communityId
    );
    return subCommunity;
  }, [subCommunitiesData]);

  const getSubCommunityById = useCallback(
    async (id) => {
      if (isReady) {
        try {
          const communityId = parseInt(id);

          const accessToken = await getAccessToken();
          const response = await apiService.makeRequest(
            `/community/${communityId}/`,
            {
              method: "GET",
            },
            accessToken
          );

          if (response.status === "success") {
            const result = response.data;
            setSubCommunityData(result);
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
    const communityId = parseInt(id);
    const subCommunity = subCommunitiesData.find(
      (item) => item.id === communityId
    );
    if (subCommunity) {
      return subCommunity.community_id;
    } else {
      return null;
    }
  }, [subCommunitiesData]);

  const getSubCommunities = useCallback((id) => {
    const communityId = parseInt(id);
    const result = subCommunitiesData.filter(
      (item) => item.community_id === communityId
    );
    return result;
  }, [subCommunitiesData]);

  const countSubCommunities = useCallback((id) => {
    const communityId = parseInt(id);
    const result = getSubCommunities(communityId);
    return result.length;
  }, [getSubCommunities]);

  const contextValue = useMemo(
    () => ({
      mainCommunitiesData,
      subCommunitiesData,

      mainCommunitiesOptions,
      setMainCommunitiesOptions,
      subCommunitiesOptions,
      setSubCommunitiesOptions,

      selectedCommunityId,
      setSelectedCommunityId,
      selectedSubCommunityId,
      setSelectedSubCommunityId,

      mainCommunityData,
      subCommunityData,

      getCommunity,
      getCommunityById,
      getSubCommunity,
      getSubCommunityById,
      getParentIdById,
      getSubCommunities,
      countSubCommunities,

      loadingMainCommunities,
      loadingSubCommunities,
      loading,
      error,
    }),
    [
      mainCommunitiesData,
      subCommunitiesData,

      mainCommunitiesOptions,
      setMainCommunitiesOptions,
      subCommunitiesOptions,
      setSubCommunitiesOptions,

      selectedCommunityId,
      setSelectedCommunityId,
      selectedSubCommunityId,
      setSelectedSubCommunityId,

      mainCommunityData,
      subCommunityData,

      getCommunity,
      getCommunityById,
      getSubCommunity,
      getSubCommunityById,
      getParentIdById,
      getSubCommunities,
      countSubCommunities,

      loadingMainCommunities,
      loadingSubCommunities,
      loading,
      error,
    ]
  );

  return (
    <StaticCommunityContext.Provider value={contextValue}>
      {children}
    </StaticCommunityContext.Provider>
  );
};

export default StaticCommunityContext;
