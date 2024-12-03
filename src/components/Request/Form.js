import React from 'react';
import {
    AutoComplete,
    Button,
    Form,
    Input,
    Select,
} from 'antd';

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

const NewRequestForm = ({ catId, typeId }) => {

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
                maxWidth: 1200,
            }}
            scrollToFirstError
        >
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
                <Button type="primary" htmlType="submit" className="colorful-background">
                    Submit request
                </Button>
            </Form.Item>
        </Form>
    );
};
export default NewRequestForm;