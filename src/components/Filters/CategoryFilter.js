import React, { useState } from 'react';
import { Dropdown, Flex, message, Space, Button, Select, Row, Col } from 'antd';

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

    const updatedCategoriesData = categoriesData.map(item => {
        let value = item.id;
        return { ...item, value };
    });

    const updatedTypesData = typeOptions.map(item => {
        let value = item.id;
        return { ...item, value };
    });

    const categoriesOptionsData = SelectAllOption.concat(updatedCategoriesData);
    const typeOptionsData = SelectAllOption.concat(updatedTypesData);

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
        <Row gutter={16}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Select
                    value={selectedCategory}
                    suffixIcon={<TbCategory />}
                    showSearch
                    placeholder="Select a Category"
                    optionFilterProp="label"
                    onChange={handleCategoryChange}
                    options={categoriesOptionsData}
                    loading={loadingCategories}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
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
                    style={{ width: '100%' }}
                />
            </Col>
        </Row>
    );
};

export default CategoryFilter;
