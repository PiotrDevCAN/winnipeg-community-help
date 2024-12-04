import React from 'react';
import { Col } from 'antd';
import { useCommunityContext } from '../../context/CommunityContext';
import CommunityCard from '../Community/Card';

const Cards = ({ onSelect }) => {

    const { currentItems: data } = useCommunityContext();

    return (
        <>
            {data.map(
                (item, index) => (
                    <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                        <CommunityCard item={item} />
                    </Col>
                )
            )}
        </>
    )
}

export default Cards;