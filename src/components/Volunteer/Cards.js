import React from 'react';
import { Col } from 'antd';
import VolunteerCard from '@/components/Volunteer/Card';

const Cards = ({ data, onSelect }) => {

    return (
        <>
            {data.map(
                (item, index) => {
                    return (
                        <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                            <VolunteerCard item={item} />
                        </Col>
                    )
                }
            )}
        </>
    )
}

export default Cards;