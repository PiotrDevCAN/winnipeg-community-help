import React from 'react';
import { Col } from 'antd';
import { useRequestContext } from '../../context/RequestContext';
import RequestCard from '../Request/Card';

const Cards = ({ onSelect }) => {

    const { currentItems: data } = useRequestContext();

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