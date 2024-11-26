// import React, { createContext, useState, useEffect } from 'react';
// import { authenticate, getAccessToken, refreshAccessToken } from '../services/oAuthService';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAccessToken, getRefreshToken, refreshAccessToken, setAccessToken, setRefreshToken } from './oAuthService';

export const APIAuthContext = createContext();

const appUser = process.env.REACT_APP_API_USER;
const appPassword = process.env.REACT_APP_API_PASSWORD;

const APIAuthProvider = ({ children }) => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccess] = useState(getAccessToken());
    const [refreshToken, setRefresh] = useState(getRefreshToken());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const initializeAuth = async () => {
        try {
            const token = await getAccessToken();
            if (token) {
                // setIsAuthenticated(true);
                // Optionally, set user details here if token contains user info
            }

            await authenticate(appUser, appPassword); // Replace with your login logic
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Authentication failed:', error.message);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        initializeAuth();
    }, []);

    return (
        <APIAuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </APIAuthContext.Provider>
    );
};

export default APIAuthProvider;
