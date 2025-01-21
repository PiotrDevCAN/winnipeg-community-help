import React, { useEffect } from 'react';
import { CommunityProvider, useCommunityContext } from '@/context/CommunityContext';
import Cards from '@/components/Community/Cards';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import CommunityFilter from '@/components/Filters/CommunityFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericCardsPage from '@/components/Layout/GenericCardsPage';
import { useRouteContext } from '@/context/RouteContext';

const CommunityCardsPage = () => {

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
    <>
      <CommunityProvider>
        <GenericCardsPage
          handleNewItem={handleNewItem}
          useContextHook={useCommunityContext}
          CardsComponent={Cards}
        />
      </CommunityProvider>
    </>
  );
};

export default CommunityCardsPage;
