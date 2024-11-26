import React from 'react';
import { Divider, Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUs = () => {

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <Card bordered={false}>
                {/* About Section */}
                <Paragraph>
                    <Title level={3}>About Winnipeg Cares</Title>
                    Welcome to <strong>Winnipeg Cares</strong>, the heart of Winnipeg’s community connections.
                    Our platform is built to inspire collaboration, provide support, and foster resilience across
                    our vibrant city. We aim to empower residents and organizations by offering a digital hub where
                    resources and opportunities can be shared with ease.
                </Paragraph>
                <Divider />

                {/* Story Section */}
                <Paragraph>
                    <Title level={3}>Our Story</Title>
                    Winnipeg Cares was founded by a group of dedicated Winnipeggers who understand the importance
                    of community. Our journey began with a vision of creating a safe, inclusive space for people
                    to find help, offer support, and engage in meaningful ways. Whether you’re looking for a helping
                    hand or ready to give back, Winnipeg Cares connects you with the right people and resources.
                </Paragraph>
                <Divider />

                {/* Mission Section */}
                <Paragraph>
                    <Title level={3}>Our Mission</Title>
                    At Winnipeg Cares, our mission is rooted in unity and compassion. We believe that by connecting
                    individuals and organizations, we can build a more inclusive and supportive city. From food and
                    shelter to mentorship and emotional support, our app is designed to break barriers and ensure
                    everyone has access to the help they need.
                </Paragraph>
                <Divider />

                {/* Call to Action */}
                <Paragraph>
                    <Title level={3}>Join Us Today</Title>
                    Be a part of a movement that’s transforming Winnipeg one connection at a time. Together, we can
                    create a community where every individual feels valued, supported, and connected. Thank you for
                    helping us make Winnipeg stronger and more united.
                </Paragraph>
            </Card>
        </div>
    );
};
export default AboutUs;