import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import { OfferProvider } from '../context/OfferContext';
import Cards from '../components/Offer/Cards';
import Pagination from '../components/Offer/Pagination';
import { usePageHeaderContext } from '../context/PageHeaderContext';
import CategoryFilter from '../components/Filters/CategoryFilter';
import CommunityFilter from '../components/Filters/CommunityFilter';
import ClearFilters from '../components/ClearFilters';

const HelpOfferCardsPage = () => {

  const { setComponent1, setComponent2, setComponent3 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CategoryFilter />);
  }, [setComponent1]);

  useEffect(() => {
    setComponent2(<CommunityFilter />);
  }, [setComponent2]);

  useEffect(() => {
    setComponent3(<ClearFilters />);
  }, [setComponent3]);

  return (
    <>
      <OfferProvider>
        <Flex gap="middle" wrap style={{ paddingBottom: 20 }}>
          <Cards />
        </Flex>
        <Pagination />
      </OfferProvider>
    </>
  );
};

export default HelpOfferCardsPage;
