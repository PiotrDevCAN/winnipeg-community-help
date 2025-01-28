import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography, Skeleton } from 'antd';
import useCommunity from '@/customHooks/useCommunity';
import { useRouteContext } from '@/context/RouteContext';

const { Text } = Typography;

const Communities = ({ item }) => {

    const { mainCommunityData, subCommunityData } = useCommunity(item);

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

    return (
        (mainCommunityData && subCommunityData) ?
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
            : <Skeleton active />
    );
};
export default Communities;