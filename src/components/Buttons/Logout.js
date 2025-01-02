import React from 'react';
import { Button } from 'antd';
import { useRouteContext } from '@/context/RouteContext';

const Logout = ({ type }) => {

    const { signOut } = useRouteContext();
    const handleLogout = () => {
        signOut();
    };

    return (
        <Button onClick={handleLogout} block type={type || 'default'} htmlType="submit" className={type ? 'colorful-background' : ''}>
            Log out
        </Button>
    );
};
export default Logout;