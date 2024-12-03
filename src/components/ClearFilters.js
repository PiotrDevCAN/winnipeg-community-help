import React, { useState } from 'react';
import { Dropdown, Flex, message, Space, Button, Select } from 'antd';

import { TbBuildingCommunity } from "react-icons/tb";
import { RiCommunityLine } from "react-icons/ri";

import { useStaticHelpDataContext } from '../context/StaticHelpDataContext';
import { useStaticCommunityContext } from '../context/StaticCommunityContext';

const ClearFilters = () => {

    const {
        setSelectedCategory,
        setSelectedType,
        setTypeOptions,
    } = useStaticHelpDataContext();

    const {
        setSelectedCommunity,
        setSelectedSubCommunity,
        setSubCommunityOptions,
    } = useStaticCommunityContext();

    const handleClearFilters = () => {
        // clear categories
        setSelectedCategory(null);
        setTypeOptions([]);
        setSelectedType(null);

        // clear communities
        setSelectedCommunity(null);
        setSubCommunityOptions([]);
        setSelectedSubCommunity(null);
    }

    return (
        <Space>
            <Button onClick={handleClearFilters} block type="primary" htmlType="submit" className="colorful-background">
                Clear filters
            </Button>
        </Space >
    );
};

export default ClearFilters;
