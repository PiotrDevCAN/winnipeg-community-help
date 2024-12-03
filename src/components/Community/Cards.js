import React from 'react';
import { Avatar, Card, Divider, Col } from 'antd';
import { useCommunityContext } from '../../context/CommunityContext';
import { useRouteContext } from '../../context/RouteContext';
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

const Cards = ({ onSelect }) => {

    const { currentItems: data } = useCommunityContext();
    const { communityDetails } = useRouteContext();

    const handleCardClick = (id) => {
        communityDetails(id);
    };

    return (
        <>
            {data.map(
                (item, index) => (
                    <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
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
                                        <p>{item.alias}</p>
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