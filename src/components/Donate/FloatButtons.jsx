
import React from 'react';
import { FloatButton } from 'antd';
import { FaDonate } from "react-icons/fa";
import useDonation from '@/customHooks/useDonation';

const FloatButtons = () => {

    const { menuContent } = useDonation();

    return (
        <>
            <FloatButton.Group
                shape="circle"
                trigger="hover"
                type="default"
                style={{
                    insetInlineEnd: 80,
                }}
                tooltip={<div>Donate Us</div>}
                icon={<FaDonate />}
            >
                {menuContent.map(
                    (item, index) => {
                        if (item.label && !item.disabled) {
                            return <FloatButton
                                key={index}
                                style={item.contextMenuStyle}
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