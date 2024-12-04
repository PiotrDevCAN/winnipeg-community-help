import React from 'react';
import { Col } from 'antd';
import { useOfferContext } from '../../context/OfferContext';
import OfferCard from '../Offer/Card';

const Cards = ({ onSelect }) => {

    const { currentItems: data } = useOfferContext();

    return (
        <>
            {data.map(
                (item, index) => (
                    <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                        <OfferCard item={item} />
                    </Col>
                )
            )}
        </>
    )
}

export default Cards;