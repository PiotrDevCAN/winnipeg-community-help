import React, { useState } from 'react';
import { Flex } from 'antd';
import { Navigate } from 'react-router-dom';
import RemindForm from '../components/Auth/RemindForm';

const RemindPage = () => {
  const [user, setUser] = useState(false);

  if (user) {
    return <Navigate to="/profile" replace={true} />;
  }

  return (
    <Flex gap="middle" align="center" vertical>
      <RemindForm />
    </Flex>
  );
};

export default RemindPage;
