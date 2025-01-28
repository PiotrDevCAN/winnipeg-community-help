import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import { useAPIAuth } from '@/context/auth/APIAuthContext';
import APIService from '@/services/APIService';
import { useCrudCalls } from '@/customHooks/useCrudCalls';
import useCustomContext from '@/customHooks/useCustomContext';
// import { useAuthContext } from '@/context/AuthContext';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

const NeedyContext = createContext();
NeedyContext.displayName = 'Needy';

export const useNeedyContext = () => useCustomContext(NeedyContext);

export const NeedyProvider = ({ children }) => {
    const { isReady, getAccessToken } = useAPIAuth();
    const { createRecord, readRecord, updateRecord, deleteRecord } = useCrudCalls();

    const [selectedUser, setSelectedUser] = useState(null);

    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setPageSize] = useState(9);

    const [numberOfRequests, setNumberOfRequests] = useState(0);
    const [numberOfOffers, setNumberOfOffers] = useState(0);
    const [numberOfUsers, setNumberOfUsers] = useState(0);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    let filteredItems = data;

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const fetchData = useCallback(async () => {
        if (isReady) {
            try {
                setLoading(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest('/needy/', {}, accessToken);

                if (response.status === 'success') {
                    setData(response.data || []);
                } else {
                    console.error(response.message || 'Unknown error occurred');
                    setError(response.message);
                }

                if (response.pagination) {
                    // console.log('Pagination Info - users:', response.pagination);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message || 'An error occurred while fetching data');
            } finally {
                setLoading(false);
            }
        };
    }, [isReady, getAccessToken]);

    const getUser = (id) => {
        const userId = parseInt(id);
        const user = data.find(item => item.id === userId);
        return user;
    };

    const getItem = (id) => {
        readRecord('needy', id, setItem, setLoading, setError);
    };
    const createItem = (newItem) => {
        createRecord('needy', newItem);
    };
    const updateItem = (updatedData) => {
        updateRecord('needy', updatedData);
    };
    const deleteItem = (id) => {
        deleteRecord('needy', id);
    };

    const getOffersNumber = useCallback(async (id) => {
        if (isReady) {
            try {
                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/needy/${id}/offers`, {
                    method: 'GET',
                }, accessToken);

                if (response.status === 'success') {
                    setNumberOfOffers(response.data.amount || 0);
                } else {
                    console.error(response.message || 'Failed to fetch item');
                    setError(response.message);
                }
            } catch (err) {
                console.error('Error fetching item:', err);
                setError(err.message || 'An error occurred while fetching an item');
            }
        };
    }, [isReady, getAccessToken]);

    const getRequestsNumber = useCallback(async (id) => {
        if (isReady) {
            try {
                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/needy/${id}/requests`, {
                    method: 'GET',
                }, accessToken);

                if (response.status === 'success') {
                    setNumberOfRequests(response.data.amount || 0);
                } else {
                    console.error(response.message || 'Failed to fetch item');
                    setError(response.message);
                }
            } catch (err) {
                console.error('Error fetching item:', err);
                setError(err.message || 'An error occurred while fetching an item');
            }
        };
    }, [isReady, getAccessToken]);

    const getUsersInCommunityNumber = useCallback(async (id) => {
        if (isReady) {
            try {
                setLoading(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/needy/list/community/${id}/`, {}, accessToken);

                if (response.status === 'success') {
                    setNumberOfUsers(response.data.amount || 0);
                } else {
                    console.error(response.message || 'Unknown error occurred');
                    setError(response.message);
                }

                if (response.pagination) {
                    // console.log('Pagination Info - users:', response.pagination);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message || 'An error occurred while fetching data');
            } finally {
                setLoading(false);
            }
        };
    }, [isReady, getAccessToken]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const contextValue = useMemo(() => ({
        data,
        setData,
        fetchData,
        filteredItems,
        currentItems,
        itemsPerPage,
        setPageSize,
        currentPage,
        paginate,
        item,
        getItem,
        getUser,
        createItem,
        updateItem,
        deleteItem,
        getRequestsNumber,
        getOffersNumber,
        getUsersInCommunityNumber,
        numberOfOffers,
        numberOfRequests,
        numberOfUsers,
        selectedUser, setSelectedUser,
        loading,
        error,
    }), [data, fetchData, filteredItems, currentItems, itemsPerPage, currentPage, item, selectedUser, numberOfOffers, numberOfRequests, numberOfUsers, loading, error]);

    return (
        <NeedyContext.Provider value={contextValue}>
            {children}
        </NeedyContext.Provider >
    );
}

export default NeedyContext;