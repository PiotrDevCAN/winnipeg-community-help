import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    DatePicker,
    Select,
    Divider,
    Flex,
    message,
} from 'antd';
import { useAuthContext } from '@/context/auth/AuthContext';
// import { useUserContext } from '@/context/mainTypes/UserContext';
import ReCAPTCHA from 'react-google-recaptcha';
import ResetPassword from '@/components/Buttons/ResetPassword';
import Login from '@/components/Buttons/Login';
import CreateAccount from '@/components/Buttons/CreateAccount';

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

const recaptchaSiteKey = import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY;

const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, isAdmin, emailRegister, updateProfile, emailDelete } = useAuthContext();
    // const { createItem } = useUserContext();
    const [messageApi, contextHolder] = message.useMessage();

    const [captchaToken, setCaptchaToken] = useState(null);
    const [captchaError, setCaptchaError] = useState('');

    const [form] = Form.useForm();
    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
        setCaptchaError('');
    };
    const handleCaptchaError = () => {
        setCaptchaError('Please complete the CAPTCHA.');
    };
    const onFinish = (values) => {
        if (!captchaToken) {
            handleCaptchaError();
            return;
        }

        console.log('Received values of form: ', values);

        setEmail(values.email);
        setPassword(values.password);

        const displayName = values.firstName + ' ' + values.lastName;
        const data = {
            displayName,
        };

        const birthDate = values.birthDate.format("YYYY-MM-DD");
        values.birthDate = birthDate;

        emailRegister(values.email, values.password)
            .then(response => {

                const userCreated = response.user;
                // const userId = userCreated.uid;

                console.log('User created:', userCreated);

                // const userToSave = { ...values, userId };
                // const userToSave = {
                //     firebase_id: userId,
                //     first_name: values.firstName,
                //     last_name: values.lastName,
                //     nickname: values.nickname,
                //     phone_number: values.phone,
                //     website: values.website,
                //     description: values.description,
                //     gender: values.gender,
                //     birth_date: values.birthDate,
                //     prefix: values.prefix,
                // }

                // const promises = [
                //     // add additional data to firebase user's record
                //     updateProfile(userCreated, data),
                //     // save user's record to a database
                //     createItem(userToSave)
                // ];
                // Promise.allSettled(promises)
                //     .then((results) => {
                //         results.forEach((result, index) => {
                //             if (result.status === 'fulfilled') {
                //                 console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
                //             } else if (result.status === 'rejected') {
                //                 console.log(`Promise ${index + 1} rejected with reason:`, result.reason);
                //             }
                //         });
                //     });
            })
            .catch(error => {
                console.error('Error:', error);
                // delete user's record from firebase
                emailDelete(values.email, values.password);
            })
            .finally(() => console.log('Fetch operation 1 complete.'));

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        messageApi.open({
            type: 'error',
            content: 'Error during Form submit',
        });
        if (!captchaToken) {
            handleCaptchaError();
            return;
        }
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
    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
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
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{
                prefix: '1',
            }}
            style={{
                maxWidth: 600,
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
                        required: false,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: false,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: false,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Divider />

            <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                    {
                        required: false,
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
                        required: false,
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
                        required: false,
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
                        required: false,
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
                        required: false,
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
                        required: false,
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
                        required: false,
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
                        required: false,
                        message: 'Please input Description',
                    },
                ]}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item
                label="Captcha"
                extra="We must make sure that your are a human."
            >
                <ReCAPTCHA
                    sitekey={recaptchaSiteKey}
                    onChange={handleCaptchaChange}
                />
                {captchaError && <p style={{ color: 'red' }}>{captchaError}</p>}
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <CreateAccount type="primary" />
            </Form.Item>

            <Flex vertical gap="small" style={{ marginBottom: "16px" }}>
                <Divider>
                    or
                </Divider>

                <Login />
                <ResetPassword />
            </Flex>
            {contextHolder}
        </Form>
    );
};
export default RegisterForm;