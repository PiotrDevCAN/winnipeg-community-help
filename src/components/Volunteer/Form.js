import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Form,
    Input,
    Select,
} from 'antd';

import { useStaticCommunityContext } from '../../context/StaticCommunityContext';

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

const NewVolunteerForm = () => {
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

    const { mainCommunitiesData, communitiesData } = useStaticCommunityContext();

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="volunteerCreate"
            onFinish={onFinish}
            initialValues={{
                prefix: '1',
            }}
            style={{
                maxWidth: 1200,
            }}
            scrollToFirstError
        >

            <Form.Item
                name="mainCommunity"
                label="Main Community"
                rules={[
                    {
                        required: true,
                        message: 'Please input main community name!',
                    },
                ]}
            >
                <Select
                    // defaultValue="jack"
                    // style={{ width: 120 }}
                    // onChange={handleChange}
                    options={mainCommunitiesData}
                />
            </Form.Item>

            <Form.Item
                name="localCommunity"
                label="Local Community"
                rules={[
                    {
                        required: true,
                        message: 'Please input local community name!',
                    },
                ]}
            >
                <Select
                    // defaultValue="jack"
                    // style={{ width: 120 }}
                    // onChange={handleChange}
                    options={communitiesData}
                />
            </Form.Item>

            <Form.Item
                name="FirstName"
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
                name="nick"
                label="Nick"
                tooltip="What do you want others to call you?"
                rules={[
                    {
                        required: true,
                        message: 'Please input your nick!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
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
                    Register volunteer
                </Button>
            </Form.Item>
        </Form>
    );
};
export default NewVolunteerForm;