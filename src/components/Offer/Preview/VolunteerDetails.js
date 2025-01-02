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

    const { item: volunteer, getItem, loading, error } = useVolunteerContext();
    const itemId = 1;
    useEffect(() => {
        const loadData = async () => {
            if (itemId && !volunteer) {
                await getItem(itemId);
            }
        };
        loadData();
        console.log(volunteer);
    }, [itemId, volunteer, getItem]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!volunteer) return <p>Loading volunteer&apos data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Volunteer Details"
            actions={[
                <Button key='2' type="primary" size="default" onClick={() => handleViewProfile(item.id)} className="colorful-background">
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
            <p>First Name: <Text strong>{volunteer.first_name}</Text></p>
            <p>Last Name: <Text strong>{volunteer.last_name}</Text></p>
            <p>Nickname: <Text strong>{volunteer.nickname}</Text></p>
            <p>E-mail: <Text strong>{volunteer.email}</Text></p>
            <p>Phone: <Text strong>{volunteer.phone_number}</Text></p>
        </Card>
    );
};
export default VolunteerDetails;