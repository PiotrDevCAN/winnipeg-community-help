import React from 'react';
import { Button } from 'antd';
import { useRouteContext } from '@/context/RouteContext';

const CreateAccount = ({ type }) => {

    const { signUp } = useRouteContext();
    const handleAccountCreate = () => {
        signUp();
    };

    return (
        <Button onClick={handleAccountCreate} block type={type || 'default'} htmlType="submit" className={type ? 'colorful-background' : ''}>
            Create an Account
        </Button>
    );
};
export default CreateAccount;