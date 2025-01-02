import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RequestProvider, useRequestContext } from '@/context/RequestContext';
import ListTable from '@/components/Request/ListTable';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import CategoryFilter from '@/components/Filters/CategoryFilter';
import CommunityFilter from '@/components/Filters/CommunityFilter';
import PeopleFilter from '@/components/Filters/PeopleFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericListPage from '@/components/Layout/GenericListPage';
import { useRouteContext } from '@/context/RouteContext';

const HelpRequestListPage = () => {
  const { communityId, typeId, volunteerId, userId } = useParams();

  const { setComponent1, setComponent2, setComponent3, setComponent4, setComponent5 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CategoryFilter preSelectedId={typeId} />);
    setComponent2(<CommunityFilter preSelectedId={communityId} />);
    setComponent3(<PeopleFilter preSelectedVolunteerId={volunteerId} preSelectedUserId={userId} />);
    setComponent4(<ClearFilters />);

    return () => {
      setComponent1(null);
      setComponent2(null);
      setComponent3(null);
      setComponent4(null);
      setComponent5(null);
    };
  }, [setComponent1, setComponent2, setComponent3, setComponent4, setComponent5]);

  const { newRequest: handleNewItem } = useRouteContext();

  return (
    <RequestProvider >
      <GenericListPage
        handleNewItem={handleNewItem}
        useContextHook={useRequestContext}
        ListTableComponent={ListTable}
      />
    </RequestProvider>
  );
};

export default HelpRequestListPage;
