import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Divider, Button } from 'antd';

const { Meta } = Card;

const HomeContentCards = () => {

    return (
        <>
            <Row gutter={16}>
                <Col span={8}>
                    <Link to="/request/new">
                        <Card
                            hoverable
                            cover={<img alt="Ask for help" src="/request.webp" />}
                        >
                            <Meta title="Ask for help" description={
                                <>
                                    <p>Need a hand with something? Reach out to your local community for support—whether it’s advice, resources, or a friendly helping hand, your neighbors are here to help you succeed.</p>
                                    <Divider />
                                    <Button block type="primary" htmlType="submit">
                                        View
                                    </Button>
                                </>
                            } />
                        </Card>
                    </Link>
                </Col>
                <Col span={8}>
                    <Link to="/offer/new">
                        <Card
                            hoverable
                            cover={<img alt="Offer your help" src="/offer.webp" />}
                        >
                            <Meta title="Offer your help" description={
                                <>
                                    <p>Make a difference in your community by offering your skills, time, or resources to those in need. Your act of kindness could change someone’s day—or even their life.</p>
                                    <Divider />
                                    <Button block type="primary" htmlType="submit">
                                        View
                                    </Button>
                                </>
                            } />
                        </Card>
                    </Link>
                </Col>
                <Col span={8}>
                    <Link to="/community/new">
                        <Card
                            hoverable
                            cover={<img alt="Communities" src="/communities.webp" />}
                        >
                            <Meta title="Communities" description={
                                <>
                                    <p>Join a vibrant network of local communities where people come together to share, support, and grow. Get involved and discover the power of community-driven change.</p>
                                    <Divider />
                                    <Button block type="primary" htmlType="submit">
                                        View
                                    </Button>
                                </>
                            } />
                        </Card>
                    </Link>
                </Col>
            </Row>

            <Divider />

        </>
    );
};

export default HomeContentCards;
