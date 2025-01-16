import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useVolunteerContext } from '@/context/VolunteerContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const Requests = ({ item }) => {
    const { numberOfRequests, getRequestsNumber, loading, error } = useVolunteerContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { requestHelpByVolunteer } = useRouteContext();
    const handleViewRequests = (id) => {
        requestHelpByVolunteer(id);
    };

    useEffect(() => {
        getRequestsNumber(item.id);
    }, [getRequestsNumber]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Volunteer's Help Requests"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewRequests(item.id)} className="colorful-background">
                    All Help Requests
                </Button>
            ]}
        >
            <p>List of Help Requests responded by Volunteer</p>
            <Divider style={dividerStyle} />
            <p>Number of items: <Text strong>{numberOfRequests}</Text></p>
        </Card>
    );
};
export default Requests;