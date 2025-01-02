import React, { useEffect } from 'react';
import { Card, Typography, Divider, Button } from 'antd';
import { useCombinedCommunityContext } from '@/context/CombinedCommunityContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const Details = ({ item }) => {

    const { loadCommunitiesData, mainCommunityData, subCommunityData, loadingMainCommunity, loadingSubCommunity, errorMainCommunity, errorSubCommunity } = useCombinedCommunityContext();

    const { volunteerEdit } = useRouteContext();
    const handleEditClick = (id) => {
        volunteerEdit(id);
    };

    const dividerStyle = {
        margin: "8px 0"
    }

    useEffect(() => {
        const subCommunityId = item.community_id;
        loadCommunitiesData(subCommunityId);
    }, [loadCommunitiesData]);

    if (errorMainCommunity) return <p>Error in obtaining main community data...</p>;
    if (errorSubCommunity) return <p>Error in obtaining sub community data...</p>;
    if (loadingMainCommunity || !mainCommunityData) return <p>Loading main community data...</p>;
    if (loadingSubCommunity || !subCommunityData) return <p>Loading sub community data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="User Details"
            actions={[
                <Button key="1" type="primary" size="default" onClick={() => handleEditClick(item.id)} className="colorful-background">
                    Edit Record
                </Button>
            ]}
        >
            <p>Nickname: <Text strong>{item.nick}</Text></p>
            <p>E-mail: <Text strong>{item.email}</Text></p>
            <p>Phone Number: <Text strong>{item.phone_number}</Text></p>
            <p>Website: <Text strong>{item.website}</Text></p>
            <p>Description: <Text strong>{item.description}</Text></p>
            <p>Created: <Text strong>{item.created_at}</Text></p>
            <Divider style={dividerStyle} />
            <p>Community: <Text strong>{mainCommunityData.label}</Text></p>
            <p>Sub Community: <Text strong>{subCommunityData.label}</Text></p>
        </Card>
    );
};
export default Details;