import React from 'react';
import { Flex } from 'antd';
import LogoutForm from '@/components/Auth/LogoutForm';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/auth/AuthContext';

const LogoutPage = () => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ?
    <Flex align="center" vertical>
      <LogoutForm />
    </Flex> : <Navigate to="/login" />;
};

export default LogoutPage;
