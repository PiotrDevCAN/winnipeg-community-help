import React, { useEffect } from "react";
import Cards from "@/components/User/Cards";
import { usePageHeaderContext } from "@/context/auxiliary/PageHeaderContext";
import CommunityFilter from "@/components/Filters/CommunityFilter";
import ClearFilters from "@/components/Filters/ClearFilters";
import GenericCardsPage from "@/components/Layout/GenericCardsPage";
import { useParams } from "react-router-dom";
import useUserData from "@/customHooks/data/useUserData";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const UserCardsPage = () => {
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
    <>
      <GenericCardsPage
        onNewItemCreate={handleNewItemCreate}
        useDataHook={useUserData}
        CardsComponent={Cards}
      />
    </>
  );
};

export default UserCardsPage;
