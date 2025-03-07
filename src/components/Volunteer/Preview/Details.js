import React from 'react';
import { Card, Typography, Divider, Button, Skeleton } from 'antd';
import useCommunity from '@/customHooks/useCommunity';
import { useRouteContext } from '@/context/RouteContext';
import dayjs from 'dayjs';

const { Text } = Typography;

const Details = ({ item }) => {

    const { mainCommunityData, subCommunityData } = useCommunity(item);

    const { volunteerEdit } = useRouteContext();
    const handleEditClick = (id) => {
        volunteerEdit(id);
    };

    const dividerStyle = {
        margin: "8px 0"
    }
    const formattedDate = dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss');

    return (
        (mainCommunityData && subCommunityData) ?
            <Card
                className="card-with-colorful-header"
                title="Volunteer Details"
                actions={[
                    <Button key="1" type="primary" size="default" onClick={() => handleEditClick(item.id)} className="colorful-background">
                        Edit Record
                    </Button>
                ]}
            >
                <p>Nickname: <Text strong>{item.nickname}</Text></p>
                <p>E-mail: <Text strong>{item.email}</Text></p>
                <p>Phone Number: <Text strong>{item.phone_number}</Text></p>
                <p>Website: <Text strong>{item.website}</Text></p>
                <p>Description: <Text strong>{item.description}</Text></p>
                <p>Created: <Text strong>{formattedDate}</Text></p>
                <Divider style={dividerStyle} />
                <p>Community: <Text strong>{mainCommunityData.label}</Text></p>
                <p>Sub Community: <Text strong>{subCommunityData.label}</Text></p>
            </Card>
            : <Skeleton active />
    );
};
export default Details;