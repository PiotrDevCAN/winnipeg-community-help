import React, { useEffect } from 'react';
import Cards from '@/components/User/Cards';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import CommunityFilter from '@/components/Filters/CommunityFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericCardsPage from '@/components/Layout/GenericCardsPage';
import { useUserContext } from '@/context/UserContext';
import { useRouteContext } from '@/context/RouteContext';
import { useParams } from 'react-router-dom';

const UserCardsPage = () => {
  const { communityId } = useParams();

  const { setComponent1, setComponent2 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CommunityFilter preSelectedId={communityId} />);
    setComponent2(<ClearFilters />);

    return () => {
      setComponent1(null);
      setComponent2(null);
    };
  }, [setComponent1, setComponent2]);

  const { newVolunteer: handleNewItem } = useRouteContext();

  return (
    <>
      <GenericCardsPage
        handleNewItem={handleNewItem}
        useContextHook={useUserContext}
        CardsComponent={Cards}
      />
    </>
  );
};

export default UserCardsPage;
