import React from 'react';
import { Avatar, Card, Divider } from 'antd';
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
        <>
            {data.map(
                (item, index) => (
                    <Card
                        title="Volunteer Card"
                        className="card-with-colorful-header"
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
                )
            )}
        </>
    )
}

export default Cards;