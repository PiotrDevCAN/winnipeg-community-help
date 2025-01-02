import React, { createContext, useContext } from 'react';
import { useStaticHelpDataContext } from '@/context/StaticHelpDataContext';

const HelpCategoryContext = createContext();

export const useHelpCategoryContext = () => useContext(HelpCategoryContext);

export const HelpCategoryProvider = ({ children }) => {
    const { categoriesData: data, fetchCategoryData: fetchData, loading, error } = useStaticHelpDataContext();

    const currentItems = data;
    const value = {
        data,
        currentItems,
        fetchData,
        loading,
        error,
    };

    return (
        <HelpCategoryContext.Provider value={value}>
            {children}
        </HelpCategoryContext.Provider >
    );
};

export default HelpCategoryContext;