import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Form,
    Input,
    Select,
} from 'antd';

import communitiesData from '../../data/communitiesData';

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

    // const commuinities = communitiesData.map((value, index) => {
    //     const item = {
    //         value: value.id,
    //         label: value.name,
    //     };
    //     return item;
    // });

    const commuinities =
        [
            {
                label: <span>manager</span>,
                title: 'manager',
                options: [
                    {
                        label: <span>Jack</span>,
                        value: 'Jack',
                    },
                    {
                        label: <span>Lucy</span>,
                        value: 'Lucy',
                    },
                ],
            },
            {
                label: <span>engineer</span>,
                title: 'engineer',
                options: [
                    {
                        label: <span>Chloe</span>,
                        value: 'Chloe',
                    },
                    {
                        label: <span>Lucas</span>,
                        value: 'Lucas',
                    },
                ],
            },
        ]

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
                maxWidth: 700,
            }}
            scrollToFirstError
        >
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
                <Button type="primary" htmlType="submit">
                    Save Changes
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditForm;