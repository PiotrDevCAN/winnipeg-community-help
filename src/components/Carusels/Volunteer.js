import React from 'react';
import { Carousel } from 'antd';
import { Button, Flex, Typography, Avatar } from 'antd';

import { useNavigate } from 'react-router-dom';
import { useVolunteerContext } from '../../context/VolunteerContext';
import { RiUserHeartLine } from "react-icons/ri";

const { Title, Paragraph } = Typography;

const avatarStyle = {
    backgroundColor: '#1677ff',
}

const Volunteer = () => {

    const { currentItems: data } = useVolunteerContext();

    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate('/volunteer/view/' + id);
    };

    return (
        <>
            <Carousel autoplay arrows >
                {data.map(
                    (item, index) => (
                        <div key={index}>
                            <Flex
                                horizontal="true"
                                align="center"
                                justify="space-between"
                                style={{
                                    padding: 32,
                                }}
                            >
                                <Avatar
                                    shape="square"
                                    size={64}
                                    style={avatarStyle}
                                    icon={<RiUserHeartLine />}
                                />
                                <Title level={2}>
                                    {`${item.first_name} ${item.last_name}`}
                                </Title>
                                <Paragraph>{item.nick ?? 'nick'}</Paragraph>
                                <Paragraph>{item.email ?? 'e-mail'}</Paragraph>
                                <Paragraph>{item.community_name ?? 'community'}</Paragraph>
                                <Paragraph>{item.sub_community_name ?? 'sub community'}</Paragraph>
                                <Button type="primary" size="large" onClick={() => handleCardClick(item.id)}>
                                    View
                                </Button>
                            </Flex>
                        </div>
                    )
                )}
            </Carousel>
        </>
    )
}

export default Volunteer;