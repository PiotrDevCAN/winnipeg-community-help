import React, { useEffect } from 'react';
import { Row } from 'antd';
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
    setComponent2(<CommunityFilter />);
    setComponent3(<ClearFilters />);

    return () => {
      setComponent1(null);
      setComponent2(null);
      setComponent3(null);
    };
  }, [setComponent1, setComponent2, setComponent3]);

  return (
    <>
      <OfferProvider>
        <Row gutter={16}>
          <Cards />
        </Row>
        <Pagination />
      </OfferProvider>
    </>
  );
};

export default HelpOfferCardsPage;
