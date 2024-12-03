import React from 'react';
import { Avatar, Card, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useCommunityContext } from '../../context/CommunityContext';
import { TbBuildingCommunity } from "react-icons/tb";

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

    const { currentItems: data } = useCommunityContext();

    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate('/community/view/' + id);
    };

    return (
        <>
            {data.map(
                (item, index) => (
                    <Card
                        title="Community Card"
                        className="card-with-colorful-header"
                        key={index}
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
                )
            )}
        </>
    )
}

export default Cards;