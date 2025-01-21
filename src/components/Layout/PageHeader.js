import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { usePageHeaderContext } from '@/context/PageHeaderContext';

const { Title } = Typography;

const style = {
    padding: '8px 0',
};

const headerStyle = {
    margin: '0px',
};

const PageHeader = ({ PageName, Section }) => {

    const { components } = usePageHeaderContext();

    const component1 = components[0].content;
    const component2 = components[1].content;
    const component3 = components[2].content;
    const component4 = components[3].content;

    let content;
    let cardStyleClass;
    switch (Section) {
        case 'request':
        case 'offer':
        case 'volunteer':
        case 'needy':
        case 'user':
        case 'community':
        case 'category':
        case 'type':
            cardStyleClass = "";
            break;
        default:
            cardStyleClass = "pageHeaderCard";
            break;
    }

    if (component1 || component2 || component3 || component4) {
        content = <>
            <Col className="gutter-row" span={9}>
                <div style={style}>
                    <Title level={2} style={headerStyle}>{PageName}</Title>
                </div>
            </Col>
            <Col className="gutter-row" span={15}>
                {component1 ? (
                    <div style={style}>
                        {component1}
                    </div>
                ) : ''}
                {component2 ? (
                    <div style={style}>
                        {component2}
                    </div>
                ) : ''}
                {component3 ? (
                    <div style={style}>
                        {component3}
                    </div>
                ) : ''}
                {component4 ? (
                    <div style={style}>
                        {component4}
                    </div>
                ) : ''}
            </Col >
        </>
    } else {
        content = <Col className="gutter-row" span={24}>
            <div style={style}>
                <Title level={2} style={headerStyle}>{PageName}</Title>
            </div>
        </Col>
    }

    return (
        <Card
            className={cardStyleClass}
            style={{
                marginBottom: 8,
            }}
        >
            <Row gutter={16}>
                {content}
            </Row>
        </Card>
    );
}

export default PageHeader;