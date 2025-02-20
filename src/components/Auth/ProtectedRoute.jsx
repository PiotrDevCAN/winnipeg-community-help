import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/auth/AuthContext';
import AdminAccessOnly from '@/components/AdminAccessOnly';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, isAdmin } = useAuthContext();
    const { admin } = rest;

    if (admin) {
        return isAuthenticated && isAdmin ? <Component {...rest} /> : <AdminAccessOnly />;
    }
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
