import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Form,
    Input,
    Select,
} from 'antd';

import mainCommunities from '../../data/mainCommunitiesData';
import subCommunitiesData from '../../data/communitiesData';
import helpTypesData from '../../data/helpTypesData';

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

const NewRequestForm = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="requestCreate"
            onFinish={onFinish}
            initialValues={{
                // prefix: '1',
            }}
            style={{
                maxWidth: 700,
            }}
            scrollToFirstError
        >
            <Form.Item
                name="mainCommunity"
                label="Main Community"
                rules={[
                    {
                        required: true,
                        message: 'Please input first name!',
                    },
                ]}
            >
                <Select
                    // defaultValue="jack"
                    // style={{ width: 120 }}
                    // onChange={handleChange}
                    options={mainCommunities}
                />
            </Form.Item>

            <Form.Item
                name="subCommunity"
                label="Sub Community"
                rules={[
                    {
                        required: true,
                        message: 'Please input first name!',
                    },
                ]}
            >
                <Select
                    // defaultValue="jack"
                    // style={{ width: 120 }}
                    // onChange={handleChange}
                    options={subCommunitiesData}
                />
            </Form.Item>

            <Form.Item
                name="helpType"
                label="Help Type"
                rules={[
                    {
                        required: true,
                        message: 'Please input first name!',
                    },
                ]}
            >
                <Select
                    // defaultValue="jack"
                    // style={{ width: 120 }}
                    // onChange={handleChange}
                    options={helpTypesData}
                />
            </Form.Item>

            <Form.Item
                name="description"
                label="Describe what do you need?"
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
                    Submit request
                </Button>
            </Form.Item>
        </Form>
    );
};
export default NewRequestForm;