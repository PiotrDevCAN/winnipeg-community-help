import React, { useEffect, useState } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useNeedyContext } from '@/context/mainTypes/NeedyContext';
import { useRouteContext } from '@/context/RouteContext';
import useLoadingMessage from '@/customHooks/useLoadingMessage';

const { Text } = Typography;

const PeopleInNeed = ({ item }) => {
    const { numberOfUsers, getUsersInCommunityNumber, loading, error } = useNeedyContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { needyInCommunity } = useRouteContext();
    const handleViewVolunteers = (id) => {
        needyInCommunity(id);
    };

    useEffect(() => {
        getUsersInCommunityNumber(item.community_id);
    }, [getUsersInCommunityNumber]);

    useLoadingMessage(loading, 'People in Need in Community');

    if (error) return <p>Error: {error}</p>;
    if (!item) return <p>Loading People in Need amount in Community data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="People in Need in Community"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewVolunteers(item.id)} className="colorful-background">
                    All People in Need
                </Button>
            ]}
        >
            <p>List of People in Need in Community</p>
            <Divider style={dividerStyle} />
            <p>Number of items: <Text strong>{numberOfUsers}</Text></p>
        </Card>
    );
};
export default PeopleInNeed;