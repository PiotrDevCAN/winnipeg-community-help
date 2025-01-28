import React, { useEffect, useState } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useVolunteerContext } from '@/context/mainTypes/VolunteerContext';
import { useRouteContext } from '@/context/RouteContext';
import useLoadingMessage from '@/customHooks/useLoadingMessage';

const { Text } = Typography;

const Volunteers = ({ item }) => {
    const { numberOfVolunteers, getVolunteersInCommunityNumber, loading, error } = useVolunteerContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { volunteerInCommunity } = useRouteContext();
    const handleViewVolunteers = (id) => {
        volunteerInCommunity(id);
    };

    useEffect(() => {
        getVolunteersInCommunityNumber(item.community_id);
    }, [getVolunteersInCommunityNumber]);

    useLoadingMessage(loading, 'Volunteers in Community');

    if (error) return <p>Error: {error}</p>;
    if (!item) return <p>Loading Volunteers amount in Community data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Volunteers in Community"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewVolunteers(item.id)} className="colorful-background">
                    All Volunteers
                </Button>
            ]}
        >
            <p>List of Volunteers in Community</p>
            <Divider style={dividerStyle} />
            <p>Number of items: <Text strong>{numberOfVolunteers}</Text></p>
        </Card>
    );
};
export default Volunteers;