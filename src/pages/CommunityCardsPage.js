import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import { CommunityProvider } from '../context/CommunityContext';
import Cards from '../components/Community/Cards';
import Pagination from '../components/Community/Pagination';
import { usePageHeaderContext } from '../context/PageHeaderContext';
import CommunityFilter from '../components/Filters/CommunityFilter';

const CommunityCardsPage = () => {

  const { setComponent1 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CommunityFilter />);
  }, [setComponent1]);

  return (
    <>
      <CommunityProvider>
        <Flex gap="middle" wrap style={{ paddingBottom: 20 }}>
          <Cards />
        </Flex>
        <Pagination />
      </CommunityProvider>
    </>
  );
};

export default CommunityCardsPage;
