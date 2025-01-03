import React, { useEffect } from 'react';
import { Card, Button, Typography } from 'antd';
import { useUserContext } from '@/context/UserContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const RequestorDetails = ({ item }) => {

    const { userDetails, requestHelpByUser, offerHelpByUser } = useRouteContext();
    const handleViewProfile = (id) => {
        userDetails(id);
    };
    const handleViewRequests = (id) => {
        requestHelpByUser(id);
    };
    const handleViewOffers = (id) => {
        offerHelpByUser(id);
    };

    const { item: user, getItem, loading, error } = useUserContext();
    const itemId = 1;
    useEffect(() => {
        const loadData = async () => {
            if (itemId && !user) {
                await getItem(itemId);
            }
        };
        loadData();
    }, [itemId, user, getItem]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>Loading user&apos data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Requestor Details"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewProfile(item.id)} className="colorful-background">
                    View Profile
                </Button>,
                <Button key='3' type="primary" size="default" onClick={() => handleViewRequests(item.id)} className="colorful-background">
                    All Help Requests
                </Button>,
                <Button key='4' type="primary" size="default" onClick={() => handleViewOffers(item.id)} className="colorful-background">
                    All Help Offers
                </Button>
            ]}
        >
            <p>First Name: <Text strong>{user.first_name}</Text></p>
            <p>Last Name: <Text strong>{user.last_name}</Text></p>
            <p>Nickname: <Text strong>{user.nickname}</Text></p>
            <p>E-mail: <Text strong>{user.email}</Text></p>
            <p>Phone: <Text strong>{user.phone_number}</Text></p>
        </Card>
    );
};
export default RequestorDetails;