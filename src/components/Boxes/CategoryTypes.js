import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useCombinedCategoryContext } from '@/context/CombinedCategoryContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const CategoryTypes = ({ item }) => {

    const { loadCategoriesData, category, type, loadingCategory, loadingType, error, errorCategory, errorType } = useCombinedCategoryContext();

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

    useEffect(() => {
        const typeId = item.type_id;
        loadCategoriesData(typeId);
    }, [loadCategoriesData]);

    if (errorCategory) return <p>Error in obtaining category data</p>;
    if (errorType) return <p>Error in obtaining type data</p>;
    if (loadingCategory || !category) return <p>Loading category data...</p>;
    if (loadingType || !type) return <p>Loading type data...</p>;

    return (
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
    );
};
export default CategoryTypes;