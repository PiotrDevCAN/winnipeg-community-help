import React, { createContext, useContext, useState } from 'react';

const PageHeaderContext = createContext();

export const usePageHeaderContext = () => useContext(PageHeaderContext);

export const PageHeaderProvider = ({ children }) => {

    const [component1, setComponent1] = useState(null);
    const [component2, setComponent2] = useState(null);
    const [component3, setComponent3] = useState(null);
    const [component4, setComponent4] = useState(null);
    const [component5, setComponent5] = useState(null);

    const value = {
        component1,
        component2,
        component3,
        component4,
        component5,
        setComponent1,
        setComponent2,
        setComponent3,
        setComponent4,
        setComponent5
    };

    return (
        <PageHeaderContext.Provider value={value}>
            {children}
        </PageHeaderContext.Provider>
    );
}

export default PageHeaderContext;