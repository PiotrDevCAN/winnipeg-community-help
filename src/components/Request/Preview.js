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

    const { getCategory, getType } = useStaticHelpDataContext();
    const { getCommunity, getSubCommunity } = useStaticCommunityContext();

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
                const type = await getType(item.type_id);
                setType(type);
                const category = await getCategory(type.category_id);
                setCategory(category);
                const subCommunity = await getSubCommunity(item.community_id);
                setSubCommunity(subCommunity);
                const mainCommunity = await getCommunity(subCommunity.community_id);
                setMainCommunity(mainCommunity);
            }
        };
        loadData();
    }, [itemId, item, getType, getCategory]);

    // useEffect(() => {
    //     const loadData = async () => {
    //         if (item) {
    //             console.log(item.community_id);

    //             const community = await getCommunity(item.community_id);
    //             setCommunity(community);
    //         }
    //     };
    //     loadData();
    // }, [itemId, item, getCommunity]);

    if (!item) return <p>Loading main item data...</p>;

    if (!category || !type) return <p>Loading components data...</p>;

    // if (!category || !type || !community) return <p>Loading components data...</p>;

    return (
        <Row gutter={16} style={{ marginBottom: "16px" }}>
            <Col xs={20} sm={16} md={12} lg={12} xl={12}>
                <Flex gap="middle" vertical style={{ height: '100%' }}>
                    <Card
                        className="card-with-colorful-header"
                        title="Help Request details"
                        actions={[
                            <Button type="primary" size="default" className="colorful-background">
                                View Details
                            </Button>,
                        ]}
                    >
                        <p>Community Id: <Text strong>{item.community_id}</Text></p>
                        <p>Title: <Text strong>{item.title}</Text></p>
                        <p>Description: <Text strong>{item.description}</Text></p>
                        <p>Status: <Text strong>{item.status}</Text></p>
                        <p>Created: <Text strong>{item.created_at}</Text></p>
                    </Card>
                    <Card
                        className="card-with-colorful-header"
                        title="Map Card"
                        actions={[
                            <Button type="primary" size="default" className="colorful-background">
                                View Map
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
                        <p>First Name: <Text strong>aaa</Text></p>
                        <p>Last Name: <Text strong>aaa</Text></p>
                        <p>Nick: <Text strong>aaa</Text></p>
                        <p>E-mail: <Text strong>aaa</Text></p>
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
                        <p>Main Community Id: <Text strong>{mainCommunity.id}</Text></p>
                        <p>Main Community: <Text strong>{mainCommunity.label}</Text></p>

                        <p>Community Id: <Text strong>{subCommunity.id}</Text></p>
                        <p>Community: <Text strong>{subCommunity.label}</Text></p>
                        <p>Alias: <Text strong>{subCommunity.alias}</Text></p>
                        <p>Description: <Text strong>{subCommunity.description}</Text></p>
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
                        <p>Cat Id: <Text strong>{category.id}</Text></p>
                        <p>Category: <Text strong>{category.label}</Text></p>
                        <p>Type Id: <Text strong>{type.id}</Text></p>
                        <p>Type: <Text strong>{type.label}</Text></p>
                    </Card>
                </Flex>
            </Col>
        </Row>
    );
};
export default Preview;