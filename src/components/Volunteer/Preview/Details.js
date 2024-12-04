import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Text, Link } = Typography;

const Details = ({ item }) => {

    const dividerStyle = {
        margin: "8px 0"
    }

    return (
        <Card
            className="card-with-colorful-header"
            title="Volunteer Details"
        >
            <p>Community: <Text strong>{item.community_name}</Text></p>
            <p>Sub Community: <Text strong>{item.sub_community_name}</Text></p>
            <Divider style={dividerStyle} />
            <p>Nick: <Text strong>{item.nick}</Text></p>
            <p>E-mail: <Text strong>{item.email}</Text></p>
            <p>Phone Number: <Text strong>{item.phone_number}</Text></p>
            <p>Website: <Text strong>{item.website}</Text></p>
            <p>Description: <Text strong>{item.description}</Text></p>
            <p>Created: <Text strong>{item.created_at}</Text></p>
        </Card>
    );
};
export default Details;