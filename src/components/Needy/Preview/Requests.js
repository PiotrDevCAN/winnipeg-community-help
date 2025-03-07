import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useNeedyContext } from '@/context/mainTypes/NeedyContext';
import { useRouteContext } from '@/context/RouteContext';
import useLoadingMessage from '@/customHooks/useLoadingMessage';

const { Text } = Typography;

const Requests = ({ item }) => {
    const { numberOfRequests, getRequestsNumber, loading, error } = useNeedyContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { requestHelpByNeedy } = useRouteContext();
    const handleViewRequests = (id) => {
        requestHelpByNeedy(id);
    };

    useEffect(() => {
        getRequestsNumber(item.id);
    }, [getRequestsNumber]);

    useLoadingMessage(loading, 'Person in Need Help Requests');

    if (error) return <p>Error: {error}</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Needy's Help Requests"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewRequests(item.id)} className="colorful-background">
                    All Help Requests
                </Button>
            ]}
        >
            <p>List of Help Requests responded by Needy</p>
            <Divider style={dividerStyle} />
            <p>Number of items: <Text strong>{numberOfRequests}</Text></p>
        </Card>
    );
};
export default Requests;