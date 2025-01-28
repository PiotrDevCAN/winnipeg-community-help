import React, { useEffect, useState } from 'react';
import {
    AutoComplete,
    Button,
    Divider,
    Form,
    Input,
    Select,
    DatePicker,
} from 'antd';

import { FormCommunityProvider } from '@/context/auxiliary/FormCommunityContext';
import MainCommunity from '@/components/Selects/MainCommunity';
import SubCommunity from '@/components/Selects/SubCommunity';

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

const VolunteerForm = ({ item, mode }) => {

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
        if (item) {
            form.setFieldsValue({
                ...item,
                // email: item.email,
                firstName: item.first_name,
                lastName: item.last_name,
                nickname: item.nickname,
                prefix: item.prefix,
                phone: item.phone_number,
                // birthDate: item.birth_date,
            });
        }

    }, [item]);

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
                <MainCommunity />
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
                <SubCommunity preSelectedId={item ? item.community_id : null} />
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
                        message: 'Please input your nick!',
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
                {mode === 'new' ?
                    <Button type="primary" htmlType="submit" className="colorful-background">
                        Register volunteer
                    </Button> :
                    <Button type="primary" htmlType="submit" className="colorful-background">
                        Update volunteer
                    </Button>
                }
            </Form.Item>
        </Form>
    );
};

export const MainForm = ({ item, mode }) => {
    return (
        <FormCommunityProvider>
            <VolunteerForm item={item} mode={mode} />
        </FormCommunityProvider>
    );
};

export default MainForm;