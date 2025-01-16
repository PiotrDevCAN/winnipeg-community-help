import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OfferProvider, useOfferContext } from '@/context/OfferContext';
import ListTable from '@/components/Offer/ListTable';
import { usePageHeaderContext } from '@/context/PageHeaderContext';
import CategoryFilter from '@/components/Filters/CategoryFilter';
import CommunityFilter from '@/components/Filters/CommunityFilter';
// import PeopleFilter from '@/components/Filters/PeopleFilter';
import OfferRequestorFilter from '@/components/Filters/OfferRequestorFilter';
import ClearFilters from '@/components/Filters/ClearFilters';
import GenericListPage from '@/components/Layout/GenericListPage';
import { useRouteContext } from '@/context/RouteContext';

const HelpOfferListPage = () => {
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

  const { newOffer: handleNewItem } = useRouteContext();

  return (
    <OfferProvider>
      <GenericListPage
        handleNewItem={handleNewItem}
        useContextHook={useOfferContext}
        ListTableComponent={ListTable}
      />
    </OfferProvider>
  );
};

export default HelpOfferListPage;
