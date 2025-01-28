import React, { useEffect } from 'react';
import { Carousel, Skeleton } from 'antd';
import { Button, Flex, Typography, Avatar } from 'antd';
import { RiUserHeartLine } from "react-icons/ri";

import { useVolunteerContext } from '@/context/mainTypes/VolunteerContext';
import { useRouteContext } from '@/context/RouteContext';
import useLoadingMessage from '@/customHooks/useLoadingMessage';

const { Title, Paragraph } = Typography;

const avatarStyle = {
    backgroundColor: 'teal',
}

const Volunteer = () => {

    const { currentItems: data, loading, error } = useVolunteerContext();
    const { volunteerDetails } = useRouteContext();

    const handleCardClick = (id) => {
        volunteerDetails(id);
    };

    useLoadingMessage(loading, 'Volunteers');

    if (error) return <p>Error: {error}</p>;

    return (
        !loading ?
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
                                <Paragraph>{item.nickname ?? 'nick'}</Paragraph>
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
            :
            <Skeleton active />
    )
}

export default Volunteer;