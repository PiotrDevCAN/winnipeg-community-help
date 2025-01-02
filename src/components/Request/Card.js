import React from 'react';
import { Avatar, Divider, Card, Typography } from 'antd';
import { useRouteContext } from '@/context/RouteContext';
import { MdOutlineVolunteerActivism } from "react-icons/md";

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

const RequestCard = ({ item }) => {

    const { requestHelpDetails } = useRouteContext();
    const handleCardClick = (id) => {
        requestHelpDetails(id);
    };

    return (
        <Card
            title="Help Request Card"
            className="card-with-colorful-header"
            hoverable
            style={cardStyle}
            onClick={() => handleCardClick(item.id)}
        >
            <Meta
                avatar={<Avatar
                    icon={<MdOutlineVolunteerActivism style={avatarStyle} />}
                    shape='square'
                />}
                title={item.name}
                description={
                    <>
                        <p><Text strong>{item.description ?? 'description'}</Text></p>
                        <Divider style={dividerStyle} />
                        <p>Requestor: <Text strong>{item.requestor ?? 'John Dou'}</Text></p>
                        <Divider style={dividerStyle} />
                        <p>Community: <Text strong>{item.label ?? 'community'}</Text></p>
                        <p>Sub Community: <Text strong>{item.sub_community_name ?? 'sub community'}</Text></p>
                        <p>Category: <Text strong>{item.category_name ?? 'category'}</Text></p>
                        <p>Type: <Text strong>{item.type_name ?? 'type'}</Text></p>
                        <Divider style={dividerStyle} />
                        <p>Status: <Text strong>{item.status ?? 'status'}</Text></p>
                        <p>Created: <Text strong>{item.created ?? 'created'}</Text></p>
                    </>
                }
            />
        </Card>
    );
};
export default RequestCard;