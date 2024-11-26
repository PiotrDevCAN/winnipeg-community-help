import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const DataDeletion = () => {

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <Card bordered={false}>
                <Paragraph>
                    <Title level={3}>Introduction</Title>
                    At Winnipeg Cares, we are committed to respecting the privacy of our users and safeguarding personal data. This Data Deletion Policy outlines the procedures for users to request the deletion of their data and describes how we handle these requests.
                </Paragraph>

                <Paragraph>
                    <Title level={3}>User Data Deletion Requests</Title>
                    Users can request the deletion of their personal data stored by Winnipeg Cares at any time. To initiate a deletion request, please contact us via [insert contact method or email address]. To verify the request, users may be asked to provide identifying information to confirm their identity.
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Data Deletion Process</Title>

                    Upon receiving a valid deletion request, we will:

                    <ul>
                        <li>Confirm receipt of the request and verify user identity.</li>
                        <li>Remove personal data from active databases within [specify time frame, e.g., 30 days].</li>
                        <li>Notify the user upon completion of data deletion.</li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Limitations and Exceptions</Title>

                    Certain data may not be immediately deleted if it is required to:

                    <ul>
                        <li>Comply with legal obligations.</li>
                        <li>Resolve disputes or enforce our policies.</li>
                        <li>Support internal analysis (using only anonymized data where possible).</li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Third-Party Services</Title>
                    If user data was shared with third-party services integrated into Winnipeg Cares, we will notify the relevant third parties to delete this data, as required. However, we are not responsible for data deletion managed by external providers.
                </Paragraph>

                <Paragraph>
                    <Title level={3}>Changes to This Policy</Title>
                    We may update this Data Deletion Policy periodically. All changes will be communicated to users, who are encouraged to review this policy regularly to stay informed about how we protect and manage data.
                </Paragraph>

                <Paragraph>
                    For further questions or to initiate a data deletion request, please contact us at piotr.tajanowicz@gmail.com.
                </Paragraph>
            </Card>
        </div>
    );
};
export default DataDeletion;