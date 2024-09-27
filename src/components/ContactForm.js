import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';

const { TextArea } = Input;

const ContactForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form
            name="contact"
            style={{
                maxWidth: 360,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="message"
                label="Message"
                rules={[
                    {
                        required: true,
                        message: 'Please type in message!',
                    },
                ]}
            >
                <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    Send message
                </Button>
            </Form.Item>
        </Form>
    );
};
export default ContactForm;