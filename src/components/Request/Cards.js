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
                                        <p>{item.community ?? 'community'}</p>
                                        <p>{item.subCommunity ?? 'sub community'}</p>
                                        <p>{item.category ?? 'category'}</p>
                                        <p>{item.type ?? 'type'}</p>
                                        <br></br>
                                        <p><b>{item.requestor ?? 'requestor'}</b></p>
                                        <Divider />

                                        <p>{item.status ?? 'status'}</p>
                                        <p>{item.created ?? 'created'}</p>
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