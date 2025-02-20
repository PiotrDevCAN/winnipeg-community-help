import React from 'react';
import { message, Form, Input, Divider, Flex } from 'antd';
import { useAuthContext } from '@/context/auth/AuthContext';
import CreateAccount from '@/components/Buttons/CreateAccount';
import Login from '@/components/Buttons/Login';
import ResetPassword from '@/components/Buttons/ResetPassword';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RemindForm = () => {

    const { resetPassword } = useAuthContext();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values) => {

        console.log('Received values of form: ', values);

        const result = resetPassword(values.email);
        if (result) {
            messageApi.open({
                type: 'success',
                content: 'Password reset finished',
            });
        } else {
            messageApi.open({
                type: 'error',
                content: 'Error during Password reset',
            });
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        messageApi.open({
            type: 'error',
            content: 'Error during Form submit',
        });
    };
    return (
        <Form
            {...formItemLayout}
            name="remind"
            initialValues={{
                remember: true,
            }}
            style={{
                maxWidth: 600,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <ResetPassword type="primary" />
            </Form.Item>

            <Flex vertical gap="small" style={{ marginBottom: "16px" }}>
                <Divider>
                    or
                </Divider>

                <Login />
                <CreateAccount />
            </Flex>
            {contextHolder}
        </Form>
    );
};
export default RemindForm;