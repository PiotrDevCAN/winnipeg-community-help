import React, { useState } from 'react';
import { Dropdown, Flex, message, Space, Button, Select } from 'antd';

import { TbBuildingCommunity } from "react-icons/tb";
import { RiCommunityLine } from "react-icons/ri";

import { useStaticCommunityContext } from '../../context/StaticCommunityContext';
import SelectAllOption from '../SelectAllOption';

const CommunityFilter = () => {

    const {
        mainCommunities, communities, getSubCommunities,
        selectedCommunity, setSelectedCommunity,
        selectedSubCommunity, setSelectedSubCommunity,
        subCommunityOptions, setSubCommunityOptions,
        loadingCommunities, loadingSubCommunities,
    } = useStaticCommunityContext();

    const mainCommunitiesOptionsData = SelectAllOption.concat(mainCommunities);
    const subCommunitiesOptionsData = SelectAllOption.concat(subCommunityOptions);

    const handleCommunityChange = (value) => {
        const tempValue = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedCommunity(null);
            setSelectedSubCommunity(null);
            setSubCommunityOptions([]);
        } else {
            const tempTypes = getSubCommunities(tempValue);
            setSelectedCommunity(tempValue);
            setSubCommunityOptions(tempTypes || []);
        }
    };
    const handleSubCommunityChange = (value) => {
        const tempValue = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedSubCommunity(null);
        } else {
            setSelectedSubCommunity(tempValue);
        }
    };

    return (
        <Space>
            <Select
                value={selectedCommunity}
                suffixIcon={<TbBuildingCommunity />}
                showSearch
                placeholder="Select a Community"
                optionFilterProp="label"
                onChange={handleCommunityChange}
                options={mainCommunitiesOptionsData}
                loading={loadingCommunities}
                style={{ width: '320px' }}
            />
            <Select
                value={selectedSubCommunity}
                suffixIcon={<RiCommunityLine />}
                showSearch
                placeholder="Select a Sub Community"
                optionFilterProp="label"
                onChange={handleSubCommunityChange}
                options={subCommunitiesOptionsData}
                loading={loadingSubCommunities}
                style={{ width: '320px' }}
            />
        </Space >
    );
};

export default CommunityFilter;
