import React, { useEffect } from 'react';
import { Button, Card, Typography, Divider } from 'antd';
import { useCombinedCommunityContext } from '@/context/CombinedCommunityContext';
import { useCombinedCategoryContext } from '@/context/CombinedCategoryContext';
import { useRouteContext } from '@/context/RouteContext';
import dayjs from 'dayjs';

const { Text } = Typography;

const Details = ({ item }) => {

    const { loadCommunitiesData, mainCommunityData, subCommunityData, loadingMainCommunity, loadingSubCommunity, errorMainCommunity, errorSubCommunity } = useCombinedCommunityContext();
    const { loadCategoriesData, category, type, loadingCategory, loadingType, error, errorCategory, errorType } = useCombinedCategoryContext();

    const { offerHelpEdit } = useRouteContext();
    const handleEditClick = (id) => {
        offerHelpEdit(id);
    };

    const dividerStyle = {
        margin: "8px 0"
    }
    const formattedDate = dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss');

    useEffect(() => {
        const subCommunityId = item.community_id;
        loadCommunitiesData(subCommunityId);

        const typeId = item.type_id;
        loadCategoriesData(typeId);
    }, [loadCommunitiesData, loadCategoriesData]);

    if (errorMainCommunity) return <p>Error in obtaining main community data...</p>;
    if (errorSubCommunity) return <p>Error in obtaining sub community data...</p>;
    if (loadingMainCommunity || !mainCommunityData) return <p>Loading main community data...</p>;
    if (loadingSubCommunity || !subCommunityData) return <p>Loading sub community data...</p>;

    if (errorCategory) return <p>Error in obtaining category data</p>;
    if (errorType) return <p>Error in obtaining type data</p>;
    if (loadingCategory || !category) return <p>Loading category data...</p>;
    if (loadingType || !type) return <p>Loading type data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Help Offer Details"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleEditClick(item.id)} className="colorful-background">
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
    );
};
export default Details;