import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Divider, Button, Flex, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const imgStyle = {
    display: 'block',
    // width: 273,
};

const cardBodyStyle = {
    padding: 10,
    margin: 10,
    overflow: 'hidden',
}

const buttonStyle = {
    margin: "10px 0",
}

const HomeContentCardsFull = () => {

    return (
        <>
            <Flex
                vertical
                gap="middle"
            >
                <Link to="/request/new">
                    <Card
                        hoverable
                        className="gradientBg odd"
                        styles={{
                            body: cardBodyStyle,
                        }}
                    >
                        <Row>
                            <Col xs={24} sm={12} md={18} lg={18} xl={18}>
                                <Flex
                                    vertical
                                    justify="space-between"
                                    align="flex-start"
                                    style={{
                                        height: "100%",
                                        paddingRight: 10,
                                    }}
                                >
                                    <div>
                                        <Title level={2} style={{ margin: 0 }}>
                                            Request for help
                                        </Title>
                                        <Title level={4}>
                                            Need a hand with something? Reach out to your local community for support—whether it’s advice, resources, or a friendly helping hand, your neighbors are here to help you succeed.
                                        </Title>
                                    </div>
                                    <Button type="primary" size="large" style={buttonStyle} className="colorful-background">
                                        Browse All Requests
                                    </Button>
                                </Flex>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                <img
                                    alt="avatar"
                                    src="/request.webp"
                                    style={imgStyle}
                                />
                            </Col>
                        </Row>
                    </Card>
                </Link>

                <Link to="/offer/new">
                    <Card
                        hoverable
                        className="gradientBg even"
                        styles={{
                            body: cardBodyStyle,
                        }}
                    >
                        <Row>
                            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                <img
                                    alt="avatar"
                                    src="/offer.webp"
                                    style={imgStyle}
                                />
                            </Col>
                            <Col xs={24} sm={12} md={18} lg={18} xl={18}>
                                <Flex
                                    vertical
                                    justify="space-between"
                                    align="flex-end"
                                    style={{
                                        height: "100%",
                                        paddingLeft: 10,
                                    }}
                                >
                                    <Title level={2} style={{ margin: 0 }}>
                                        Offer your help
                                    </Title>
                                    <Title level={4} style={{ margin: 0 }}>
                                        Make a difference in your community by offering your skills, time, or resources to those in need. Your act of kindness could change someone’s day—or even their life.
                                    </Title>
                                    <Button type="primary" size="large" style={buttonStyle} className="colorful-background">
                                        Browse All Offers
                                    </Button>
                                </Flex>
                            </Col>
                        </Row>
                    </Card>
                </Link>

                <Link to="/volunteer/new">
                    <Card
                        hoverable
                        className="gradientBg odd"
                        styles={{
                            body: cardBodyStyle,
                        }}
                    >
                        <Row>
                            <Col xs={24} sm={12} md={18} lg={18} xl={18}>
                                <Flex
                                    vertical
                                    justify="space-between"
                                    align="flex-start"
                                    style={{
                                        height: "100%",
                                        paddingRight: 10,
                                    }}
                                >
                                    <Title level={2} style={{ margin: 0 }}>
                                        Volunteers
                                    </Title>
                                    <Title level={4} style={{ margin: 0 }}>
                                        Become part of an inspiring community of volunteers dedicated to making a difference. Connect, collaborate, and contribute to meaningful projects that create lasting impact and empower change.
                                    </Title>
                                    <Button type="primary" size="large" style={buttonStyle} className="colorful-background">
                                        Browse All Volunteers
                                    </Button>
                                </Flex>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                <img
                                    alt="avatar"
                                    src="/communities.webp"
                                    style={imgStyle}
                                />
                            </Col>
                        </Row>
                    </Card>
                </Link>

                <Link to="/community/new">
                    <Card
                        hoverable
                        className="gradientBg even"
                        styles={{
                            body: cardBodyStyle,
                        }}
                    >
                        <Row>
                            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                <img
                                    alt="avatar"
                                    src="/communities.webp"
                                    style={imgStyle}
                                />
                            </Col>
                            <Col xs={24} sm={12} md={18} lg={18} xl={18}>
                                <Flex
                                    vertical
                                    justify="space-between"
                                    align="flex-end"
                                    style={{
                                        height: "100%",
                                        paddingLeft: 10,
                                    }}
                                >
                                    <Title level={2} style={{ margin: 0 }}>
                                        Communities
                                    </Title>
                                    <Title level={4} style={{ margin: 0 }}>
                                        Join a vibrant network of local communities where people come together to share, support, and grow. Get involved and discover the power of community-driven change.
                                    </Title>
                                    <Button type="primary" size="large" style={buttonStyle} className="colorful-background">
                                        Browse All Communities
                                    </Button>
                                </Flex>
                            </Col>
                        </Row>
                    </Card>
                </Link>
            </Flex>
        </>
    );
};

export default HomeContentCardsFull;
