import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Divider, Button, Flex, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const cardStyle = {
    width: 620,
};
const imgStyle = {
    display: 'block',
    width: 273,
};

const HomeContentCardsFull = () => {

    return (
        <>
            <Row gutter={[16, 16]} style={{
                marginBottom: 8,
            }}>
                <Col span={24}>
                    <Link to="/request/new">
                        <Card
                            hoverable
                            // style={cardStyle}
                            styles={{
                                body: {
                                    padding: 0,
                                    margin: "10px",
                                    overflow: 'hidden',
                                },
                            }}
                        >
                            <Flex justify="space-between">
                                <Flex
                                    vertical
                                    align="flex-start"
                                    justify="space-between"
                                    style={{
                                        padding: 32,
                                    }}
                                >
                                    <Title level={2}>
                                        Request for help
                                    </Title>
                                    <Title level={4}>
                                        Need a hand with something? Reach out to your local community for support—whether it’s advice, resources, or a friendly helping hand, your neighbors are here to help you succeed.
                                    </Title>
                                    <Button type="primary" size="large" >
                                        View
                                    </Button>
                                </Flex>
                                <img
                                    alt="avatar"
                                    src="/request.webp"
                                    style={imgStyle}
                                />
                            </Flex>
                        </Card>
                    </Link>
                </Col>
                <Col span={24}>
                    <Link to="/offer/new">
                        <Card
                            hoverable
                            // style={cardStyle}
                            styles={{
                                body: {
                                    padding: 0,
                                    overflow: 'hidden',
                                },
                            }}
                        >
                            <Flex justify="space-between">
                                <img
                                    alt="avatar"
                                    src="/offer.webp"
                                    style={imgStyle}
                                />
                                <Flex
                                    vertical
                                    align="flex-end"
                                    justify="space-between"
                                    style={{
                                        padding: 32,
                                    }}
                                >
                                    <Title level={2}>
                                        Offer your help
                                    </Title>
                                    <Title level={4}>
                                        Make a difference in your community by offering your skills, time, or resources to those in need. Your act of kindness could change someone’s day—or even their life.
                                    </Title>
                                    <Button type="primary" size="large" >
                                        View
                                    </Button>
                                </Flex>
                            </Flex>
                        </Card>
                    </Link>
                </Col>
                <Col span={24}>
                    <Link to="/volunteer/new">
                        <Card
                            hoverable
                            // style={cardStyle}
                            styles={{
                                body: {
                                    padding: 0,
                                    overflow: 'hidden',
                                },
                            }}
                        >
                            <Flex justify="space-between">
                                <Flex
                                    vertical
                                    align="flex-start"
                                    justify="space-between"
                                    style={{
                                        padding: 32,
                                    }}
                                >
                                    <Title level={2}>
                                        Volunteers
                                    </Title>
                                    <Title level={4}>
                                        Become part of an inspiring community of volunteers dedicated to making a difference. Connect, collaborate, and contribute to meaningful projects that create lasting impact and empower change.
                                    </Title>
                                    <Button type="primary" size="large" >
                                        View
                                    </Button>
                                </Flex>
                                <img
                                    alt="avatar"
                                    src="/communities.webp"
                                    style={imgStyle}
                                />
                            </Flex>
                        </Card>
                    </Link>
                </Col>
                <Col span={24}>
                    <Link to="/community/new">
                        <Card
                            hoverable
                            // style={cardStyle}
                            styles={{
                                body: {
                                    padding: 0,
                                    overflow: 'hidden',
                                },
                            }}
                        >
                            <Flex justify="space-between">
                                <img
                                    alt="avatar"
                                    src="/communities.webp"
                                    style={imgStyle}
                                />
                                <Flex
                                    vertical
                                    align="flex-end"
                                    justify="space-between"
                                    style={{
                                        padding: 32,
                                    }}
                                >
                                    <Title level={2}>
                                        Communities
                                    </Title>
                                    <Title level={4}>
                                        Join a vibrant network of local communities where people come together to share, support, and grow. Get involved and discover the power of community-driven change.
                                    </Title>
                                    <Button type="primary" size="large" >
                                        View
                                    </Button>
                                </Flex>
                            </Flex>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </>
    );
};

export default HomeContentCardsFull;
