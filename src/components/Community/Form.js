import React, { useEffect, useState } from 'react';
import {
    AutoComplete,
    Button,
    Form,
    Input,
    Select,
} from 'antd';

import { FormCommunityProvider } from '@/context/auxiliary/FormCommunityContext';
import MainCommunity from '../Selects/MainCommunity';

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

const CommunityForm = ({ item, mode }) => {

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
            communityName: 'test',
            // email: item.email,
            // prefix: item.prefix,
            // phone: item.phone_number,
        });
    }, [item]);

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="communityCreate"
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
                <MainCommunity />
            </Form.Item>

            <Form.Item
                name="communityName"
                label="Community Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input community name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="alias"
                label="Alias"
                tooltip="What do you want others to call your community?"
                rules={[
                    {
                        required: true,
                        message: 'Please input your alias!',
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
                {mode === 'new' ?
                    <Button type="primary" htmlType="submit" className="colorful-background">
                        Register community
                    </Button> :
                    <Button type="primary" htmlType="submit" className="colorful-background">
                        Update community
                    </Button>
                }
            </Form.Item>
        </Form>
    );
};

export const MainForm = ({ item, mode }) => {
    return (
        <FormCommunityProvider>
            <CommunityForm item={item} mode={mode} />
        </FormCommunityProvider>
    );
};

export default MainForm;