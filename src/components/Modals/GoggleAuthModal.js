import React from 'react';
import { Button, Modal } from 'antd';

const GoggleAuthModal = ({ open, onOk, onCancel }) => {
    const handleOk = () => {
        onOk();
    };
    const handleCancel = () => {
        onCancel();
    };

    return (
        <Modal
            title="Google Auth form"
            style={{
                top: 20,
            }}
            open={open}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
            footer={[
                <Button key="close" onClick={handleCancel}>
                    Close
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                    Submit
                </Button>,
            ]}
        >
            {/* <SuggestionForm /> */}
        </Modal >
    );
};

export default GoggleAuthModal;