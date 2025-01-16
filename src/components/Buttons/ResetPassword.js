import React from 'react';
import { Button } from 'antd';
import { useRouteContext } from '@/context/RouteContext';

const ResetPassword = ({ type }) => {

    const { resetPassword } = useRouteContext();
    const handlePasswordRemind = () => {
        resetPassword();
    };

    return (
        <Button onClick={handlePasswordRemind} block type={type || 'default'} htmlType="submit" className={type ? 'colorful-background' : ''}>
            Reset Password
        </Button>
    );
};
export default ResetPassword;