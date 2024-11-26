import React from 'react';
import RemindForm from '../components/Auth/RemindForm';
import { Divider, Flex } from 'antd';

const RemindPage = () => {

  return (
    <Flex align="center" vertical>
      <Divider />
      <RemindForm />
    </Flex>
  );
};

export default RemindPage;
