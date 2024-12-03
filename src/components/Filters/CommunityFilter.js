import React, { useState } from 'react';
import { Dropdown, Flex, message, Space, Button, Select, Row, Col } from 'antd';

import { TbBuildingCommunity } from "react-icons/tb";
import { RiCommunityLine } from "react-icons/ri";

import { useStaticCommunityContext } from '../../context/StaticCommunityContext';
import SelectAllOption from '../SelectAllOption';

const CommunityFilter = () => {

    const {
        mainCommunitiesData, subCommunitiesData, getSubCommunities,
        selectedCommunity, setSelectedCommunity,
        selectedSubCommunity, setSelectedSubCommunity,
        subCommunityOptions, setSubCommunityOptions,
        loadingCommunities, loadingSubCommunities,
    } = useStaticCommunityContext();

    const updatedMainCommunitiesData = mainCommunitiesData.map(item => {
        let value = item.id;
        return { ...item, value };
    });

    const updatedSubCommunitiesData = subCommunityOptions.map(item => {
        let value = item.id;
        return { ...item, value };
    });

    const mainCommunitiesDataOptionsData = SelectAllOption.concat(updatedMainCommunitiesData);
    const subCommunitiesOptionsData = SelectAllOption.concat(updatedSubCommunitiesData);

    const handleCommunityChange = (value) => {
        const tempValue = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedCommunity(null);
            setSelectedSubCommunity(null);
            setSubCommunityOptions([]);
        } else {
            const tempSubCommunities = getSubCommunities(tempValue);
            console.log('tempSubCommunities');
            console.log(tempSubCommunities);
            setSelectedCommunity(tempValue);
            setSubCommunityOptions(tempSubCommunities || []);
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
        <Row gutter={16}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Select
                    value={selectedCommunity}
                    suffixIcon={<TbBuildingCommunity />}
                    showSearch
                    placeholder="Select a Community"
                    optionFilterProp="label"
                    onChange={handleCommunityChange}
                    options={mainCommunitiesDataOptionsData}
                    loading={loadingCommunities}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Select
                    value={selectedSubCommunity}
                    suffixIcon={<RiCommunityLine />}
                    showSearch
                    placeholder="Select a Sub Community"
                    optionFilterProp="label"
                    onChange={handleSubCommunityChange}
                    options={subCommunitiesOptionsData}
                    loading={loadingSubCommunities}
                    style={{ width: '100%' }}
                />
            </Col >
        </Row>
    );
};

export default CommunityFilter;
