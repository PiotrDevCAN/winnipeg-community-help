import React from 'react';
import { Avatar, Card, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useVolunteerContext } from '../../context/VolunteerContext';
import { RiUserHeartLine } from "react-icons/ri";

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

    const { currentItems: data } = useVolunteerContext();

    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate('/volunteer/view/' + id);
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
                                icon={<RiUserHeartLine style={avatarStyle} />}
                                shape='square'
                            />}
                            title="Volunteer Card"
                            description={
                                <>
                                    <p>Name of community</p>
                                    <p>Piotr</p>
                                    <p>Open</p>
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