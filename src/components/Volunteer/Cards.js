import React from 'react';
import { Avatar, Card, Divider, Col } from 'antd';
import { useVolunteerContext } from '../../context/VolunteerContext';
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

const Cards = ({ onSelect }) => {

    const { currentItems: data } = useVolunteerContext();
    const { volunteerDetails } = useRouteContext();

    const handleCardClick = (id) => {
        volunteerDetails(id);
    };

    return (
        <>
            {data.map(
                (item, index) => (
                    <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
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
                                title={`${item.first_name} ${item.last_name}`}
                                description={
                                    <>
                                        <p>{item.community_name}</p>
                                        <p>{item.sub_community_name}</p>
                                        <p>{item.nick}</p>
                                        <p>{item.email}</p>
                                        <p>{item.phone_number}</p>
                                        <p>{item.website}</p>
                                        <p>{item.description}</p>
                                        <p>{item.created_at}</p>
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                )
            )}
        </>
    )
}

export default Cards;