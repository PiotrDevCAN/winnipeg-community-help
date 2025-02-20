import React, { useEffect } from "react";
import Cards from "@/components/Community/Cards";
import { usePageHeaderContext } from "@/context/auxiliary/PageHeaderContext";
import CommunityFilter from "@/components/Filters/CommunityFilter";
import ClearFilters from "@/components/Filters/ClearFilters";
import GenericCardsPage from "@/components/Layout/GenericCardsPage";
import useCommunityData from "@/customHooks/data/useCommunityData";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const CommunityCardsPage = () => {
  const { setComponent1, setComponent2 } = usePageHeaderContext();

  useEffect(() => {
    setComponent1(<CommunityFilter />);
    return () => {
      setComponent1(null);
    };
  }, [setComponent1]);

  useEffect(() => {
    setComponent2(<ClearFilters />);
    return () => {
      setComponent2(null);
    };
  }, [setComponent2]);

  const { newCommunity: handleNewItemCreate } = useAppRoutes();

  return (
    <>
      <GenericCardsPage
        onNewItemCreate={handleNewItemCreate}
        useDataHook={useCommunityData}
        CardsComponent={Cards}
      />
    </>
  );
};

export default CommunityCardsPage;
