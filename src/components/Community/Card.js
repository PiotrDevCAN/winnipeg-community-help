import React from 'react';
import { Avatar, Divider, Card, Typography } from 'antd';
import { useRouteContext } from '@/context/RouteContext';
import { TbBuildingCommunity } from "react-icons/tb";

const { Meta } = Card;

const cardStyle = {
    marginBottom: 16,
};

const avatarStyle = {
    width: 35,
    height: 35,
    backgroundColor: '#1677ff',
}

const dividerStyle = {
    margin: "8px 0"
}

const { Text } = Typography;

const CommunityCard = ({ item }) => {

    const { communityDetails } = useRouteContext();
    const handleCardClick = (id) => {
        communityDetails(id);
    };

    return (
        <Card
            title="Community Card"
            className="card-with-colorful-header"
            hoverable
            style={cardStyle}
            onClick={() => handleCardClick(item.id)}
        >
            <Meta
                avatar={<Avatar
                    icon={<TbBuildingCommunity style={avatarStyle} />}
                    shape='square'
                />}
                title={item.label}
                description={
                    <>
                        <p>Alias: <Text strong>{item.alias}</Text></p>
                        <Divider style={dividerStyle} />
                        <p>E-mail: <Text strong>{item.email}</Text></p>
                        <p>Phone Number: <Text strong>{item.phone_number}</Text></p>
                        <p>Website: <Text strong>{item.website}</Text></p>
                        <p>Description: <Text strong>{item.description}</Text></p>
                        <p>Created: <Text strong>{item.created_at}</Text></p>
                    </>
                }
            />
        </Card>
    );
};
export default CommunityCard;