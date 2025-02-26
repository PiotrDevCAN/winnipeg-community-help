import React, { useState, useEffect } from 'react';
import {
    AutoComplete,
    Button,
    Form,
    Input,
    Select,
    DatePicker,
    Divider,
} from 'antd';
import { useAuthContext } from '@/context/auth/AuthContext';
// import { useUserContext } from '@/context/mainTypes/UserContext';

const { Option } = Select;
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
const EditForm = () => {

    const { user } = useAuthContext();
    // const { item } = useUserContext();
    const item = {};

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="1">+1</Option>
                <Option value="48">+48</Option>
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

    useEffect(() => {
        form.setFieldsValue({
            ...item,
            email: user.email,
            firstName: item.first_name,
            lastName: item.last_name,
            prefix: item.prefix,
            phone: item.phone_number,
            // birthDate: item.birth_date,
        });
    }, [item]);

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="editProfile"
            onFinish={onFinish}
            initialValues={{
                prefix: '1',
            }}
            style={{
                maxWidth: 360,
            }}
            scrollToFirstError
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

            <Divider />

            <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input first name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input last name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[
                    {
                        required: true,
                        message: 'Please input your nickname!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                    {
                        required: true,
                        message: 'Please select gender!',
                    },
                ]}
            >
                <Select placeholder="select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="birthDate"
                label="Date of Birth"
                rules={[
                    {
                        required: true,
                        message: 'Please input your birth date!',
                    },
                ]}
            >
                <DatePicker format="YYYY-MM-DD" />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item
                name="website"
                label="Website"
                rules={[
                    {
                        required: true,
                        message: 'Please input website!',
                    },
                ]}
            >
                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                    <Input />
                </AutoComplete>
            </Form.Item>

            <Form.Item
                name="description"
                label="Description"
                rules={[
                    {
                        required: true,
                        message: 'Please input Description',
                    },
                ]}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" className="colorful-background">
                    Save Changes
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditForm;