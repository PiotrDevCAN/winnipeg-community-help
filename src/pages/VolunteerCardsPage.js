import React, { useEffect } from 'react';
import { Row } from 'antd';
import { VolunteerProvider } from '../context/VolunteerContext';
import Cards from '../components/Volunteer/Cards';
import Pagination from '../components/Volunteer/Pagination';
import { usePageHeaderContext } from '../context/PageHeaderContext';
import CommunityFilter from '../components/Filters/CommunityFilter';

const VolunteerCardsPage = () => {

  const { setComponent1 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CommunityFilter />);

    return () => {
      setComponent1(null);
    };
  }, [setComponent1]);

  return (
    <>
      <VolunteerProvider>
        <Row gutter={16}>
          <Cards />
        </Row>
        <Pagination />
      </VolunteerProvider>
    </>
  );
};

export default VolunteerCardsPage;
