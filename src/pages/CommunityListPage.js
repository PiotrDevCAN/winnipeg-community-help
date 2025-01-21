import React, { useEffect } from 'react';
import { CommunityProvider, useCommunityContext } from '@/context/CommunityContext';
import ListTable from '@/components/Community/ListTable';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import CommunityFilter from '@/components/Filters/CommunityFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericListPage from '@/components/Layout/GenericListPage';
import { useRouteContext } from '@/context/RouteContext';

const CommunityListPage = () => {

  const { setComponent1, setComponent2 } = usePageHeaderContext();

  useEffect(() => {
    setComponent1(<CommunityFilter />);
    return () => {
      setComponent1(null);
    };
  }, [setComponent1]);

  useEffect(() => {
    setComponent2(<ClearFilters />);
    return () => {
      setComponent2(null);
    };
  }, [setComponent2]);

  const { newCommunity: handleNewItem } = useRouteContext();

  return (
    <CommunityProvider>
      <GenericListPage
        handleNewItem={handleNewItem}
        useContextHook={useCommunityContext}
        ListTableComponent={ListTable}
      />
    </CommunityProvider>
  );
};

export default CommunityListPage;
