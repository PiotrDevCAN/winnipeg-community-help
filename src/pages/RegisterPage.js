import React, { useState } from 'react';
import { Flex } from 'antd';
import { Navigate } from 'react-router-dom';
import RegisterForm from '../components/Auth/RegisterForm';

const RegisterPage = () => {
  const [user, setUser] = useState(false);

  if (user) {
    return <Navigate to="/profile" replace={true} />;
  }

  return (
    <Flex gap="middle" align="center" vertical>
      <RegisterForm />
    </Flex>
  );
};

export default RegisterPage;
