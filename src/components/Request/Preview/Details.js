import React from 'react';
import { Card, Typography } from 'antd';

const { Text, Link } = Typography;

const Details = ({ item }) => {

    return (
        <Card
            className="card-with-colorful-header"
            title="Help Request Details"
        >
            <p>Title: <Text strong>{item.title}</Text></p>
            <p>Description: <Text strong>{item.description}</Text></p>
            <p>Status: <Text strong>{item.status}</Text></p>
            <p>Created: <Text strong>{item.created_at}</Text></p>
        </Card>
    );
};
export default Details;