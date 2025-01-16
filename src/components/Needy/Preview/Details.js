import React, { useEffect } from 'react';
import { Card, Typography, Divider, Button } from 'antd';
import { useCombinedCommunityContext } from '@/context/CombinedCommunityContext';
import { useRouteContext } from '@/context/RouteContext';
import dayjs from 'dayjs';

const { Text } = Typography;

const Details = ({ item }) => {

    const { loadCommunitiesData, mainCommunityData, subCommunityData, loadingMainCommunity, loadingSubCommunity, errorMainCommunity, errorSubCommunity } = useCombinedCommunityContext();

    const { needyEdit } = useRouteContext();
    const handleEditClick = (id) => {
        needyEdit(id);
    };

    const dividerStyle = {
        margin: "8px 0"
    }
    const formattedDate = dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss');

    useEffect(() => {
        alert('aaa'+item.community_id)
        const subCommunityId = item.community_id;
        loadCommunitiesData(subCommunityId);
    }, [loadCommunitiesData]);

    if (errorMainCommunity) return <p>Error in obtaining main community data.. AAA.</p>;
    if (errorSubCommunity) return <p>Error in obtaining sub community data...</p>;
    if (loadingMainCommunity || !mainCommunityData) return <p>Loading main community data...</p>;
    if (loadingSubCommunity || !subCommunityData) return <p>Loading sub community data...</p>;

    return (
        <Card
            className="card-with-colorful-header"
            title="Needy Details"
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
    );
};
export default Details;