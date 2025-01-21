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
  const { communityId, typeId, volunteerId, needyId } = useParams();

  const { setComponent1, setComponent2, setComponent3, setComponent4 } = usePageHeaderContext();

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
    setComponent3(<PeopleFilter preSelectedVolunteerId={volunteerId} preSelectedNeedyId={needyId} />);
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
