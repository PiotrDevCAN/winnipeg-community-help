import React from 'react';
import { Flex, Divider } from 'antd';
import DataDeletion from '../components/Auxiliary/DataDeletion';

const DataDeletionPage = () => {
  return (
    <Flex align="center" vertical>
      {/* <Divider /> */}
      <DataDeletion />
    </Flex>
  );
};

export default DataDeletionPage;
