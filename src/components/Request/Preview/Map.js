import React from 'react';
import { Card, Button } from 'antd';
import { useRouteContext } from '@/context/RouteContext';
import PreviewMap from '@/components/Map/PreviewMap';
import { useAppNotificationContext } from '@/context/auxiliary/AppNotificationContext';

const Map = ({ item }) => {

    const { showInfo } = useAppNotificationContext();

    const { communityEdit } = useRouteContext();
    const handleMapPreview = () => {
        showInfo('Functionality not implemented yet');
    };

    return (
        <Card
            className="card-with-colorful-header"
            title="Map Card"
            actions={[
                <Button
                    type="primary"
                    size="default"
                    className="colorful-background"
                    onClick={handleMapPreview}
                >
                    View Fullscreen Map
                </Button>,
            ]}
        >
            <div id="map-container" >
                <PreviewMap />
            </div>
        </Card>
    );
};
export default Map;