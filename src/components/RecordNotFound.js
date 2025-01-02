import React from 'react';
import { Button, Result } from 'antd';
import { useRouteContext } from '@/context/RouteContext';

const RecordNotFound = ({ error }) => {

    const { home } = useRouteContext();

    return (
        <Result
            status="warning"
            title={error}
            extra={
                <Button onClick={home} type="primary" key="console">
                    Go Home
                </Button>
            }
        />
    );
};

export default RecordNotFound;
