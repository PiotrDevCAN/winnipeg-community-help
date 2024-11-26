import React from 'react';
import { Button, Modal, Form } from 'antd';
import SuggestionForm from '../../components/SuggestionForm';

const SuggestionModal = ({ open, onOk, onCancel }) => {

    const [form] = Form.useForm();

    const handleOk = () => {
        onOk();
    };
    const handleCancel = () => {
        onCancel();
    };

    const handleCloseButton = () => {
        onCancel();
    };
    const handleSubmitButton = () => {
        form.submit();
    };

    // const handleSubmitButton = async () => {
    //     try {
    //         const values = await form.validateFields();
    //         console.log('Form Values:', values);
    //         //   setIsModalVisible(false);
    //         form.resetFields();
    //         //   message.success('Form submitted successfully!');
    //     } catch (error) {
    //         console.log('Validation failed:', error);
    //     }
    // };

    return (
        <Modal
            title="Suggestion form"
            style={{
                top: 20,
            }}
            open={open}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
            footer={[
                <Button key="close" onClick={handleCloseButton}>
                    Close
                </Button>,
                <Button key="submit" type="primary" onClick={handleSubmitButton}>
                    Submit
                </Button>,
            ]}
        >
            <SuggestionForm form={form} formName="suggestion" hideSubmitBtn={true} />
        </Modal >
    );
};

export default SuggestionModal;