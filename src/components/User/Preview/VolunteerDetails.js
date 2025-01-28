import React, { useCallback, useEffect } from 'react';
import { Card, Button, Typography, Flex, Avatar, message } from 'antd';
import { useVolunteerContext } from '@/context/mainTypes/VolunteerContext';
import { useRouteContext } from '@/context/RouteContext';
import { RiUserHeartLine } from "react-icons/ri";
import { useAPIAuth } from '@/context/auth/APIAuthContext';
import useLoadingMessage from '@/customHooks/useLoadingMessage';

const avatarStyle = {
    width: 35,
    height: 35,
}
const { Text } = Typography;

const VolunteerDetails = ({ userId }) => {

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

    const { isReady } = useAPIAuth();
    const { item, getItem, loading, error } = useVolunteerContext();

    useEffect(() => {
        const loadData = async () => {
            await getItem(userId);
        };
        if (isReady && userId && !item) {
            loadData();
        }
    }, [isReady, userId]);

    useLoadingMessage(loading, 'Volunteer');

    if (error) return <p>Error: {error}</p>;

    return (
        item ? (
            <Card
                className="card-with-colorful-header"
                title="Volunteer Details"
                actions={[
                    <Button
                        key='2'
                        type="primary"
                        size="default"
                        onClick={() => handleViewProfile(item.id)}
                        className="colorful-background"
                    >
                        View Profile
                    </Button>,
                    <Button
                        key='3'
                        type="primary"
                        size="default"
                        onClick={() => handleViewRequests(item.id)}
                        className="colorful-background"
                    >
                        All Help Requests
                    </Button>,
                    <Button
                        key='4'
                        type="primary"
                        size="default"
                        onClick={() => handleViewOffers(item.id)}
                        className="colorful-background"
                    >
                        All Help Offers
                    </Button>
                ]}
            >
                <Flex
                    horizontal="true"
                    align="flex-start"
                    justify="space-around"
                >
                    <Avatar
                        style={{
                            backgroundColor: 'red',
                            verticalAlign: 'middle',
                        }}
                        size={64}
                        icon={<RiUserHeartLine style={avatarStyle} />}
                        shape='square'
                    />
                    <div>
                        <p>First Name: <Text strong>{item.first_name}</Text></p>
                        <p>Last Name: <Text strong>{item.last_name}</Text></p>
                        <p>Nickname: <Text strong>{item.nickname}</Text></p>
                        <p>E-mail: <Text strong>{item.email}</Text></p>
                        <p>Phone: <Text strong>{item.phone_number}</Text></p>
                    </div>
                    <div></div>
                    <div></div>
                </Flex>
            </Card>
        ) : <Card
            className="card-with-colorful-header"
            title="Volunteer Details">
            Unable to retrieve data
        </Card >
    );
};
export default VolunteerDetails;