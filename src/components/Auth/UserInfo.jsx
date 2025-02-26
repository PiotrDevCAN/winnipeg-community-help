import React from 'react';
import { Card } from 'antd';
import { useAuthContext } from '@/context/auth/AuthContext';
// import { useUserContext } from '@/context/mainTypes/UserContext';

const UserInfo = () => {

    const { user } = useAuthContext();
    // const { item } = useUserContext();

    return (
        <Card bordered={true} align="center">
            {user ? <h2>Welcome, {user.email} {user.displayName}</h2> : <h2>Please log in or sign up</h2>}
            {/* {item ? <h3>User has completed their profile</h3> : <h3>Please fulfill a profile</h3>} */}
        </Card>
    );
}

export default UserInfo;
