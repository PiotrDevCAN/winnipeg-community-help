import React from 'react';
import { Button, Form, Input, Divider, Typography, message } from 'antd';
import { contactsData } from '@/data/contactsData';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const SuggestionForm = ({ form, formName, hideSubmitBtn }) => {
    const onFinish = (values) => {
        const templateParams = {
            service_id: contactsData.service_id,       // Replace with your EmailJS service ID
            template_id: contactsData.template_id,     // Replace with your EmailJS template ID
            user_id: contactsData.public_key,             // Replace with your EmailJS user ID
            template_params: {
                to_name: contactsData.name,
                from_name: `${values.user.firstName} ${values.user.lastName}`,
                reply_to: values.user.email,
                first_name: values.user.firstName,
                last_name: values.user.lastName,
                email: values.user.email,
                message: values.message,
            },
        };
        fetch(contactsData.service_api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(templateParams),
        })
            .then((res) => {
                message.info('Form submitted successfully!');
            })
            .catch((error) => {
                message.info('Failed to send the email.');
            })
            .finally(() => {
                form.resetFields();
            });
    };

    return (
        <>
            <Paragraph>
                <Title level={3}>The Winnipeg Cares</Title>
                Have questions, feedback, or need assistance? We’re here to help! Please fill out the form below, and a member of our team will get back to you as soon as possible. We look forward to connecting with you!
            </Paragraph>
            <Divider />
            <Form
                form={form}
                name={formName}
                style={{
                    maxWidth: 360,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name={['user', 'firstName']}
                    label="First Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please type in your first name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'lastName']}
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please type in your last name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Please type in your valid e-mail address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="message"
                    label="Message"
                    rules={[
                        {
                            required: true,
                            message: 'Please type in your message!',
                        },
                    ]}
                >
                    <TextArea rows={4} maxLength={200} />
                </Form.Item>
                {!hideSubmitBtn ? (
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            Send message
                        </Button>
                    </Form.Item>
                ) : ''}
            </Form>
        </>
    );
};
export default SuggestionForm;