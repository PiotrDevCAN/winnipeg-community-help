import React from 'react';
import { Flex } from 'antd';
import NewCommunityForm from '../components/Community/Form';

const VolunteerPage = () => {
  return (
    <Flex gap="middle" align="center" vertical>
      <NewCommunityForm />
    </Flex>
  );
};

export default VolunteerPage;
