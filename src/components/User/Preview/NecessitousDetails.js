import React, { useCallback, useEffect } from 'react';
import { Card, Button, Typography, Avatar, Flex, message } from 'antd';
import { useNeedyContext } from '@/context/mainTypes/NeedyContext';
import { useRouteContext } from '@/context/RouteContext';
import { TbUserHeart } from "react-icons/tb";
import { useAPIAuth } from '@/context/auth/APIAuthContext';
import useLoadingMessage from '@/customHooks/useLoadingMessage';

const avatarStyle = {
    width: 35,
    height: 35,
}
const { Text } = Typography;

const NeedyPersonDetails = ({ userId }) => {

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

    const { isReady } = useAPIAuth();
    const { item, getItem, loading, error } = useNeedyContext();

    useEffect(() => {
        const loadData = async () => {
            await getItem(userId);
        };
        if (isReady && userId && !item) {
            loadData();
        }
    }, [isReady, userId]);

    useLoadingMessage(loading, 'Person in Need');

    if (error) return <p>Error: {error}</p>;

    return (
        item ? (
            <Card
                className="card-with-colorful-header"
                title="Needy Person Details"
                actions={[
                    <Button
                        key="1"
                        type="primary"
                        size="default"
                        onClick={() => handleViewProfile(item.id)}
                        className="colorful-background"
                    >
                        View Profile
                    </Button>,
                    <Button
                        key='2'
                        type="primary"
                        size="default"
                        onClick={() => handleViewRequests(item.id)}
                        className="colorful-background"
                    >
                        All Help Requests
                    </Button>,
                    <Button
                        key='3'
                        type="primary"
                        size="default"
                        onClick={() => handleViewOffers(item.id)}
                        className="colorful-background"
                    >
                        All Help Offers
                    </Button>,
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
                        icon={<TbUserHeart style={avatarStyle} />}
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
            title="Needy Person Details">
            Unable to retrieve data
        </Card>
    );
};
export default NeedyPersonDetails;