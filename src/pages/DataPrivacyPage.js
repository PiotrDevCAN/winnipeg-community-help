import React from 'react';
import { Flex, Divider } from 'antd';
import DataPrivacy from '../components/Auxiliary/DataPrivacy';

const DataPrivacyPage = () => {
  return (
    <Flex align="center" vertical>
      {/* <Divider /> */}
      <DataPrivacy />
    </Flex>
  );
};

export default DataPrivacyPage;
