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

const dividerStyle = {
    margin: "8px 0"
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
                                        <p>Community: <b>{item.community_name}</b></p>
                                        <p>Sub Community: <b>{item.sub_community_name}</b></p>
                                        <Divider style={dividerStyle} />
                                        <p>Nick: <b>{item.nick}</b></p>
                                        <p>E-mail: <b>{item.email}</b></p>
                                        <p>Phone Number: <b>{item.phone_number}</b></p>
                                        <p>Website: <b>{item.website}</b></p>
                                        <p>Description: <b>{item.description}</b></p>
                                        <p>Created: <b>{item.created_at}</b></p>
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