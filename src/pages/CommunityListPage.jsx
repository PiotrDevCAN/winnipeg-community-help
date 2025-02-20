import React, { useEffect } from "react";
import ListTable from "@/components/Community/ListTable";
import { usePageHeaderContext } from "@/context/auxiliary/PageHeaderContext";
import CommunityFilter from "@/components/Filters/CommunityFilter";
import ClearFilters from "@/components/Filters/ClearFilters";
import GenericListPage from "@/components/Layout/GenericListPage";
import useCommunityData from "@/customHooks/data/useCommunityData";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const CommunityListPage = () => {
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
    <GenericListPage
      onNewItemCreate={handleNewItemCreate}
      useDataHook={useCommunityData}
      ListTableComponent={ListTable}
    />
  );
};

export default CommunityListPage;
