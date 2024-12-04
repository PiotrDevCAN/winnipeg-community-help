import React, { useState, useEffect } from 'react';
import { Flex, Divider, Card, Button, Row, Col, Typography } from 'antd';
import { useCommunityContext } from '../../context/CommunityContext';
import { useStaticHelpDataContext } from '../../context/StaticHelpDataContext';
import { useStaticCommunityContext } from '../../context/StaticCommunityContext';
import CommunityDetails from '../Community/Preview/Details';
import PreviewMap from '../../components/Map/PreviewMap';

const { Text, Link } = Typography;

const Preview = ({ itemId }) => {

    const { item, getItem } = useCommunityContext();

    const [mainCommunity, setMainCommunity] = useState(null);
    const [subCommunity, setSubCommunity] = useState(null);
    const [category, setCategory] = useState(null);
    const [type, setType] = useState(null);

    const [loadingMainCommunity, setLoadingMainCommunity] = useState(false);
    const [loadingSubCommunity, setLoadingSubCommunity] = useState(false);
    const [loadingCategory, setLoadingCategory] = useState(false);
    const [loadingType, setLoadingType] = useState(false);

    const [errorMainCommunity, setErrorMainCommunity] = useState(null);
    const [errorSubCommunity, setErrorSubCommunity] = useState(null);
    const [errorCategory, setErrorCategory] = useState(null);
    const [errorType, setErrorType] = useState(null);

    const { getCategory, getType } = useStaticHelpDataContext();
    const { getCommunity, getSubCommunity } = useStaticCommunityContext();

    const dividerStyle = {
        margin: "8px 0"
    }

    const handleMapPreview = () => {
        alert('Functionality not implemented yet');
    };

    useEffect(() => {
        const loadData = async () => {
            if (!item) {
                await getItem(itemId);
            }
        };
        loadData();
    }, [itemId, item, getItem]);

    useEffect(() => {
        const loadData = async () => {
            if (item) {
                setLoadingCategory(true);
                setLoadingType(true);
                setLoadingMainCommunity(true);
                setLoadingSubCommunity(true);

                const type = await getType(item.type_id);
                if (type) {
                    setType(type);
                    const category = await getCategory(type.category_id);
                    if (category) {
                        setCategory(category);
                    } else {
                        setErrorCategory(true);
                    }
                } else {
                    setErrorType(true);
                    setErrorCategory(true);
                }
                setLoadingCategory(false);
                setLoadingType(false);

                const subCommunity = await getSubCommunity(item.community_id);
                if (subCommunity) {
                    setSubCommunity(subCommunity);
                    const mainCommunity = await getCommunity(subCommunity.community_id);
                    if (mainCommunity) {
                        setMainCommunity(mainCommunity);
                    } else {
                        setErrorMainCommunity(true);
                    }
                } else {
                    setErrorMainCommunity(true);
                    setErrorSubCommunity(true);
                }
                setLoadingMainCommunity(false);
                setLoadingSubCommunity(false);
            }
        };
        loadData();
    }, [itemId, item, getType, getCategory]);

    if (!item) return <p>Loading main item data...</p>;

    if (loadingMainCommunity || loadingSubCommunity || loadingCategory || loadingType) return <p>Loading components data...</p>;

    return (
        <Row gutter={16} style={{ marginBottom: "16px" }}>
            <Col xs={20} sm={16} md={12} lg={12} xl={12}>
                <Flex gap="middle" vertical style={{ height: '100%' }}>
                    <CommunityDetails item={item} />
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
                </Flex>
            </Col>
            <Col xs={20} sm={16} md={12} lg={12} xl={12}>
                <Flex gap="middle" vertical>
                    <Card
                        className="card-with-colorful-header"
                        title="Help Requests in Community"
                        actions={[
                            <Button type="primary" size="default" className="colorful-background">
                                All Help Requests
                            </Button>
                        ]}
                    >
                        <p>List of Help Requests in Community</p>
                        <Divider style={dividerStyle} />
                        <p>Number of items: <Text strong>0</Text></p>
                    </Card>
                    <Card
                        className="card-with-colorful-header"
                        title="Help Offers in Community"
                        actions={[
                            <Button type="primary" size="default" className="colorful-background">
                                All Help Offers
                            </Button>
                        ]}
                    >
                        <p>List of Help Offers in Community</p>
                        <Divider style={dividerStyle} />
                        <p>Number of items: <Text strong>0</Text></p>
                    </Card>
                    <Card
                        className="card-with-colorful-header"
                        title="Volunteers in Community"
                        actions={[
                            <Button type="primary" size="default" className="colorful-background">
                                All Volunteers
                            </Button>
                        ]}
                    >
                        <p>List of Volunteers in Community</p>
                        <Divider style={dividerStyle} />
                        <p>Number of items: <Text strong>0</Text></p>
                    </Card>
                </Flex>
            </Col>
        </Row>
    );
};
export default Preview;