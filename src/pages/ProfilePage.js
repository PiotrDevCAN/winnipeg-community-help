import React, { useState } from 'react';
import { Flex } from 'antd';
import { Navigate } from 'react-router-dom';
import EditForm from '../components/Profile/EditForm';

const ProfilePage = () => {
    const [user, setUser] = useState(false);

    if (user) {
        return <Navigate to="/login" replace={true} />;
    }

    return (
        <Flex gap="middle" align="center" vertical>
            <EditForm />
        </Flex >
    );
};

export default ProfilePage;
