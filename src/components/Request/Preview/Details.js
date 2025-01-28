import React from 'react';
import { Button, Card, Typography, Divider, Skeleton } from 'antd';
import { useRouteContext } from '@/context/RouteContext';
import useCommunity from '@/customHooks/useCommunity';
import useTypeCategory from '@/customHooks/useTypeCategory';
import dayjs from 'dayjs';

const { Text } = Typography;

const Details = ({ item }) => {

    const { mainCommunityData, subCommunityData } = useCommunity(item);
    const { category, type } = useTypeCategory(item);

    const { requestHelpEdit } = useRouteContext();
    const handleEditClick = (id) => {
        requestHelpEdit(id);
    };

    const dividerStyle = {
        margin: "8px 0"
    }
    const formattedDate = dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss');

    return (
        (mainCommunityData && subCommunityData && category && type) ?
            <Card
                className="card-with-colorful-header"
                title="Help Request Details"
                actions={[
                    <Button type="primary" size="default" onClick={() => handleEditClick(item.id)} className="colorful-background">
                        Edit Record
                    </Button>
                ]}
            >
                <p>Title: <Text strong>{item.title}</Text></p>
                <p>Description: <Text strong>{item.description}</Text></p>
                <p>Status: <Text strong>{item.status}</Text></p>
                <p>Created: <Text strong>{formattedDate}</Text></p>
                <Divider style={dividerStyle} />
                <p>Community: <Text strong>{mainCommunityData.label}</Text></p>
                <p>Sub Community: <Text strong>{subCommunityData.label}</Text></p>
                <Divider style={dividerStyle} />
                <p>Category: <Text strong>{category.label}</Text></p>
                <p>Type: <Text strong>{type.label}</Text></p>
            </Card>
            : <Skeleton active />
    );
};
export default Details;