import React, { useEffect } from 'react';
import { Select, Row, Col } from 'antd';

import { TbCategory } from "react-icons/tb";
import { VscTypeHierarchySub } from "react-icons/vsc";

import { useStaticHelpDataContext } from '@/context/static/StaticHelpDataContext';
import SelectAllOption from '@/components/SelectAllOption';
import { prepareSelectData } from '@/services/prepareSelectData';

const CategoryFilter = ({ preSelectedId }) => {

    const {
        typesData,
        getTypes,
        selectedCategory, setSelectedCategory,
        selectedType, setSelectedType,
        categoryOptions,
        typeOptions, setTypeOptions,
        loadingCategories, loadingTypes,
        getParentIdById,
    } = useStaticHelpDataContext();

    const updatedCategoriesData = prepareSelectData(categoryOptions);
    const updatedTypesData = prepareSelectData(typeOptions);

    const categoriesOptionsData = SelectAllOption.concat(updatedCategoriesData);
    const typeOptionsData = SelectAllOption.concat(updatedTypesData);

    const updateCategory = (value) => {
        const categoryId = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedCategory(null);
            setSelectedType(null);
            setTypeOptions([]);
        } else {
            const tempTypes = getTypes(categoryId);
            setSelectedCategory(categoryId);
            setTypeOptions(tempTypes || []);
        }
    }

    const updateType = (value) => {
        const typeId = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedType(null);
        } else {
            setSelectedType(typeId);
        }
    }

    const handleCategoryChange = (value) => {
        updateCategory(value);
    };
    const handleTypeChange = (value) => {
        updateType(value);
    };
    const triggerTypeChange = async (newTypeId) => {
        if (newTypeId) {
            const typeId = parseInt(newTypeId);
            const categoryId = getParentIdById(typeId);
            setSelectedType(typeId);
            setSelectedCategory(typeId);
            handleCategoryChange(categoryId);
        }
    };

    useEffect(() => {
        triggerTypeChange(preSelectedId);
    }, [typesData]);

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
