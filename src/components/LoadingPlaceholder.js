import React from 'react';
import { Spin } from 'antd';

const contentStyle = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
};
const content = <div style={contentStyle} />;

const LoadingPlaceholder = ({ message }) => {
    return (
        <Spin tip={message} size="large">
            {content}
        </Spin>
    );
};

export default LoadingPlaceholder;
