import React from 'react';
import { Button, Dropdown } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import useQuickActions from '@/customHooks/useQuickActions';

const iconStyle = {
    margin: '0 8px',
};

const Icons = () => {

    const { menuContent } = useQuickActions();

    const menuProps = {
        items: menuContent,
    };

    return (
        <>
            <Dropdown
                menu={menuProps}
                trigger={['click']}
            >
                <Button type="default" shape="circle" icon={<AppstoreOutlined />} style={iconStyle} />
            </Dropdown>
        </>
    );
};

export default Icons;
