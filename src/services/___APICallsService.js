// import { authenticate, refreshAccessToken } from './___oAuthService';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

let accessToken = null;
let refreshToken = null;


const ensureValidToken = async () => {
    try {
        const token = await refreshAccessToken();
        return token;
    } catch (error) {
        throw new Error('Unable to refresh token');
    }
};

export const apiCallWithAuth = async (url, options) => {
    await ensureValidToken(); // Ensure token is valid
    return apiCall(url, options); // Call your API wrapper
};



const fetchWithToken = async (url, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (response.status === 401 && response.statusText === 'Token expired') {
        const newToken = await refreshAccessToken(refreshToken);
        options.headers = { ...options.headers, Authorization: `Bearer ${newToken}` };
        return fetch(`${API_BASE_URL}${url}`, options);
    }

    return response;
};

// Fetch wrapper to handle authentication
export const apiCall = async (url, options = {}) => {
    if (!accessToken) {
        throw new Error('No access token available. Please log in.');
    }

    const response = await fetchWithToken(url, options = {});
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'API call failed');
    }

    return response.json();
};
