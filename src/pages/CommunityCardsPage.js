import React, { useEffect } from 'react';
import { Row } from 'antd';
import { CommunityProvider } from '../context/CommunityContext';
import Cards from '../components/Community/Cards';
import Pagination from '../components/Community/Pagination';
import { usePageHeaderContext } from '../context/PageHeaderContext';
import CommunityFilter from '../components/Filters/CommunityFilter';

const CommunityCardsPage = () => {

  const { setComponent1 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CommunityFilter />);

    return () => {
      setComponent1(null);
    };
  }, [setComponent1]);

  return (
    <>
      <CommunityProvider>
        <Row gutter={16}>
          <Cards />
        </Row>
        <Pagination />
      </CommunityProvider>
    </>
  );
};

export default CommunityCardsPage;
