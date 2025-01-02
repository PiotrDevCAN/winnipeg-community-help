
import React, { useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { MdOutlineVolunteerActivism, MdVolunteerActivism } from "react-icons/md";
import { RiUserHeartLine } from "react-icons/ri";
import { TbBuildingCommunity } from "react-icons/tb";
import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import SuggestionModal from '@/components/Modals/SuggestionModal';

const Navigation = () => {

    const [open, setOpen] = useState(false);

    const showSuggestionModal = () => {
        setOpen(true);
    };
    const hideSuggestionModal = () => {
        setOpen(false);
    };
    const handleOk = () => {
        hideSuggestionModal();
    };
    const handleCancel = () => {
        hideSuggestionModal();
    };

    return (
        <>
            <SuggestionModal open={open} onOk={handleOk} onCancel={handleCancel} />
            <FloatButton.Group
                shape="circle"
                trigger="hover"
                type="primary"
                style={{
                    insetInlineEnd: 24,
                }}
                tooltip={<div>Context Menu</div>}
                icon={<AppstoreOutlined />}
            >
                <FloatButton
                    tooltip={<div>New help request</div>}
                    href="/request/new"
                    icon={<MdOutlineVolunteerActivism />}
                />
                <FloatButton
                    tooltip={<div>New help offer</div>}
                    href="/offer/new"
                    icon={<MdVolunteerActivism />}
                />
                <FloatButton
                    tooltip={<div>New volunteer</div>}
                    href="/volunteer/new"
                    icon={<RiUserHeartLine />}
                />
                <FloatButton
                    tooltip={<div>New community</div>}
                    href="/community/new"
                    icon={<TbBuildingCommunity />}
                />
                <FloatButton
                    tooltip={<div>Send suggestion</div>}
                    onClick={showSuggestionModal}
                    icon={<QuestionCircleOutlined />}
                />
            </FloatButton.Group>
        </>
    );
};

export default Navigation;