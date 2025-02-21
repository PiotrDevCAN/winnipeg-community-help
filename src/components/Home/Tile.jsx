import React from 'react';
import { Button, Card, Col, Flex, Row, Space, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const smallImgStyle = {
    // display: 'block',
    maxWidth: 150,
    margin: '0 auto 16px',
};

const imgStyle = {
    // display: 'block',
    // maxWidth: 150,
};

const cardBodyStyle = {
    padding: 10,
    margin: 10,
    overflow: 'hidden',
}

const buttonStyle = {
    margin: "10px 0",
}

const Tile = ({ index, item, size }) => {

    return (
        <Card
            hoverable
            className="gradientBg odd"
            styles={{
                body: cardBodyStyle,
            }}
        >
            <Row>
                <Col xs={24} sm={12} md={0} lg={0} xl={0}>
                    <img
                        alt="avatar"
                        src={item.image}
                        style={smallImgStyle}
                    />
                </Col>

                {
                    (index % 2 !== 0) ?
                        <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                            <img
                                alt="avatar"
                                src={item.image}
                                style={imgStyle}
                            />
                        </Col>
                        : ''
                }

                <Col xs={24} sm={12} md={18} lg={18} xl={18}>
                    <Flex
                        vertical
                        justify="space-between"
                        align={(index % 2 !== 0) ? 'flex-end' : 'flex-start'}
                        style={{
                            height: "100%",
                            paddingRight: 10,
                        }}
                    >
                        <Title level={2} style={{ margin: 0 }}>
                            {item.title}
                        </Title>
                        <Title level={4} className={index % 2 === 0 ? 'even-card' : 'odd-card'}>
                            {item.description}
                        </Title>
                        <Space align="center" size={size}>
                            <Button onClick={item.handleCreateRecord} type="primary" size={size} style={buttonStyle} className="colorful-background">
                                Rise New Record
                            </Button>
                            <Button onClick={item.handleAllRecords} type="default" size={size} style={buttonStyle} >
                                Browse All Records
                            </Button>
                        </Space>
                    </Flex>
                </Col>
                {
                    (index % 2 === 0) ?
                        <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                            <img
                                alt="avatar"
                                src={item.image}
                                style={imgStyle}
                            />
                        </Col>
                        : ''
                }
            </Row>
        </Card >
    )
};

export default Tile;