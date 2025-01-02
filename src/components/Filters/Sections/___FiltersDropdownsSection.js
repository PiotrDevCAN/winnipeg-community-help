import React from 'react';
import { Dropdown, message, Space } from 'antd';

// category
import { TbCategory } from "react-icons/tb";
// type
import { VscTypeHierarchySub } from "react-icons/vsc";

// Community 
import { TbBuildingCommunity } from "react-icons/tb";
// Sub Community
import { RiCommunityLine } from "react-icons/ri";

import { useStaticHelpDataContext } from '@/context/StaticHelpDataContext';
import { useStaticCommunityContext } from '@/context/StaticCommunityContext';

const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
};
const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const FiltersDropdownsSection = () => {

    const { categoriesData, typesData } = useStaticHelpDataContext();
    const { mainCommunitiesData, communitiesData } = useStaticCommunityContext();

    const menuCategoriesProps = {
        items: categoriesData,
        onClick: handleMenuClick,
    };
    const menuTypesProps = {
        items: typesData,
        onClick: handleMenuClick,
    };
    const menuMainCommunitiesDataProps = {
        items: mainCommunitiesData,
        onClick: handleMenuClick,
    };
    const menuCommunitiesProps = {
        items: communitiesData,
        onClick: handleMenuClick,
    };

    return (
        <Space>
            <Dropdown.Button menu={menuCategoriesProps} placement="bottom" icon={<TbCategory />} onClick={handleButtonClick}>
                Category
            </Dropdown.Button>
            <Dropdown.Button menu={menuTypesProps} placement="bottom" icon={<VscTypeHierarchySub />} onClick={handleButtonClick}>
                Type
            </Dropdown.Button>
            <Dropdown.Button menu={menuMainCommunitiesDataProps} placement="bottom" icon={<TbBuildingCommunity />} onClick={handleButtonClick}>
                Community
            </Dropdown.Button>
            <Dropdown.Button menu={menuCommunitiesProps} placement="bottom" icon={<RiCommunityLine />} onClick={handleButtonClick}>
                Sub Community
            </Dropdown.Button>
        </Space >
    );
};

export default FiltersDropdownsSection;
