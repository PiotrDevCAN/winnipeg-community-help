import React from 'react';
import UserInfo from '../components/Auth/UserInfo';
import { Divider, Flex } from 'antd';
import EditForm from '../components/Profile/EditForm';

const MyProfilePage = () => {
    return (
        <Flex align="center" vertical>
            {/* <UserInfo /> */}
            <Divider />
            <EditForm />
        </Flex>
    );
};

export default MyProfilePage;
