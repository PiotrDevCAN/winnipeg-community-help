import React from 'react';
import { Button } from 'antd';
import { useRouteContext } from '@/context/RouteContext';

const Login = ({ type }) => {

    const { signIn } = useRouteContext();
    const handleLogin = () => {
        signIn();
    };

    return (
        <Button onClick={handleLogin} block type={type || 'default'} htmlType="submit" className={type ? 'colorful-background' : ''}>
            Log in
        </Button>
    );
};
export default Login;