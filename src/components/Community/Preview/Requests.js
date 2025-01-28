import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useRequestContext } from '@/context/mainTypes/RequestContext';
import { useRouteContext } from '@/context/RouteContext';
import { useUserContext } from '@/context/mainTypes/UserContext';
import useLoadingMessage from '@/customHooks/useLoadingMessage';

const { Text } = Typography;

const Requests = ({ item }) => {
    const { numberOfRequests, loading, error } = useRequestContext();
    const { getUsersInCommunityNumber } = useUserContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { requestHelpInCommunity } = useRouteContext();
    const handleViewRequests = (id) => {
        requestHelpInCommunity(id);
    };

    useEffect(() => {
        getUsersInCommunityNumber(item.community_id);
    }, [getUsersInCommunityNumber]);

    useLoadingMessage(loading, 'Help Requests in Community');

    if (error) return <p>Error: {error}</p>;
    if (!item) return <p>Loading Help Requests amount in Community data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Help Requests in Community"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewRequests(item.id)} className="colorful-background">
                    All Help Requests
                </Button>
            ]}
        >
            <p>List of Help Requests in Community</p>
            <Divider style={dividerStyle} />
            <p>Number of items: <Text strong>{numberOfRequests}</Text></p>
        </Card>
    );
};
export default Requests;