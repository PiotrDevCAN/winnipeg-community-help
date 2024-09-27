import React, { createContext, useContext, useState } from 'react';
import listData from '../data/helpRequestsData';

const RequestContext = createContext();

export const useRequestContext = () => useContext(RequestContext);

export function RequestProvider({ children }) {
    const [data, setData] = useState(listData);

    return (
        <RequestContext.Provider value={{ data, setData }}>
            {children}
        </RequestContext.Provider>
    );
}