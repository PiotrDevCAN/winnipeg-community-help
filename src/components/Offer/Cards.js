import React from 'react';
import { Avatar, Card, Divider, Col } from 'antd';
import { useOfferContext } from '../../context/OfferContext';
import { useRouteContext } from '../../context/RouteContext';
import { MdVolunteerActivism } from "react-icons/md";

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

    const { currentItems: data } = useOfferContext();
    const { offerHelpDetails } = useRouteContext();

    const handleCardClick = (id) => {
        offerHelpDetails(id);
    };

    return (
        <>
            {data.map(
                (item, index) => (
                    <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                        <Card
                            title="Help Offer Card"
                            className="card-with-colorful-header"
                            hoverable
                            style={cardStyle}
                            onClick={() => handleCardClick(item.id)}
                        >
                            <Meta
                                avatar={<Avatar
                                    icon={<MdVolunteerActivism style={avatarStyle} />}
                                    shape='square'
                                />}
                                title={item.label}
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