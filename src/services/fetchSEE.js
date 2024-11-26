import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const useFetchData = (url, getAccessToken) => {
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
                const response = await apiService.makeRequest(url, {}, accessToken);

                if (response.status === 'success') {
                    setState({ data: response.data || [], loading: false, error: null });
                } else {
                    setState({ data: [], loading: false, error: response.message });
                }
            } catch (err) {
                setState({ data: [], loading: false, error: err.message });
            }
        };

        fetchData();
    }, [url, getAccessToken]);

    return state;
};