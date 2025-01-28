import React, { createContext, useMemo } from 'react';
import { useStaticHelpDataContext } from '@/context/static/StaticHelpDataContext';
import useCustomContext from '@/customHooks/useCustomContext';

const HelpTypeContext = createContext();
HelpTypeContext.displayName = 'HelpType';

export const useHelpTypeContext = () => useCustomContext(HelpTypeContext);

export const HelpTypeProvider = ({ children }) => {
    const { typesData: data, loading, error } = useStaticHelpDataContext();

    const currentItems = data;
    const contextValue = useMemo(() => ({
        data,
        currentItems,
        loading,
        error,
    }), [data, loading, error]);

    return (
        <HelpTypeContext.Provider value={contextValue}>
            {children}
        </HelpTypeContext.Provider >
    );
};

export default HelpTypeContext;