import React from 'react';
import RemindForm from '@/components/Auth/RemindForm';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import { Flex, Divider } from 'antd';

const RemindPage = () => {
  const { isAuthenticated } = useAuthContext();

  return !isAuthenticated ? <Flex align="center" vertical>
    <Divider />
    <RemindForm />
  </Flex> : <Navigate to="/myProfile" />;
};

export default RemindPage;
