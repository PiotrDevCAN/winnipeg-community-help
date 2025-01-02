import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Checkbox, Divider, Typography } from 'antd';
import { useAuthContext } from '@/context/AuthContext';
import RemindPassword from '@/components/Buttons/RemindPassword';
import CreateAccount from '@/components/Buttons/CreateAccount';

const { Text } = Typography;

const dividerStyle = {
    margin: "8px 0"
}

const EmailLoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { emailLogin } = useAuthContext();

    const onFinish = (values) => {

        console.log('Received values of form: ', values);

        setEmail(values.email);
        setPassword(values.password);

        emailLogin(values.email, values.password);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
            onFinishFailed={onFinishFailed}
            autoComplete="off"
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
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit" className="colorful-background">
                    Log in
                </Button>
                <Divider style={dividerStyle} />
                <RemindPassword />

                <Divider>
                    or
                </Divider>

                <CreateAccount />
            </Form.Item>
        </Form>
    );
};
export default EmailLoginForm;