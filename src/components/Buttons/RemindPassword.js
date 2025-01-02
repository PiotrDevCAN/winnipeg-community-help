import React from 'react';
import { Button } from 'antd';
import { useRouteContext } from '@/context/RouteContext';

const RemindPassword = ({ type }) => {

    const { remindPassword } = useRouteContext();
    const handlePasswordRemind = () => {
        remindPassword();
    };

    return (
        <Button onClick={handlePasswordRemind} block type={type || 'default'} htmlType="submit" className={type ? 'colorful-background' : ''}>
            Remind Password
        </Button>
    );
};
export default RemindPassword;