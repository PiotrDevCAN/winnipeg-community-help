import React, { createContext, useContext, useState } from 'react';
import listData from '../data/usersData';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
    const [data, setData] = useState(listData);

    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    );
}