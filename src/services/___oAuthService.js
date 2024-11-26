const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// const appUser = process.env.REACT_APP_API_USER;
// const appPassword = process.env.REACT_APP_API_PASSWORD;

// Check if access token is expired
export const isTokenExpired = (token) => {
    if (!token) return true;
    const { exp } = JSON.parse(atob(token.split('.')[1])); // Decode JWT to get expiry time
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return exp < currentTime;
};

// Get the stored access token
export const getAccessToken = () => {
    return localStorage.getItem('access_token'); // or HTTP-only cookies
};

// Set the new access token
export const setAccessToken = (token) => {
    localStorage.setItem('access_token', token); // Store in localStorage or cookies
};

// Get refresh token
export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token'); // or HTTP-only cookies
};

// Set refresh token
export const setRefreshToken = (token) => {
    localStorage.setItem('refresh_token', token); // Store securely (cookies recommended)
};

// Refresh the access token
export const refreshAccessToken = async () => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) throw new Error('No refresh token available');

    const response = await fetch(`${API_BASE_URL}/auth/refresh-token-oauth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken: refreshToken }),
    });

    if (!response.ok) {
        throw new Error('Failed to refresh token');
    }

    const data = await response.json();
    const newAccessToken = data.access_token;
    setAccessToken(newAccessToken); // Update the access token
    return newAccessToken;
};

// Perform API call with token validation and refresh
export const fetchWithAuth = async (url, options = {}) => {
    const accessToken = getAccessToken();

    if (!accessToken || isTokenExpired(accessToken)) {
        try {
            // Refresh the token if expired
            await refreshAccessToken();
        } catch (error) {
            throw new Error('Authentication failed. Please log in again.');
        }
    }

    // Make the API call with the valid (or refreshed) access token
    const response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`, // Include the valid token in the header
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json(); // Return the parsed response
};

// Authenticate to get tokens
// const authenticate = async (username, password) => {
//     const response = await fetch(`${API_BASE_URL}/auth/authenticate-oauth`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//     });

//     if (!response.ok) {
//         throw new Error('Login failed');
//     }

//     const data = await response.json();
//     accessToken = data.accessToken;
//     refreshToken = data.refreshToken;

//     return data;
// };


// const ensureValidToken = async () => {
//     try {
//         const token = await refreshAccessToken(refreshToken);
//         return token;
//     } catch (error) {
//         throw new Error('Unable to refresh token');
//     }
// };


// const ensureAuthenticated = async () => {
//     try {
//         await authenticate('piotr', 'secret123'); // Replace with logic to auto-fetch credentials
//         console.log('User authenticated successfully');
//     } catch (error) {
//         console.error('Authentication failed:', error.message);
//     }
// };

// export { authenticate, refreshAccessToken };