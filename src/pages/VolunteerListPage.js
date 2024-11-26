import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import { VolunteerProvider } from '../context/VolunteerContext';
import ListTable from '../components/Volunteer/ListTable';
import { usePageHeaderContext } from '../context/PageHeaderContext';
import CommunityFilter from '../components/Filters/CommunityFilter';

const VolunteerListPage = () => {

  const { setComponent1 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CommunityFilter />);
  }, [setComponent1]);

  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <VolunteerProvider>
        <ListTable />
      </VolunteerProvider>
    </Flex>
  );
};

export default VolunteerListPage;
