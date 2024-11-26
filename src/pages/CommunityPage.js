import React from 'react';
import { Flex, Divider } from 'antd';
import NewCommunityForm from '../components/Community/Form';

const Page = () => {
  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <NewCommunityForm />
    </Flex>
  );
};

export default Page;
