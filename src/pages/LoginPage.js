import React from 'react';
import { Divider } from 'antd';
import AuthForm from '../components/Auth/AuthForm';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const { isAuthenticated } = useAuthContext();

  return !isAuthenticated ? <>
    <Divider />
    <AuthForm />
  </> : <Navigate to="/myProfile" />;
};

export default LoginPage;
