import { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage } from '@/services/localStorageHelpers';

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

// Get the stored access token
export const getAccessToken = () => {
    return getFromLocalStorage('access_token'); // or HTTP-only cookies
    // return false;
};

// Set the new access token
export const setAccessToken = (token) => {
    saveToLocalStorage('access_token', token); // Store in localStorage or cookies
};

export const removeRefreshToken = () => {
    removeFromLocalStorage('access_token');
}

// Get refresh token
export const getRefreshToken = () => {
    return getFromLocalStorage('refresh_token'); // or HTTP-only cookies
};

// Set refresh token
export const setRefreshToken = (token) => {
    saveToLocalStorage('refresh_token', token); // Store securely (cookies recommended)
};

export const removeAccessToken = () => {
    removeFromLocalStorage('refresh_token');
};

export const APIAuthService = {
    async login(username, password) {
        const response = await fetch(`${API_BASE_URL}/auth/authenticate-oauth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed APIAuthService');
        }

        return await response.json(); // { accessToken, refreshToken }
    },

    async logout() {
        // Optional: notify the server about the logout
        await fetch(`${API_BASE_URL}/auth/logout-oauth`, { method: 'POST' });
    },

    async refreshToken(refreshToken) {
        const response = await fetch(`${API_BASE_URL}/auth/refresh-token-oauth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken }),
        });

        if (!response.ok) {
            throw new Error('Token refresh failed');
        }

        const { accessToken } = await response.json();
        return accessToken;
    },

    isTokenExpired(token) {
        if (!token) return true;
        const { exp } = JSON.parse(atob(token.split('.')[1])); // Decode JWT to get expiry time
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        return exp < currentTime;
    },
};
