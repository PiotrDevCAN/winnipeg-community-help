import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { Button, Flex, Typography, Avatar } from 'antd';

import { useOfferContext } from '@/context/OfferContext';
import { useRouteContext } from '@/context/RouteContext';
import { MdVolunteerActivism } from "react-icons/md";

const { Title, Paragraph } = Typography;

const avatarStyle = {
    backgroundColor: '#1677ff',
}

const Offer = () => {

    const { currentItems: data, fetchData, loading, error } = useOfferContext();
    const { offerHelpDetails } = useRouteContext();

    const handleCardClick = (id) => {
        offerHelpDetails(id);
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
                                    icon={<MdVolunteerActivism />}
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
        </>
    )
}

export default Offer;