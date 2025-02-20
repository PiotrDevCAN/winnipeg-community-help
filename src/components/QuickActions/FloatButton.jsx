
import React from 'react';
import { FloatButton } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import useQuickActions from '@/customHooks/useQuickActions';

const FloatButtons = () => {

    const { menuContent } = useQuickActions();

    return (
        <>
            <FloatButton.Group
                shape="circle"
                trigger="hover"
                type="primary"
                style={{
                    insetInlineEnd: 24,
                }}
                tooltip={<div>Quick Actions</div>}
                icon={<AppstoreOutlined />}
            >
                {menuContent.map(
                    (item, index) => {
                        if (item.label && !item.disabled) {
                            return <FloatButton
                                key={index}
                                style={item.style}
                                tooltip={item.label}
                                onClick={item.onClick}
                                icon={item.icon}
                            />
                        }

                    }
                )}
            </FloatButton.Group>
        </>
    );
};

export default FloatButtons;