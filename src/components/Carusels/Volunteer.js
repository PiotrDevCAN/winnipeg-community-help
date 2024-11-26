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
                                    Volunteer: {item.label}
                                </Title>
                                {/* <Paragraph>Name of community</Paragraph>
                                    <Paragraph>Piotr</Paragraph>
                                    <Paragraph>Open</Paragraph>
                                    <Paragraph>04/12/2004</Paragraph> */}
                                <Button type="primary" size="large" onClick={() => handleCardClick(item.key)}>
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