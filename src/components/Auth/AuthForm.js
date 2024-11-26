import React from "react";
import { Card, Col, Row, Avatar } from 'antd';
import EmailLoginForm from "./EmailLoginForm";
import SocialMediaLoginForm from "./SocialMediaLoginForm";

const AuthForm = () => {
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Card bordered={true} style={{ height: '100%' }}>
                    <Card.Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                        title="Email authentication"
                        description={
                            <EmailLoginForm />
                        }
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={{ height: '100%' }}>
                    <Card.Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Social Media authentication"
                        description={
                            <SocialMediaLoginForm />
                        }
                    />
                </Card>
            </Col>
        </Row>
    );
};

export default AuthForm;
