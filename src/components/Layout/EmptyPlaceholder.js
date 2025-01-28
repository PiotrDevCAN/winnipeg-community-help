import React from 'react';
import { Button, Empty, Typography, Flex } from 'antd';

const EmptyPlaceholder = ({ newItem }) => {
    return (
        <Flex align='middle' justify='center' style={{ width: '100%', marginBottom: '20px' }}>
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                // imageStyle={{
                //     height: 60,
                // }}}
                description={
                    <Typography.Text>
                        No items to display
                    </Typography.Text>
                }
            >
                <Button type="primary" onClick={newItem} >Create Now</Button>
            </Empty>
        </Flex>
    );
};

export default EmptyPlaceholder;
