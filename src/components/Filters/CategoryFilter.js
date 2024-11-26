import React, { useState } from 'react';
import { Dropdown, Flex, message, Space, Button, Select } from 'antd';

import { TbCategory } from "react-icons/tb";
import { VscTypeHierarchySub } from "react-icons/vsc";

import { useStaticHelpDataContext } from '../../context/StaticHelpDataContext';
import SelectAllOption from '../SelectAllOption';

const CategoryFilter = () => {

    const { categoriesData, typesData, getTypes,
        selectedCategory, setSelectedCategory,
        selectedType, setSelectedType,
        typeOptions, setTypeOptions,
        loadingCategories, loadingTypes,
    } = useStaticHelpDataContext();

    const categoriesOptionsData = SelectAllOption.concat(categoriesData);
    const typeOptionsData = SelectAllOption.concat(typeOptions);

    const handleCategoryChange = (value) => {
        const tempValue = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedCategory(null);
            setSelectedType(null);
            setTypeOptions([]);
        } else {
            const tempTypes = getTypes(tempValue);
            setSelectedCategory(tempValue);
            setTypeOptions(tempTypes || []);
        }
    };
    const handleTypeChange = (value) => {
        const tempValue = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedType(null);
        } else {
            setSelectedType(tempValue);
        }
    };

    return (
        <Space>
            <Select
                value={selectedCategory}
                suffixIcon={<TbCategory />}
                showSearch
                placeholder="Select a Category"
                optionFilterProp="label"
                onChange={handleCategoryChange}
                options={categoriesOptionsData}
                loading={loadingCategories}
                style={{ width: '320px' }}
            />
            <Select
                value={selectedType}
                suffixIcon={<VscTypeHierarchySub />}
                showSearch
                placeholder="Select a Type"
                optionFilterProp="label"
                onChange={handleTypeChange}
                onSelect={handleTypeChange}
                options={typeOptionsData}
                loading={loadingTypes}
                style={{ width: '320px' }}
            />
        </Space >
    );
};

export default CategoryFilter;
