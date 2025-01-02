import React, { createContext, useContext } from 'react';
import { useStaticHelpDataContext } from '@/context/StaticHelpDataContext';

const HelpTypeContext = createContext();

export const useHelpTypeContext = () => useContext(HelpTypeContext);

export const HelpTypeProvider = ({ children }) => {
    const { typesData: data, fetchTypeData: fetchData, loading, error } = useStaticHelpDataContext();

    const currentItems = data;
    const value = {
        data,
        currentItems,
        fetchData,
        loading,
        error,
    };

    return (
        <HelpTypeContext.Provider value={value}>
            {children}
        </HelpTypeContext.Provider >
    );
};

export default HelpTypeContext;