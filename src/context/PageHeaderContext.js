import React, { createContext, useContext, useState } from 'react';

const PageHeaderContext = createContext();

export const usePageHeaderContext = () => useContext(PageHeaderContext);

export const PageHeaderProvider = ({ children }) => {

    const [component1, setComponent1] = useState(null);
    const [component2, setComponent2] = useState(null);
    const [component3, setComponent3] = useState(null);

    return (
        <PageHeaderContext.Provider value={{ component1, setComponent1, component2, setComponent2, component3, setComponent3 }}>
            {children}
        </PageHeaderContext.Provider>
    );
}

export default PageHeaderContext;