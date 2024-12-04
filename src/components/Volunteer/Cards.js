import React from 'react';
import { Col } from 'antd';
import { useVolunteerContext } from '../../context/VolunteerContext';
import VolunteerCard from '../Volunteer/Card';

const Cards = ({ onSelect }) => {

    const { currentItems: data } = useVolunteerContext();

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