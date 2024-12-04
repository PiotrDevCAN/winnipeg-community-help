import React from 'react';
import { Avatar, Card, Divider, Col } from 'antd';
import { useRequestContext } from '../../context/RequestContext';
import { useRouteContext } from '../../context/RouteContext';
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

const Cards = ({ onSelect }) => {

    const { currentItems: data } = useRequestContext();
    const { requestHelpDetails } = useRouteContext();

    const handleCardClick = (id) => {
        requestHelpDetails(id);
    };

    return (
        <>
            {data.map(
                (item, index) => (
                    <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
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
                                        <p><b>{item.description ?? 'description'}</b></p>
                                        <Divider style={dividerStyle} />
                                        <p>Requestor: <b>{item.requestor ?? 'John Dou'}</b></p>
                                        <Divider style={dividerStyle} />
                                        <p>Community: <b>{item.label ?? 'community'}</b></p>
                                        <p>Sub Community: <b>{item.sub_community_name ?? 'sub community'}</b></p>
                                        <p>Category: <b>{item.category_name ?? 'category'}</b></p>
                                        <p>Type: <b>{item.type_name ?? 'type'}</b></p>
                                        <Divider style={dividerStyle} />
                                        <p>Status: <b>{item.status ?? 'status'}</b></p>
                                        <p>Created: <b>{item.created ?? 'created'}</b></p>
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