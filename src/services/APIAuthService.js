// import jwtDecode from 'jwt-decode';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Get the stored access token
export const getAccessToken = () => {
    return localStorage.getItem('access_token'); // or HTTP-only cookies
};

// Set the new access token
export const setAccessToken = (token) => {
    localStorage.setItem('access_token', token); // Store in localStorage or cookies
};

export const removeRefreshToken = () => {
    localStorage.removeItem('access_token');
}

// Get refresh token
export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token'); // or HTTP-only cookies
};

// Set refresh token
export const setRefreshToken = (token) => {
    localStorage.setItem('refresh_token', token); // Store securely (cookies recommended)
};

export const removeAccessToken = () => {
    localStorage.removeItem('refresh_token');    
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
        // const decoded = jwtDecode(token);
        // const currentTime = Math.floor(Date.now() / 1000);
        // return decoded.exp < currentTime;

        if (!token) return true;
        const { exp } = JSON.parse(atob(token.split('.')[1])); // Decode JWT to get expiry time
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        return exp < currentTime;
    },
};
