import React from 'react';
import ResetForm from '@/components/Auth/ResetForm';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import { Flex, Divider } from 'antd';

const ResetPage = () => {
  const { isAuthenticated } = useAuthContext();

  return !isAuthenticated ? <Flex align="center" vertical>
    <Divider />
    <ResetForm />
  </Flex> : <Navigate to="/myProfile" />;
};

export default ResetPage;
