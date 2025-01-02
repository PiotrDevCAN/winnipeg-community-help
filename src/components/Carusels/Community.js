import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { Button, Flex, Typography, Avatar } from 'antd';

import { useCommunityContext } from '@/context/CommunityContext';
import { useRouteContext } from '@/context/RouteContext';
import { TbBuildingCommunity } from "react-icons/tb";

const { Title, Paragraph } = Typography;

const avatarStyle = {
    backgroundColor: '#1677ff',
}

const Community = () => {

    const { currentItems: data, fetchData, loading, error } = useCommunityContext();
    const { communityDetails } = useRouteContext();

    const handleCardClick = (id) => {
        communityDetails(id);
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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
        </>
    )
}

export default Community;