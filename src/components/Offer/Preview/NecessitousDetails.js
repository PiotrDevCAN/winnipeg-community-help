import React, { useEffect } from 'react';
import { Card, Button, Typography } from 'antd';
import { useNeedyContext } from '@/context/NeedyContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const VolunteerDetails = ({ item }) => {

    const { needyDetails, requestHelpByNeedy, offerHelpByNeedy } = useRouteContext();
    const handleViewProfile = (id) => {
        needyDetails(id);
    };
    const handleViewRequests = (id) => {
        requestHelpByNeedy(id);
    };
    const handleViewOffers = (id) => {
        offerHelpByNeedy(id);
    };

    const { item: needy, getItem, loading, error } = useNeedyContext();
    const userId = item.in_need_id;
    useEffect(() => {
        const loadData = async () => {
            if (userId && !needy) {
                await getItem(userId);
            }
        };
        loadData();
        console.log(needy);
    }, [userId, needy, getItem]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        needy ? (
            <Card
                className="card-with-colorful-header"
                title="Needy Person Details"
                actions={[
                    <Button
                        key="2"
                        type="primary"
                        size="default"
                        onClick={() => handleViewProfile(item.id)}
                        className="colorful-background"
                    >
                        View Profile
                    </Button>,
                    <Button
                        key="3"
                        type="primary"
                        size="default"
                        onClick={() => handleViewRequests(item.id)}
                        className="colorful-background"
                    >
                        All Help Requests
                    </Button>,
                    <Button
                        key="4"
                        type="primary"
                        size="default"
                        onClick={() => handleViewOffers(item.id)}
                        className="colorful-background"
                    >
                        All Help Offers
                    </Button>,
                ]}
            >
                <p>First Name: <Text strong>{needy.first_name}</Text></p>
                <p>Last Name: <Text strong>{needy.last_name}</Text></p>
                <p>Nickname: <Text strong>{needy.nickname}</Text></p>
                <p>E-mail: <Text strong>{needy.email}</Text></p>
                <p>Phone: <Text strong>{needy.phone_number}</Text></p>
            </Card>
        ) : <Card
            className="card-with-colorful-header"
            title="Needy Person Details">
            Nobody responded to the offer
        </Card>
    );
};
export default VolunteerDetails;