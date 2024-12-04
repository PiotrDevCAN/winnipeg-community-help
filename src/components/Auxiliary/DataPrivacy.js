import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const DataPrivacy = () => {

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <Card bordered={false}>
                <Paragraph>
                    <Title level={2}>Introduction</Title>
                    Welcome to Winnipeg Cares. This policy outlines how we collect, use, protect, and manage your personal information. By using Winnipeg Cares, you agree to the terms described here.
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Information We Collect</Title>

                    <ol>
                        <li>Personal Information: When you register or interact with our services, we may collect information such as your name, email address, phone number, and other identifiable information you provide.</li>
                        <li>Usage Data: We collect information on how you interact with our app, including access times, pages viewed, and other activity to improve our services.</li>
                        <li>Location Data: With your consent, we may collect location information to provide features relevant to your community needs. You can disable location permissions in your device settings.</li>
                    </ol>
                </Paragraph>

                <Paragraph>
                    <Title level={3}>How We Use Your Information</Title>

                    We use your information to:

                    <ul>
                        <li>Provide, operate, and maintain Winnipeg Cares.</li>
                        <li>Improve user experience through analytics and feedback.</li>
                        <li>Communicate with you regarding updates, service notices, and support.</li>
                        <li>Ensure security and detect unauthorized access.</li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Data Sharing and Disclosure</Title>

                    We do not share your personal information with third parties except in the following cases:

                    <ul>
                        <li>Service Providers: Trusted third parties who assist us in delivering and improving our services.</li>
                        <li>Legal Compliance: When required to comply with legal obligations or protect Winnipeg Cares’ rights and user safety.</li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Data Security</Title>
                    We take measures to secure your data and protect it from unauthorized access. However, no internet transmission is completely secure. Please help protect your account by choosing a strong password and keeping it private.
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Data Retention</Title>
                    Your information will be retained as long as necessary to provide services or as required by law. You may request data deletion by contacting us at [Contact Information].
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Your Rights</Title>
                    You may access, modify, or delete your personal data. Contact us to manage your preferences.
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Changes to This Policy</Title>
                    We may update this policy from time to time. We encourage you to review it periodically.
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Contact Us</Title>

                    For questions or concerns about your privacy, contact us at:
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Winnipeg Cares Support</Title>

                    Email: piotr.tajanowicz@gmail.com
                </Paragraph>
                <Paragraph>
                    Phone: (431) 990 0814
                </Paragraph>
                <Paragraph>
                    Effective Date: 7/11/2024
                </Paragraph>
            </Card>
        </div>
    );
};
export default DataPrivacy;