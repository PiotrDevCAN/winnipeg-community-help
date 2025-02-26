class APIService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async makeRequest(endpoint, options = {}, accessToken) {
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      // reads the response body and parses it as JSON
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error in API request:", error);
      throw error;
    }
  }
}

export default APIService;
