import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography, Skeleton } from 'antd';
import useTypeCategory from '@/customHooks/useTypeCategory';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const CategoryTypes = ({ item }) => {

    const { category, type } = useTypeCategory(item);

    const { requestHelpInType, offerHelpInType } = useRouteContext();
    const handleViewRequests = (id) => {
        requestHelpInType(id);
    };
    const handleViewOffers = (id) => {
        offerHelpInType(id);
    };

    const dividerStyle = {
        margin: "8px 0"
    }

    return (
        (category && type) ?
            <Card
                className="card-with-colorful-header"
                title="Related Help Category and Type"
                actions={[
                    <Button key='9' type="primary" size="default" onClick={() => handleViewRequests(item.id)} className="colorful-background">
                        All Help Requests
                    </Button>,
                    <Button key='10' type="primary" size="default" onClick={() => handleViewOffers(item.id)} className="colorful-background">
                        All Help Offers
                    </Button>
                ]}
            >
                <p>Category: <Text strong>{category?.label}</Text></p>
                <p>Description: <Text strong>{category?.description}</Text></p>
                <Divider style={dividerStyle} />
                <p>Type: <Text strong>{type?.label}</Text></p>
                <p>Description: <Text strong>{type?.description}</Text></p>
            </Card>
            : <Skeleton active />
    );
};
export default CategoryTypes;