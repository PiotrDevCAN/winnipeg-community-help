import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    APIAuthService,
    getAccessToken as getAccessTokenService,
    setAccessToken as setAccessTokenService,
    removeAccessToken as removeAccessTokenService,
    getRefreshToken as getRefreshTokenService,
    setRefreshToken as setRefreshTokenService,
    removeRefreshToken as removeRefreshTokenService,
} from '../services/APIAuthService';

export const APIAuthContext = createContext();

const appUser = process.env.REACT_APP_API_USER;
const appPassword = process.env.REACT_APP_API_PASSWORD;

export const APIAuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(getAccessTokenService());
    const [refreshToken, setRefreshToken] = useState(getRefreshTokenService());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
            setError('Login failed');
            console.error(error);
            return false;
        } finally {
            setLoading(false);
        }
    };

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
            setError('Logout failed');
            console.error(error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const refreshTokenHandler = async () => {
        setLoading(true);
        setError(null);
        try {
            const newToken = await APIAuthService.refreshToken(refreshToken);
            setAccessToken(newToken);
            setAccessTokenService(newToken);
            return true;
        } catch (error) {
            setError('Refresh Token failed');
            console.error(error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const getAccessToken = async () => {
        if (!accessToken) return null;
        if (APIAuthService.isTokenExpired(accessToken)) {
            await refreshTokenHandler();
        }
        return accessToken;
    };

    // const isAuthenticated = () => !!accessToken;

    // Check if the user is authenticated (valid access token)
    const isAuthenticated = () => {
        return accessToken && !APIAuthService.isTokenExpired(accessToken);
    };

    // Check for accessToken on initial load
    useEffect(() => {
        if (!isAuthenticated()) {
            console.log('No access token, need to log in');
            // Optionally, show login page or initiate login process
            login(appUser, appPassword);
        } else {
            console.log('Access token exists, no need to log in again');
        }
    }, [isAuthenticated]);

    return (
        <APIAuthContext.Provider
            value={{
                login,
                logout,
                getAccessToken,
                isAuthenticated,
                error,
                loading,
            }}>
            {children}
        </APIAuthContext.Provider>
    );
};

// export default APIAuthProvider;
// Custom hook to use auth context in components
export const useAPIAuth = () => useContext(APIAuthContext);
