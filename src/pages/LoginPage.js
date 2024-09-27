import React, { useState } from 'react';
import { Flex } from 'antd';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';

const LoginPage = () => {
  const [user, setUser] = useState(false);

  if (user) {
    return <Navigate to="/profile" replace={true} />;
  }

  return (
    <Flex gap="middle" align="center" vertical>
      <LoginForm />
    </Flex>
  );
};

export default LoginPage;
