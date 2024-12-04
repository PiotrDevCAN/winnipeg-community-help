import React from 'react';
import { Card, Typography } from 'antd';

const { Text, Link } = Typography;

const Details = ({ item }) => {

    return (
        <Card
            className="card-with-colorful-header"
            title="Community Details"
        >
            <p>Name: <Text strong>{item.label}</Text></p>
            <p>Alias: <Text strong>{item.alias}</Text></p>
            <p>Description: <Text strong>{item.description}</Text></p>
            <p>E-mail: <Text strong>{item.email}</Text></p>
            <p>Phone Number: <Text strong>{item.phone_number}</Text></p>
            <p>Website: <Text strong>{item.website}</Text></p>
            <p>Status: <Text strong>{item.status}</Text></p>
            <p>Created: <Text strong>{item.created_at}</Text></p>
        </Card>
    );
};
export default Details;