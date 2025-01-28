import React, { createContext, useMemo } from 'react';
import { useStaticHelpDataContext } from '@/context/static/StaticHelpDataContext';
import useCustomContext from '@/customHooks/useCustomContext';

const HelpCategoryContext = createContext();
HelpCategoryContext.displayName = 'HelpCategory';

export const useHelpCategoryContext = () => useCustomContext(HelpCategoryContext);

export const HelpCategoryProvider = ({ children }) => {
    const { categoriesData: data, loading, error } = useStaticHelpDataContext();

    const currentItems = data;
    const contextValue = useMemo(() => ({
        data,
        currentItems,
        loading,
        error,
    }), [data, loading, error]);

    return (
        <HelpCategoryContext.Provider value={contextValue}>
            {children}
        </HelpCategoryContext.Provider >
    );
};

export default HelpCategoryContext;