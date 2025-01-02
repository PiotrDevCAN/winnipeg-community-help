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

            // reads the response body and parses it as JSON
            const result = await response.json();
            if (result.status === "error") {
                throw new Error(result.error?.message || "Unknown error occurred");
            }
            return result;
        } catch (error) {
            console.error('Error in API request:', error);
            throw error;
        }
    }
}

export default APIService;
