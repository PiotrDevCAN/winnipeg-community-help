import React from "react";
import { Typography, Card, Space, Flex } from "antd";
import DonateButtons from "../Donate/Buttons";

const { Title, Paragraph } = Typography;

const DonateUs = () => {
    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <Card bordered={false}>
                <Title level={2}>Support Winnipeg Cares</Title>
                <Paragraph style={{ fontSize: "18px", margin: "20px 0" }}>
                    At <strong>Winnipeg Cares</strong>, we are committed to making life easier for our community.
                    Your support helps us maintain and grow our platform, ensuring that everyone in Winnipeg
                    can access the resources they need.
                </Paragraph>
                <Paragraph style={{ fontSize: "16px", color: "#555" }}>
                    Every donation, big or small, goes a long way in helping us improve and expand our services.
                    Together, we can create a stronger, more connected Winnipeg. Thank you for your generosity!
                </Paragraph>

                <Flex
                    horizontal="true"
                    align="center"
                    justify="center"
                    style={{
                        padding: "16px 32px",
                        // border: '3px solid blue'
                    }}
                >
                    <DonateButtons />
                </Flex>
            </Card>
        </div>
    );
};

export default DonateUs;


