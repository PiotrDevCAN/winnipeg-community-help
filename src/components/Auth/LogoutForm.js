import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const LogoutForm = () => {
    const askForHelp = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <p>
                User has been successfully logged out
            </p>
            <Button onClick={askForHelp} type="primary" icon={<UserOutlined />}>
                Sign In
            </Button>
        </>
    );
};
export default LogoutForm;