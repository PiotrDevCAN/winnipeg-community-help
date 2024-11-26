import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import { VolunteerProvider } from '../context/VolunteerContext';
import Cards from '../components/Volunteer/Cards';
import Pagination from '../components/Volunteer/Pagination';
import { usePageHeaderContext } from '../context/PageHeaderContext';
import CommunityFilter from '../components/Filters/CommunityFilter';

const VolunteerCardsPage = () => {

  const { setComponent1 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CommunityFilter />);
  }, [setComponent1]);

  return (
    <Flex gap="middle" align="center" vertical>
      {/* <Divider /> */}
      <VolunteerProvider>
        <Cards />
        <Pagination />
      </VolunteerProvider>
      <Divider />
    </Flex>
  );
};

export default VolunteerCardsPage;
