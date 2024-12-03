import React from 'react';
import { Avatar, Card, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useRequestContext } from '../../context/RequestContext';
import { MdOutlineVolunteerActivism } from "react-icons/md";

const { Meta } = Card;

const cardStyle = {
    width: '32%',
    minWidth: 220,
};

const avatarStyle = {
    width: 35,
    height: 35,
    backgroundColor: '#1677ff',
}

const Cards = ({ onSelect }) => {

    const { currentItems: data } = useRequestContext();

    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate('/request/view/' + id);
    };

    return (
        <>
            {data.map(
                (item, index) => (
                    <Card
                        title="Help Request Card"
                        className="card-with-colorful-header"
                        key={index}
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
                )
            )}
        </>
    )
}

export default Cards;