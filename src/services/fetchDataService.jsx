import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const useFetchCommunityData = (getAccessToken, apiService) => {
    const [state, setState] = useState({
        data: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState(prev => ({ ...prev, loading: true }));

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest('/volunteer/', {}, accessToken);

                if (response.status === 'success') {
                    setState({ data: response.data, loading: false, error: null });
                } else {
                    setState({ data: [], loading: false, error: response.message || 'Unknown error occurred' });
                }
            } catch (err) {
                setState({ data: [], loading: false, error: err.message });
            }
        };

        fetchData();
    }, [getAccessToken]);

    return state;
};
