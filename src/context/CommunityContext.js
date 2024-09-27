import React, { createContext, useContext, useState } from 'react';
import listData from '../data/communitiesData';

// 1. Create a Context
const CommunityContext = createContext();

// 4. Optional use context
export const useCommunityContext = () => useContext(CommunityContext);

export function CommunityProvider({ children }) {
    const [data, setData] = useState(listData);

    return (
        // 2. Provide the Context Value
        <CommunityContext.Provider value={{ data, setData }}>
            {children}
        </CommunityContext.Provider>
    );
}

export default CommunityContext;