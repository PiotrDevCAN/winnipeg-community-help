import React, { useEffect } from 'react';
import Cards from '@/components/Volunteer/Cards';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import CommunityFilter from '@/components/Filters/CommunityFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericCardsPage from '@/components/Layout/GenericCardsPage';
import { useVolunteerContext } from '@/context/VolunteerContext';
import { useRouteContext } from '@/context/RouteContext';
import { useParams } from 'react-router-dom';

const VolunteerCardsPage = () => {
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

  const { newVolunteer: handleNewItem } = useRouteContext();

  return (
    <>
      <GenericCardsPage
        handleNewItem={handleNewItem}
        useContextHook={useVolunteerContext}
        CardsComponent={Cards}
      />
    </>
  );
};

export default VolunteerCardsPage;
