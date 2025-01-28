import React from 'react';
import { Empty, Typography, Flex } from 'antd';

const ErrorPlaceholder = ({ error }) => {
    return (
        <Flex align='middle' justify='center' style={{ width: '100%', marginBottom: '20px' }}>
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                // imageStyle={{
                //     height: 60,
                // }}
                description={
                    <Typography.Text>
                        Error: {error}
                    </Typography.Text>
                }
            >
            </Empty>
        </Flex>
    );
};

export default ErrorPlaceholder;
