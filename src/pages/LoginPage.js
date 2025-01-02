import React from 'react';
import AuthForm from '@/components/Auth/AuthForm';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';

const LoginPage = () => {
  const { isAuthenticated } = useAuthContext();

  return !isAuthenticated ? <AuthForm /> : <Navigate to="/myProfile" />;
};

export default LoginPage;
