import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useAuthContext } from '../../context/AuthContext';

const EmailLoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { emailLogin } = useAuthContext();

    const onFinish = (values) => {

        console.log('Received values of form: ', values);

        setEmail(values.email);
        setPassword(values.password);

        emailLogin(email, password);
    };

    return (
        <Form
            name="login"
            initialValues={{
                remember: true,
            }}
            style={{
                maxWidth: 360,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email Address!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined />} placeholder="Email Address" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    Log in
                </Button>
                or <a href="/register">Register now!</a>
            </Form.Item>
        </Form>
    );
};
export default EmailLoginForm;