import React from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useUserContext } from '@/context/UserContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const Offers = ({ item }) => {
    // const { getOffersNumber, loading, error } = useUserContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { requestHelpByUser } = useRouteContext();
    const handleViewOffers = (id) => {
        requestHelpByUser(id);
    };

    // useEffect(() => {
    //     getOffersNumber(item.id);
    // }, [getOffersNumber]);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;
    // if (!item) return <p>Loading main item data...</p>;

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
            <p>Number of items: <Text strong></Text></p>
        </Card>
    );
};
export default Offers;