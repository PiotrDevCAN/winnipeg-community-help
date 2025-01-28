import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListTable from '@/components/Profile/ListTable';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import CommunityFilter from '@/components/Filters/CommunityFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericListPage from '@/components/Layout/GenericListPage';
import { useUserContext } from '@/context/mainTypes/UserContext';
import { useRouteContext } from '@/context/RouteContext';

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

  const { newVolunteer: handleNewItem } = useRouteContext();

  return (
    <GenericListPage
      handleNewItem={handleNewItem}
      useContextHook={useUserContext}
      ListTableComponent={ListTable}
    />
  );
};

export default UserListPage;
