import React from 'react';
import { Avatar, Divider, Card, Typography } from 'antd';
import { useRouteContext } from '@/context/RouteContext';
import { MdOutlineVolunteerActivism } from "react-icons/md";
import dayjs from 'dayjs';

const { Meta } = Card;

const cardStyle = {
    marginBottom: 16,
};

const avatarStyle = {
    width: 35,
    height: 35,
    // backgroundColor: '#1677ff',
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
    const formattedDate = dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss');

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
                        <p>Title: <Text strong>{item.title ?? 'title'}</Text></p>
                        <p>Description: <Text strong>{item.description ?? 'description'}</Text></p>
                        <Divider style={dividerStyle} />
                        <p>Needy Person: <Text strong>{item.needy_id ? item.needy_first_name + ' ' + item.needy_last_name : 'Not assigned yet'}</Text></p>
                        <p>Volunteer: <Text strong>{item.volunteer_id ? item.volunteer_first_name + ' ' + item.volunteer_last_name : 'Not assigned yet'}</Text></p>
                        <Divider style={dividerStyle} />
                        <p>Community: <Text strong>{item.community_name ?? 'community'}</Text></p>
                        <p>Sub Community: <Text strong>{item.sub_community_name ?? 'sub community'}</Text></p>
                        <p>Category: <Text strong>{item.category_name ?? 'category'}</Text></p>
                        <p>Type: <Text strong>{item.type_name ?? 'type'}</Text></p>
                        <Divider style={dividerStyle} />
                        <p>Status: <Text strong>{item.status ?? 'status'}</Text></p>
                        <p>Created: <Text strong>{formattedDate ?? 'created'}</Text></p>
                    </>
                }
            />
        </Card>
    );
};
export default RequestCard;