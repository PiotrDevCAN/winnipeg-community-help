import React from 'react';
import { Flex, Divider } from 'antd';
import RegisterForm from '@/components/Auth/RegisterForm';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';

const RegisterPage = () => {
  const { isAuthenticated } = useAuthContext();

  return !isAuthenticated ?
    <Flex align="center" vertical>
      <Divider />
      <RegisterForm />
    </Flex> : <Navigate to="/myProfile" />;
};

export default RegisterPage;
