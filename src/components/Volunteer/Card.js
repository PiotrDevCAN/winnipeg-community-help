import React from 'react';
import { Avatar, Divider, Card, Typography } from 'antd';
import { useRouteContext } from '../../context/RouteContext';
import { RiUserHeartLine } from "react-icons/ri";

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

const { Text, Link } = Typography;

const VolunteerCard = ({ item }) => {

    const { volunteerDetails } = useRouteContext();
    const handleCardClick = (id) => {
        volunteerDetails(id);
    };

    return (
        <Card
            title="Volunteer Card"
            className="card-with-colorful-header"
            hoverable
            style={cardStyle}
            onClick={() => handleCardClick(item.id)}
        >
            <Meta
                avatar={<Avatar
                    icon={<RiUserHeartLine style={avatarStyle} />}
                    shape='square'
                />}
                // title={`${item.first_name} ${item.last_name}`}
                description={
                    <>
                        <p>Community: <Text strong>{item.community_name}</Text></p>
                        <p>Sub Community: <Text strong>{item.sub_community_name}</Text></p>
                        <Divider style={dividerStyle} />
                        <p>Nick: <Text strong>{item.nick}</Text></p>
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
export default VolunteerCard;