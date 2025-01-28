import React, { useEffect } from 'react';
import { Carousel, Skeleton } from 'antd';
import { Button, Flex, Typography, Avatar } from 'antd';
import { TbBuildingCommunity } from "react-icons/tb";

import { useCommunityContext } from '@/context/mainTypes/CommunityContext';
import { useRouteContext } from '@/context/RouteContext';
import useLoadingMessage from '@/customHooks/useLoadingMessage';

const { Title, Paragraph } = Typography;

const avatarStyle = {
    backgroundColor: 'orange',
}

const Community = () => {

    const { currentItems: data, loading, error } = useCommunityContext();
    const { communityDetails } = useRouteContext();

    const handleCardClick = (id) => {
        communityDetails(id);
    };

    useLoadingMessage(loading, 'Communities');

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
                                    icon={<TbBuildingCommunity />}
                                />
                                <Title level={2}>
                                    {item.label}
                                </Title>
                                <Paragraph>{item.alias ?? 'alias'}</Paragraph>
                                <Paragraph>{item.email ?? 'e-mail'}</Paragraph>
                                <Paragraph>{item.label ?? 'community'}</Paragraph>
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

export default Community;