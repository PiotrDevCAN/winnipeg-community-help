import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import ListTable from '../components/HelpCategory/ListTable';

const HelpCategoryListPage = () => {

  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <ListTable />
    </Flex>
  );
};

export default HelpCategoryListPage;
