import React from 'react';
import { Flex } from 'antd';
import RequestForm from '../components/Help/Form';

const HelpRequestPage = () => {
  return (
    <Flex gap="middle" align="center" vertical>
      <RequestForm />
    </Flex>
  );
};

export default HelpRequestPage;
