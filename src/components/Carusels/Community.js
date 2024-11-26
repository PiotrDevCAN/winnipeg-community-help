import React from 'react';
import { Carousel } from 'antd';
import { Button, Flex, Typography, Avatar } from 'antd';

import { useNavigate } from 'react-router-dom';
import { useCommunityContext } from '../../context/CommunityContext';
import { TbBuildingCommunity } from "react-icons/tb";

const { Title, Paragraph } = Typography;

const avatarStyle = {
    backgroundColor: '#1677ff',
}

const Community = () => {

    const { currentItems: data } = useCommunityContext();

    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate('/community/view/' + id);
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
                                    icon={<TbBuildingCommunity />}
                                />
                                <Title level={2}>
                                    Community: {item.label}
                                </Title>
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

export default Community;