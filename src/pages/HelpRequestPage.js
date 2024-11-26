import React from 'react';
import { Flex, Divider } from 'antd';
import RequestForm from '../components/Request/Form';

const HelpRequestPage = () => {
  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <RequestForm />
    </Flex>
  );
};

export default HelpRequestPage;
