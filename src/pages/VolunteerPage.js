import React from 'react';
import { Flex, Divider } from 'antd';
import NewVolunteerForm from '../components/Volunteer/Form';

const VolunteerPage = () => {
  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <NewVolunteerForm />
    </Flex>
  );
};

export default VolunteerPage;
