import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useUserContext } from '@/context/UserContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const Offers = ({ item }) => {
    const { numberOfOffers, getOffersNumber, loading, error } = useUserContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { offerHelpByNeedy } = useRouteContext();
    const handleViewOffers = (id) => {
        offerHelpByNeedy(id);
    };

    useEffect(() => {
        getOffersNumber(item.id);
    }, [getOffersNumber]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="User's Help Offers"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewOffers(item.id)} className="colorful-background">
                    All Help Offers
                </Button>
            ]}
        >
            <p>List of Help Offers responded by User</p>
            <Divider style={dividerStyle} />
            <p>Number of items: <Text strong>{numberOfOffers}</Text></p>
        </Card>
    );
};
export default Offers;