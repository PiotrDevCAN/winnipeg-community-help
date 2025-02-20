import React, { createContext, useState, useEffect, useMemo } from 'react';
import {
    APIAuthService,
    getAccessToken as getAccessTokenService,
    setAccessToken as setAccessTokenService,
    removeAccessToken as removeAccessTokenService,
    getRefreshToken as getRefreshTokenService,
    setRefreshToken as setRefreshTokenService,
    removeRefreshToken as removeRefreshTokenService,
} from '@/services/APIAuthService';
import useCustomContext from '@/customHooks/useCustomContext';

const appUser = import.meta.env.VITE_APP_API_USER;
const appPassword = import.meta.env.VITE_APP_API_PASSWORD;

export const APIAuthContext = createContext();
APIAuthContext.displayName = 'API Auth';

export const useAPIAuthContext = () => useCustomContext(APIAuthContext);

export const APIAuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(getAccessTokenService());
    const [refreshToken, setRefreshToken] = useState(getRefreshTokenService());
    const [isReady, setIsReady] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Centralized error handling
    const handleError = (action, error) => {
        console.error(`Error during ${action}:`, error.message || error);
        setError(`${action} failed. Please try again.`);
    };

    // Login function
    const login = async (username, password) => {
        setLoading(true);
        setError(null);
        try {
            const { accessToken, refreshToken } = await APIAuthService.login(username, password);
            setAccessToken(accessToken);
            setAccessTokenService(accessToken);
            setRefreshToken(refreshToken);
            setRefreshTokenService(refreshToken);
            return true;
        } catch (error) {
            handleError('Login', error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Logout function
    const logout = async () => {
        setLoading(true);
        setError(null);
        try {
            await APIAuthService.logout();
            setAccessToken(null);
            removeAccessTokenService();
            setRefreshToken(null);
            removeRefreshTokenService();
            return true;
        } catch (error) {
            handleError('Logout', error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Refresh token handler
    const refreshTokenHandler = async () => {
        if (!refreshToken) {
            handleError('Refresh Token', new Error('No refresh token available.'));
            return false;
        }
        setLoading(true);
        setError(null);
        try {
            const newAccessToken = await APIAuthService.refreshToken(refreshToken);
            setAccessToken(newAccessToken);
            setAccessTokenService(newAccessToken);
            return true;
        } catch (error) {
            handleError('Refresh Token', error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Get access token with automatic refresh
    const getAccessToken = async () => {
        if (!accessToken || APIAuthService.isTokenExpired(accessToken)) {
            const success = await refreshTokenHandler();
            if (!success) return null;
        }
        return accessToken;
    };

    // Check if the user is authenticated
    const isAuthenticated = () => {
        return !!accessToken && !APIAuthService.isTokenExpired(accessToken);
    };

    // Automatically log in on initial load if no valid access token exists
    useEffect(() => {
        const loadData = async () => {
            if (!isAuthenticated()) {
                console.log('No valid access token found. Attempting auto-login...');
                // await login(appUser, appPassword);
                login(appUser, appPassword);
            }
            setIsReady(true);
        };
        loadData();
    }, []); // Empty dependency array ensures this runs only once on mount

    const contextValue = useMemo(() => ({
        login,
        logout,
        getAccessToken,
        isAuthenticated,
        loading,
        isReady,
        error,
    }), [login, logout, getAccessToken, isAuthenticated, loading, isReady, error]);

    return (
        <APIAuthContext.Provider value={contextValue}>
            {children}
        </APIAuthContext.Provider>
    );
};
