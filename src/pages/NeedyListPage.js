import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListTable from '@/components/Profile/ListTable';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import CommunityFilter from '@/components/Filters/CommunityFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericListPage from '@/components/Layout/GenericListPage';
import { useUserContext } from '@/context/UserContext';
import { useRouteContext } from '@/context/RouteContext';

const NeedyListPage = () => {
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
    <GenericListPage
      handleNewItem={handleNewItem}
      useContextHook={useUserContext}
      ListTableComponent={ListTable}
    />
  );
};

export default NeedyListPage;
