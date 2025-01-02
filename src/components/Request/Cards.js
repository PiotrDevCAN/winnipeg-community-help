import React from 'react';
import { Col } from 'antd';
import RequestCard from '@/components/Request/Card';

const Cards = ({ data, onSelect }) => {

    return (
        <>
            {data.map(
                (item, index) => (
                    <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                        <RequestCard item={item} />
                    </Col>
                )
            )}
        </>
    )
}

export default Cards;