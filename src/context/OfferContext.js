import React, { createContext, useContext, useState } from 'react';
import listData from '../data/helpOffersData';

const OfferContext = createContext();

export const useOfferContext = () => useContext(OfferContext);

export function OfferProvider({ children }) {
    const [data, setData] = useState(listData);

    return (
        <OfferContext.Provider value={{ data, setData }}>
            {children}
        </OfferContext.Provider>
    );
}