import React from "react";
import { Card, Col, Row, Avatar, Divider } from 'antd';
import EmailLoginForm from "./EmailLoginForm";
import SocialMediaLoginForm from "./SocialMediaLoginForm";
import icon1 from "@/assets/icon1.webp";

const cardStyle = {
    marginBottom: 16,
}

const AuthForm = () => {
    return (
        <Row gutter={16}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Card bordered={true} align="center" style={cardStyle}>
                    <EmailLoginForm />
                </Card>
            </Col>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                <Card bordered={true} align="center" style={cardStyle}>
                    <img src={icon1} alt="logo" />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Card bordered={true} align="center" style={cardStyle}>
                    <Card.Meta
                        title="Log in with Social Media"
                        description={
                            <SocialMediaLoginForm />
                        }
                    />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <Card bordered={true} align="center" style={cardStyle}>
                    <img src={icon1} alt="logo" />
                </Card>
            </Col>
        </Row>
    );
};

export default AuthForm;
