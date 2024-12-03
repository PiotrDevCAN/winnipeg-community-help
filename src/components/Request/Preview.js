import React, { useState, useEffect } from 'react';
import { Flex, Divider, Card, Button, Row, Col, Typography } from 'antd';
import { useRequestContext } from '../../context/RequestContext';
import { useStaticHelpDataContext } from '../../context/StaticHelpDataContext';
import { useStaticCommunityContext } from '../../context/StaticCommunityContext';
import PreviewMap from '../../components/Map/PreviewMap';

const { Text, Link } = Typography;

const Preview = ({ itemId }) => {

    const { item, getItem } = useRequestContext();

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
                    <Card
                        className="card-with-colorful-header"
                        title="Help Request Details"
                    >
                        <p>Title: <Text strong>{item.title}</Text></p>
                        <p>Description: <Text strong>{item.description}</Text></p>
                        <p>Status: <Text strong>{item.status}</Text></p>
                        <p>Created: <Text strong>{item.created_at}</Text></p>
                    </Card>
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
                        title="Requestor Details"
                        actions={[
                            <Button type="primary" size="default" className="colorful-background">
                                View Profile
                            </Button>,
                            <Button type="primary" size="default" className="colorful-background">
                                All Help Offers
                            </Button>
                        ]}
                    >
                        <p>First Name: <Text strong>Requestor's first name</Text></p>
                        <p>Last Name: <Text strong>Requestor's last name</Text></p>
                        <p>Nick: <Text strong>Requestor's nick</Text></p>
                        <p>E-mail: <Text strong>Requestor's e-mail</Text></p>
                    </Card>
                    <Card
                        className="card-with-colorful-header"
                        title="Related Main and Sub Community"
                        actions={[
                            <Button type="primary" size="default" className="colorful-background">
                                All Help Requests
                            </Button>,
                            <Button type="primary" size="default" className="colorful-background">
                                All Help Offers
                            </Button>,
                            <Button type="primary" size="default" className="colorful-background">
                                All Requestors
                            </Button>,
                            <Button type="primary" size="default" className="colorful-background">
                                All Volunteers
                            </Button>
                        ]}
                    >
                        {!errorMainCommunity ?
                            <>
                                <p>Main Community: <Text strong>{mainCommunity?.label}</Text></p>
                                <p>Main Community Description: <Text strong>{mainCommunity?.description}</Text></p>
                            </>
                            : <p>Error in obtaining Main Community data</p>
                        }

                        {!errorSubCommunity ?
                            <>
                                <p>Community: <Text strong>{subCommunity?.label}</Text></p>
                                <p>Alias: <Text strong>{subCommunity?.alias}</Text></p>
                                <p>Description: <Text strong>{subCommunity?.description}</Text></p>
                            </>
                            : <p>Error in obtaining Sub Community data</p>
                        }
                    </Card>
                    <Card
                        className="card-with-colorful-header"
                        title="Related Help Category and Type"
                        actions={[
                            <Button type="primary" size="default" className="colorful-background">
                                All Help Requests
                            </Button>,
                            <Button type="primary" size="default" className="colorful-background">
                                All Help Offers
                            </Button>,
                            <Button type="primary" size="default" className="colorful-background">
                                All Requestors
                            </Button>,
                            <Button type="primary" size="default" className="colorful-background">
                                All Volunteers
                            </Button>
                        ]}
                    >
                        {!errorCategory ?
                            <>
                                <p>Category: <Text strong>{category?.label}</Text></p>
                                <p>Description: <Text strong>{category?.description}</Text></p>
                            </>
                            : <p>Error in obtaining Category data</p>
                        }

                        {!errorType ?
                            <>
                                <p>Type: <Text strong>{type?.label}</Text></p>
                                <p>Description: <Text strong>{type?.description}</Text></p>
                            </>
                            : <p>Error in obtaining Type data</p>
                        }
                    </Card>
                </Flex>
            </Col>
        </Row>
    );
};
export default Preview;