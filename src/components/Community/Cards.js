import React from 'react';
import { Avatar, Card, Flex } from 'antd';
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
        <Flex gap="middle" wrap justify='space-between'>
            {data.map(
                (item, index) => (
                    <Card
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
                                    <p>Name of community</p>
                                    <p>Piotr</p>
                                    <p>{item.description}</p>
                                    <p>04/12/2004</p>
                                </>
                            }
                        />
                    </Card>
                )
            )}
        </Flex>
    )
}

export default Cards;