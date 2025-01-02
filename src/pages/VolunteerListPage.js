import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListTable from '@/components/Volunteer/ListTable';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import { useVolunteerContext } from '@/context/VolunteerContext';
import CommunityFilter from '@/components/Filters/CommunityFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericListPage from '@/components/Layout/GenericListPage';
import { useRouteContext } from '@/context/RouteContext';

const VolunteerListPage = () => {
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
      useContextHook={useVolunteerContext}
      ListTableComponent={ListTable}
    />
  );
};

export default VolunteerListPage;
