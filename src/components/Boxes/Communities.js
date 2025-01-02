import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography } from 'antd';
import { useCombinedCommunityContext } from '@/context/CombinedCommunityContext';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const Communities = ({ item }) => {

    const { loadCommunitiesData, mainCommunityData, subCommunityData, loadingMainCommunity, loadingSubCommunity, errorMainCommunity, errorSubCommunity } = useCombinedCommunityContext();

    const { requestHelpInCommunity, offerHelpInCommunity, userInCommunity, volunteerInCommunity } = useRouteContext();
    const handleViewRequests = (id) => {
        requestHelpInCommunity(id);
    };
    const handleViewOffers = (id) => {
        offerHelpInCommunity(id);
    };
    const handleViewRequestors = (id) => {
        userInCommunity(id);
    };
    const handleViewVolunteers = (id) => {
        volunteerInCommunity(id);
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
            title="Related Main and Sub Community"
            actions={[
                <Button key='4' type="primary" size="default" onClick={() => handleViewRequests(item.id)} className="colorful-background">
                    All Help Requests
                </Button>,
                <Button key='5' type="primary" size="default" onClick={() => handleViewOffers(item.id)} className="colorful-background">
                    All Help Offers
                </Button>,
                <Button key='7' type="primary" size="default" onClick={() => handleViewRequestors(item.id)} className="colorful-background">
                    All Requestors
                </Button>,
                <Button key='8' type="primary" size="default" onClick={() => handleViewVolunteers(item.id)} className="colorful-background">
                    All Volunteers
                </Button>
            ]}
        >
            <p>Main Community: <Text strong>{mainCommunityData?.label}</Text></p>
            <p>Main Community Description: <Text strong>{mainCommunityData?.description}</Text></p>
            <Divider style={dividerStyle} />
            <p>Community: <Text strong>{subCommunityData?.label}</Text></p>
            <p>Alias: <Text strong>{subCommunityData?.alias}</Text></p>
            <p>Description: <Text strong>{subCommunityData?.description}</Text></p>
        </Card>
    );
};
export default Communities;