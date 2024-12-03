import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
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
  }, [setComponent1]);

  useEffect(() => {
    setComponent2(<CommunityFilter />);
  }, [setComponent2]);

  useEffect(() => {
    setComponent3(<ClearFilters />);
  }, [setComponent3]);

  return (
    <>
      <RequestProvider>
        <Flex gap="middle" wrap style={{ paddingBottom: 20 }}>
          <Cards />
        </Flex>
        <Pagination />
      </RequestProvider>
    </>
  );
};

export default HelpRequestCardsPage;
