import React from 'react';
import RegisterForm from '../components/Auth/RegisterForm';
import { Divider, Flex } from 'antd';

const RegisterPage = () => {

  return (
    <Flex align="center" vertical>
      <Divider />
      <RegisterForm />
    </Flex>
  );
};

export default RegisterPage;
