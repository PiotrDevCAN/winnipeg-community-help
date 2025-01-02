import React from 'react';
import { Row, Col } from 'antd';
import { FormCommunityProvider } from '@/context/FormCommunityContext';
import MainCommunity from '../Selects/MainCommunity';
import SubCommunity from '../Selects/SubCommunity';

const CommunityFilter = ({ preSelectedId }) => {

    return (
        <FormCommunityProvider>
            <Row gutter={16}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <MainCommunity />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <SubCommunity preSelectedId={preSelectedId} />
                </Col >
            </Row>
        </FormCommunityProvider>
    );
};

export default CommunityFilter;
