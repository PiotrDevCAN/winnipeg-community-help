import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ListTable from "@/components/Profile/ListTable";
import { usePageHeaderContext } from "@/context/auxiliary/PageHeaderContext";
import CommunityFilter from "@/components/Filters/CommunityFilter";
import ClearFilters from "@/components/Filters/ClearFilters";
import GenericListPage from "@/components/Layout/GenericListPage";
import useUserData from "@/customHooks/data/useUserData";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const UserListPage = () => {
  const { communityId } = useParams();

  const { setComponent1, setComponent2 } = usePageHeaderContext();

  useEffect(() => {
    setComponent1(<CommunityFilter preSelectedId={communityId} />);
    return () => {
      setComponent1(null);
    };
  }, [communityId, setComponent1]);

  useEffect(() => {
    setComponent2(<ClearFilters />);
    return () => {
      setComponent2(null);
    };
  }, [setComponent2]);

  const { newVolunteer: handleNewItemCreate } = useAppRoutes();

  return (
    <GenericListPage
      onNewItemCreate={handleNewItemCreate}
      useDataHook={useUserData}
      ListTableComponent={ListTable}
    />
  );
};

export default UserListPage;
