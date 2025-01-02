import React from 'react';
import { Divider, Flex } from 'antd';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import UserInfo from '@/components/Auth/UserInfo';
// import EditForm from '@/components/Profile/EditForm';

const MyCommunityPage = () => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ?
        <Flex align="center" vertical>
            <UserInfo />
            <Divider />
            {/* <EditForm /> */}
        </Flex> : <Navigate to="/login" />;
};

export default MyCommunityPage;
