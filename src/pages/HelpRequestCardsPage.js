import React, { useEffect } from 'react';
import { Row } from 'antd';
import { RequestProvider } from '../context/RequestContext';
import Cards from '../components/Request/Cards';
import Pagination from '../components/Request/Pagination';
import { usePageHeaderContext } from '../context/PageHeaderContext';
import CategoryFilter from '../components/Filters/CategoryFilter';
import CommunityFilter from '../components/Filters/CommunityFilter';
import ClearFilters from '../components/ClearFilters';

const HelpRequestCardsPage = () => {

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
      <RequestProvider>
        <Row gutter={16}>
          <Cards />
        </Row>
        <Pagination />
      </RequestProvider>
    </>
  );
};

export default HelpRequestCardsPage;
