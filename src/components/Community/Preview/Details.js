import React from 'react';
import { Button, Card, Typography } from 'antd';
import { useRouteContext } from '@/context/RouteContext';
import dayjs from 'dayjs';

const { Text } = Typography;

const Details = ({ item }) => {

    const { communityEdit } = useRouteContext();
    const handleEditClick = (id) => {
        communityEdit(id);
    };
    const formattedDate = dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss');

    return (
        <Card
            className="card-with-colorful-header"
            title="Community Details"
            actions={[
                <Button type="primary" size="default" onClick={() => handleEditClick(item.id)} className="colorful-background">
                    Edit Record
                </Button>
            ]}
        >
            <p>Name: <Text strong>{item.label}</Text></p>
            <p>Alias: <Text strong>{item.alias}</Text></p>
            <p>Description: <Text strong>{item.description}</Text></p>
            <p>E-mail: <Text strong>{item.email}</Text></p>
            <p>Phone Number: <Text strong>{item.phone_number}</Text></p>
            <p>Website: <Text strong>{item.website}</Text></p>
            <p>Status: <Text strong>{item.status}</Text></p>
            <p>Created: <Text strong>{formattedDate}</Text></p>
        </Card>
    );
};
export default Details;