import React, { useEffect } from 'react';
import { OfferProvider, useOfferContext } from '@/context/OfferContext';
import Cards from '@/components/Offer/Cards';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import CategoryFilter from '@/components/Filters/CategoryFilter';
import CommunityFilter from '@/components/Filters/CommunityFilter';
// import PeopleFilter from '@/components/Filters/PeopleFilter';
import OfferRequestorFilter from '@/components/Filters/OfferRequestorFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericCardsPage from '@/components/Layout/GenericCardsPage';
import { useRouteContext } from '@/context/RouteContext';
import { useParams } from 'react-router-dom';

const HelpOfferCardsPage = () => {
  const { communityId, typeId, volunteerId, needyId } = useParams();

  const { setComponent1, setComponent2, setComponent3, setComponent4, setComponent5 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CategoryFilter preSelectedId={typeId} />);
    setComponent2(<CommunityFilter preSelectedId={communityId} />);
    setComponent3(<OfferRequestorFilter preSelectedVolunteerId={volunteerId} preSelectedNeedyId={needyId} />);
    setComponent4(<ClearFilters />);

    return () => {
      setComponent1(null);
      setComponent2(null);
      setComponent3(null);
      setComponent4(null);
      setComponent5(null);
    };
  }, [setComponent1, setComponent2, setComponent3, setComponent4, setComponent5]);

  const { offerHelp: handleNewItem } = useRouteContext();

  return (
    <OfferProvider>
      <GenericCardsPage
        handleNewItem={handleNewItem}
        useContextHook={useOfferContext}
        CardsComponent={Cards}
      />
    </OfferProvider>
  );
};

export default HelpOfferCardsPage;
