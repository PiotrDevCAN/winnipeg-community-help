import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useUserContext } from '@/context/UserContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const Users = ({ item }) => {
    const { numberOfUsers, getUsersInCommunityNumber, loading, error } = useUserContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const { userInCommunity } = useRouteContext();
    const handleViewUsers = (id) => {
        userInCommunity(id);
    };

    useEffect(() => {
        getUsersInCommunityNumber(item.community_id);
    }, [getUsersInCommunityNumber]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!item) return <p>Loading Users amount in Community data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Users in Community"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleViewUsers(item.id)} className="colorful-background">
                    All Users
                </Button>
            ]}
        >
            <p>List of Users in Community</p>
            <Divider style={dividerStyle} />
            <p>Number of items: <Text strong>{numberOfUsers}</Text></p>
        </Card>
    );
};
export default Users;