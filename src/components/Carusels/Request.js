import React, { useEffect } from 'react';
import { Carousel, Skeleton } from 'antd';
import { Button, Flex, Typography, Avatar } from 'antd';
import { MdOutlineVolunteerActivism } from "react-icons/md";

import { useRequestContext } from '@/context/mainTypes/RequestContext';
import { useRouteContext } from '@/context/RouteContext';
import useLoadingMessage from '@/customHooks/useLoadingMessage';

const { Title, Paragraph } = Typography;

const avatarStyle = {
    backgroundColor: 'red',
}

const Request = () => {

    const { currentItems: data, loading, error } = useRequestContext();
    const { requestHelpDetails } = useRouteContext();

    const handleCardClick = (id) => {
        requestHelpDetails(id);
    };

    useLoadingMessage(loading, 'Help Requests');

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
                                    icon={<MdOutlineVolunteerActivism />}
                                />
                                <Title level={2}>
                                    {item.title}
                                </Title>
                                <Paragraph>{item.label ?? 'community'}</Paragraph>
                                <Paragraph>{item.sub_community_name ?? 'sub community'}</Paragraph>
                                <Paragraph>{item.category_name ?? 'category'}</Paragraph>
                                <Paragraph>{item.type_name ?? 'type'}</Paragraph>
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

export default Request;