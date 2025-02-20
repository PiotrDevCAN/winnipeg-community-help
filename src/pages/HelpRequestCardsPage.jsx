import React, { useEffect } from "react";
import Cards from "@/components/Request/Cards";
import { usePageHeaderContext } from "@/context/auxiliary/PageHeaderContext";
import CategoryFilter from "@/components/Filters/CategoryFilter";
import CommunityFilter from "@/components/Filters/CommunityFilter";
import PeopleFilter from "@/components/Filters/PeopleFilter";
import ClearFilters from "@/components/Filters/ClearFilters";
import GenericCardsPage from "@/components/Layout/GenericCardsPage";
import { useParams } from "react-router-dom";
import useRequestData from "@/customHooks/data/useRequestData";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const HelpRequestCardsPage = () => {
  const { communityId, typeId, volunteerId, needyId } = useParams();

  const { setComponent1, setComponent2, setComponent3, setComponent4 } =
    usePageHeaderContext();

  useEffect(() => {
    setComponent1(<CategoryFilter preSelectedId={typeId} />);
    return () => {
      setComponent1(null);
    };
  }, [typeId, setComponent1]);

  useEffect(() => {
    setComponent2(<CommunityFilter preSelectedId={communityId} />);
    return () => {
      setComponent2(null);
    };
  }, [communityId, setComponent2]);

  useEffect(() => {
    setComponent3(
      <PeopleFilter
        preSelectedNeedyId={needyId}
        preSelectedVolunteerId={volunteerId}
      />
    );
    return () => {
      setComponent3(null);
    };
  }, [volunteerId, needyId, setComponent3]);

  useEffect(() => {
    setComponent4(<ClearFilters />);
    return () => {
      setComponent4(null);
    };
  }, [setComponent4]);

  const { askForHelp: handleNewItemCreate } = useAppRoutes();

  return (
    <GenericCardsPage
      onNewItemCreate={handleNewItemCreate}
      useDataHook={useRequestData}
      CardsComponent={Cards}
    />
  );
};

export default HelpRequestCardsPage;
