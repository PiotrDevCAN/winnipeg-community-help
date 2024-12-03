import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import ListTable from '../components/HelpType/ListTable';

const HelpTypeListPage = () => {

  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <ListTable />
    </Flex>
  );
};

export default HelpTypeListPage;
