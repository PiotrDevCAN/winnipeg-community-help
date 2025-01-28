import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useOfferContext } from '@/context/mainTypes/OfferContext';
import { useRouteContext } from '@/context/RouteContext';
import { useUserContext } from '@/context/mainTypes/UserContext';
import useLoadingMessage from '@/customHooks/useLoadingMessage';

const { Text } = Typography;

const Offers = ({ item }) => {
    const { numberOfOffers, loading, error } = useOfferContext();
    const { getUsersInCommunityNumber } = useUserContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { offerHelpInCommunity } = useRouteContext();
    const handleViewOffers = (id) => {
        offerHelpInCommunity(id);
    };

    useEffect(() => {
        getUsersInCommunityNumber(item.community_id);
    }, [getUsersInCommunityNumber]);

    useLoadingMessage(loading, 'Offers in Community');

    if (error) return <p>Error: {error}</p>;
    if (!item) return <p>Loading Help Offers amount in Community data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Help Offers in Community"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewOffers(item.id)} className="colorful-background">
                    All Help Offers
                </Button>
            ]}
        >
            <p>List of Help Offers in Community</p>
            <Divider style={dividerStyle} />
            <p>Number of items: <Text strong>{numberOfOffers}</Text></p>
        </Card>
    );
};
export default Offers;