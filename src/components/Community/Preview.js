import React from 'react';
import { Flex, Row, Col } from 'antd';
import { RequestProvider } from '@/context/RequestContext';
import { OfferProvider } from '@/context/OfferContext';
import Details from '@/components/Community/Preview/Details';
import Map from '@/components/Community/Preview/Map';
import Requests from '@/components/Community/Preview/Requests';
import Offers from '@/components/Community/Preview/Offers';
import Volunteers from '@/components/Community/Preview/Volunteers';
import Users from '@/components/Community/Preview/Users';

const Preview = ({ item }) => {

    return (
        <Row gutter={16} style={{ marginBottom: "16px" }}>
            <Col xs={20} sm={16} md={12} lg={12} xl={12}>
                <Flex gap="middle" vertical style={{ height: '100%' }}>
                    <Details item={item} />
                    <Map />
                </Flex>
            </Col>
            <Col xs={20} sm={16} md={12} lg={12} xl={12}>
                <Flex gap="middle" vertical>
                    <RequestProvider>
                        <Requests item={item} />
                    </RequestProvider>
                    <OfferProvider>
                        <Offers item={item} />
                    </OfferProvider>
                    <Volunteers item={item} />
                    <Users item={item} />
                </Flex>
            </Col>
        </Row>
    );
};
export default Preview;