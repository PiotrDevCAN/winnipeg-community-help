import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useVolunteerContext } from '@/context/VolunteerContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const Offers = ({ item }) => {
    const { getOffersNumber, loading, error } = useVolunteerContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { requestHelpByVolunteer } = useRouteContext();
    const handleViewOffers = (id) => {
        requestHelpByVolunteer(id);
    };

    useEffect(() => {
        getOffersNumber(item.id);
    }, [getOffersNumber]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!item) return <p>Loading main item data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Volunteer's Help Offers"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewOffers(item.id)} className="colorful-background">
                    All Help Offers
                </Button>
            ]}
        >
            <p>List of Help Offers responded by Volunteer</p>
            <Divider style={dividerStyle} />
            <p>Number of items: <Text strong>{getOffersNumber}</Text></p>
        </Card>
    );
};
export default Offers;