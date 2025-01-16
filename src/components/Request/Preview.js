import React from 'react';
import { Flex, Row, Col } from 'antd';
import { CombinedCommunityProvider } from '@/context/CombinedCommunityContext';
import { CombinedCategoryProvider } from '@/context/CombinedCategoryContext';
import Details from '@/components/Request/Preview/Details';
import Map from '@/components/Request/Preview/Map';
import RequestorDetails from '@/components/Request/Preview/RequestorDetails';
import VolunteerDetails from '@/components/Request/Preview/VolunteerDetails';
import Communities from '@/components/Boxes/Communities';
import CategoryTypes from '@/components/Boxes/CategoryTypes';

const Preview = ({ item }) => {

    return (
        <Row gutter={16} style={{ marginBottom: "16px" }}>
            <Col xs={20} sm={16} md={12} lg={12} xl={12}>
                <Flex gap="middle" vertical style={{ height: '100%' }}>
                    <CombinedCommunityProvider>
                        <CombinedCategoryProvider>
                            <Details item={item} />
                        </CombinedCategoryProvider>
                    </CombinedCommunityProvider>
                    <Map />
                </Flex>
            </Col>
            <Col xs={20} sm={16} md={12} lg={12} xl={12}>
                <Flex gap="middle" vertical>
                    <RequestorDetails item={item} />
                    <VolunteerDetails item={item} />
                    <CombinedCommunityProvider>
                        <Communities item={item} />
                    </CombinedCommunityProvider>
                    <CombinedCategoryProvider>
                        <CategoryTypes item={item} />
                    </CombinedCategoryProvider>
                </Flex>
            </Col>
        </Row>


    );
};
export default Preview;