import React from 'react';
import { Empty, Typography } from 'antd';

const ErrorPlaceholder = ({ error }) => {
    return (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
                height: 60,
            }}
            description={
                <Typography.Text>
                    Error: {error}
                </Typography.Text>
            }
        >
        </Empty>
    );
};

export default ErrorPlaceholder;
