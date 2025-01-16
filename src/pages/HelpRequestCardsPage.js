import React, { useEffect } from 'react';
import { RequestProvider, useRequestContext } from '@/context/RequestContext';
import Cards from '@/components/Request/Cards';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import CategoryFilter from '@/components/Filters/CategoryFilter';
import CommunityFilter from '@/components/Filters/CommunityFilter';
// import PeopleFilter from '@/components/Filters/PeopleFilter';
import RequestRequestorFilter from '@/components/Filters/RequestRequestorFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericCardsPage from '@/components/Layout/GenericCardsPage';
import { useRouteContext } from '@/context/RouteContext';
import { useParams } from 'react-router-dom';

const HelpRequestCardsPage = () => {
  const { communityId, typeId, volunteerId, needyId } = useParams();

  const { setComponent1, setComponent2, setComponent3, setComponent4, setComponent5 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CategoryFilter preSelectedId={typeId} />);
    setComponent2(<CommunityFilter preSelectedId={communityId} />);
    setComponent3(<RequestRequestorFilter preSelectedVolunteerId={volunteerId} preSelectedNeedyId={needyId} />);
    setComponent4(<ClearFilters />);

    return () => {
      setComponent1(null);
      setComponent2(null);
      setComponent3(null);
      setComponent4(null);
      setComponent5(null);
    };
  }, [setComponent1, setComponent2, setComponent3, setComponent4, setComponent5]);

  const { askForHelp: handleNewItem } = useRouteContext();

  return (
    <RequestProvider>
      <GenericCardsPage
        handleNewItem={handleNewItem}
        useContextHook={useRequestContext}
        CardsComponent={Cards}
      />
    </RequestProvider>
  );
};

export default HelpRequestCardsPage;
