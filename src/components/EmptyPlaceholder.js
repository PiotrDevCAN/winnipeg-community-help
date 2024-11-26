import React from 'react';
import { Button, Empty, Typography } from 'antd';

const EmptyPlaceholder = ({ newItem }) => {
    return (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
                height: 60,
            }}
            description={
                <Typography.Text>
                    No help items data
                </Typography.Text>
            }
        >
            <Button type="primary" onClick={newItem} >Create Now</Button>
        </Empty>
    );
};

export default EmptyPlaceholder;
