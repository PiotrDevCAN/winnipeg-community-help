import React, { useEffect } from 'react';
import { Card, Button, Typography } from 'antd';
import { useVolunteerContext } from '@/context/VolunteerContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const VolunteerDetails = ({ item }) => {

    const { volunteerDetails, requestHelpByVolunteer, offerHelpByVolunteer } = useRouteContext();
    const handleViewProfile = (id) => {
        volunteerDetails(id);
    };
    const handleViewRequests = (id) => {
        requestHelpByVolunteer(id);
    };
    const handleViewOffers = (id) => {
        offerHelpByVolunteer(id);
    };

    const { item: user, getItem, loading, error } = useVolunteerContext();
    const userId = item.volunteer_id;
    useEffect(() => {
        const loadData = async () => {
            if (userId && !user) {
                await getItem(userId);
            }
        };
        loadData();
    }, [userId, user, getItem]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        user ? (
            <Card
                className="card-with-colorful-header"
                title="Volunteer Details"
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
        ) : <Card
            className="card-with-colorful-header"
            title="Volunteer Details">
            Nobody responded to the request
        </Card >
    );
};
export default VolunteerDetails;