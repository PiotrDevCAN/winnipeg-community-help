import React from 'react';
import { Button, Result } from 'antd';
import { useRouteContext } from '@/context/RouteContext';

const AdminAccessOnly = () => {

    const { home } = useRouteContext();

    return (
        <Result
            status="warning"
            title="Admin Access Only"
            extra={
                <Button onClick={home} type="primary" key="console">
                    Go Home
                </Button>
            }
        />
    );
};

export default AdminAccessOnly;
