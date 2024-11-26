import React, { createContext, useContext, useState } from 'react';
import categories from '../data/helpCategoriesData';
import types from '../data/helpTypesData';

const StaticHelpDataContext = createContext();

export const useStaticHelpDataContext = () => useContext(StaticHelpDataContext);

export const StaticHelpProvider = ({ children }) => {

    const [categoriesData, setCategoriesData] = useState(categories);
    const [typesData, setTypesData] = useState(types);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [typeOptions, setTypeOptions] = useState([]);

    const [loadingCategories, setLoadingCategories] = useState(false);
    const [loadingTypes, setLoadingTypes] = useState(false);

    const getCategory = (id) => {
        const category = categoriesData.find(item => item.id === id);
        return category;
    }

    const getType = (id) => {
        const type = typesData.find(item => item.id === id);
        return type;
    }

    const getTypes = (id) => {
        const result = typesData.filter(item => item.categoryId === id);
        return result;
    }

    const countTypes = (id) => {
        const result = getTypes(id);
        return result.length;
    }

    return (
        <StaticHelpDataContext.Provider value={{
            categoriesData, setCategoriesData,
            typesData, setTypesData,
            selectedCategory, setSelectedCategory,
            selectedType, setSelectedType,
            typeOptions, setTypeOptions,
            getCategory,
            getType,
            getTypes,
            countTypes,
            loadingCategories, 
            loadingTypes,
        }}>
            {children}
        </StaticHelpDataContext.Provider>
    );
}