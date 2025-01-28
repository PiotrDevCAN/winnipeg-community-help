import React from 'react';
import { Divider, Flex } from 'antd';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/auth/AuthContext';
import UserInfo from '@/components/Auth/UserInfo';
import EditForm from '@/components/Profile/EditForm';

const MyProfilePage = () => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ?
        <Flex align="center" vertical>
            <UserInfo />
            <Divider />
            <EditForm />
        </Flex> : <Navigate to="/login" />;
};

export default MyProfilePage;
