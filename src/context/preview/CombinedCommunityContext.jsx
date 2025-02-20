import React, { createContext, useState, useCallback } from "react";
import { useStaticCommunityContext } from "@/context/static/StaticCommunityContext";
import useCustomContext from "@/customHooks/useCustomContext";

const CombinedCommunityContext = createContext();
CombinedCommunityContext.displayName = "CombinedCommunity";

export const useCombinedCommunityContext = () =>
  useCustomContext(CombinedCommunityContext);

export const CombinedCommunityProvider = ({ children }) => {
  const { getCommunityById, getSubCommunityById } = useStaticCommunityContext();

  const [mainCommunityData, setMainCommunityData] = useState(null);
  const [subCommunityData, setSubCommunityData] = useState(null);

  const [loadingMainCommunity, setLoadingMainCommunity] = useState(false);
  const [loadingSubCommunity, setLoadingSubCommunity] = useState(false);

  const [errorMainCommunity, setErrorMainCommunity] = useState(null);
  const [errorSubCommunity, setErrorSubCommunity] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load the main and sub community data
  const loadCommunitiesData = useCallback(
    async (sub_community_id) => {
      setLoading(true);
      setLoadingMainCommunity(true);
      setLoadingSubCommunity(true);
      try {
        const tempSubCommunityData = await getSubCommunityById(
          sub_community_id
        );
        if (tempSubCommunityData) {
          setSubCommunityData(tempSubCommunityData);
          const tempMainCommunityData = await getCommunityById(
            tempSubCommunityData.community_id
          );
          if (tempMainCommunityData) {
            setMainCommunityData(tempMainCommunityData);
          } else {
            setError(true);
            setErrorMainCommunity(true);
          }
        } else {
          setError(true);
          setErrorMainCommunity(true);
          setErrorSubCommunity(true);
        }
      } catch (error) {
        setError(true);
        setErrorMainCommunity(true);
        setErrorSubCommunity(true);
      } finally {
        setLoading(false);
        setLoadingMainCommunity(false);
        setLoadingSubCommunity(false);
      }
    },
    [error, getSubCommunityById, getCommunityById]
  );

  return (
    <CombinedCommunityContext.Provider
      value={{
        loadCommunitiesData,
        mainCommunityData,
        subCommunityData,
        loadingMainCommunity,
        loadingSubCommunity,
        errorMainCommunity,
        errorSubCommunity,
        loading,
        error,
      }}
    >
      {children}
    </CombinedCommunityContext.Provider>
  );
};

export default CombinedCommunityContext;
