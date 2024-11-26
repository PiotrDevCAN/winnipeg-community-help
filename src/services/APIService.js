class APIService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async makeRequest(endpoint, options = {}, accessToken) {
        const headers = {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                ...options,
                headers,
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error in API request:', error);
            throw error;
        }
    }
}

export default APIService;
