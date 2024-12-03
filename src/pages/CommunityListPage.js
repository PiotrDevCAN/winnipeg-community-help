import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import { CommunityProvider } from '../context/CommunityContext';
import ListTable from '../components/Community/ListTable';
import { usePageHeaderContext } from '../context/PageHeaderContext';
import CommunityFilter from '../components/Filters/CommunityFilter';

const CommunityListPage = () => {

  const { setComponent1 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CommunityFilter />);

    return () => {
      setComponent1(null);
    };
  }, [setComponent1]);

  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <CommunityProvider>
        <ListTable />
      </CommunityProvider>
    </Flex>
  );
};

export default CommunityListPage;
