import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import { RequestProvider } from '../context/RequestContext';
import ListTable from '../components/Request/ListTable';
import { usePageHeaderContext } from '../context/PageHeaderContext';
import CategoryFilter from '../components/Filters/CategoryFilter';
import CommunityFilter from '../components/Filters/CommunityFilter';
import ClearFilters from '../components/ClearFilters';

const HelpRequestListPage = () => {

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
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <RequestProvider >
        <ListTable />
      </RequestProvider>
    </Flex>
  );
};

export default HelpRequestListPage;
