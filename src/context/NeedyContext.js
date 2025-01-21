import React, { createContext, useContext, useState, useCallback } from 'react';
import { useAPIAuth } from '@/context/APIAuthContext';
import APIService from '@/services/APIService';
// import { useAuthContext } from '@/context/AuthContext';

const NeedyContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

export const useNeedyContext = () => useContext(NeedyContext);

export const NeedyProvider = ({ children }) => {
    const { isReady, getAccessToken } = useAPIAuth();

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

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let filteredItems = data;

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    // const { user } = useAuthContext();
    const user = null;

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

    const getItem = useCallback(async (id) => {
        if (isReady) {
            try {
                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/needy/${id}/`, {
                    method: 'GET',
                }, accessToken);

                if (response.status === 'success') {
                    const result = response.data
                    setItem(result);
                } else {
                    console.error(response.message || 'Failed to fetch item');
                    setError(response.message);
                }
            } catch (err) {
                console.error('Error fetching item:', err);
                setError(err.message || 'An error occurred while fetching an item');
            }
        }
    }, [isReady, getAccessToken]);

    const getItemByFirebaseId = useCallback(async (firebaseId) => {
        if (isReady) {
            try {
                const accessToken = await getAccessToken();

                const response = await apiService.makeRequest(`/needy/firebase/${firebaseId}/`, {
                    method: 'GET',
                }, accessToken);

                if (response.status === 'success') {
                    const result = response.data
                    setItem(result);
                    // return result;
                } else {
                    console.error(response.message || 'Failed to fetch item');
                    setError(response.message);
                }
            } catch (err) {
                console.error('Error fetching item:', err);
                setError(err.message || 'An error occurred while fetching an item');
            }
        }
    }, [isReady, getAccessToken]);

    const createItem = async (newItem) => {
        try {
            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest('/needy/', {
                method: 'POST',
                body: JSON.stringify(newItem),
            }, accessToken);

            if (response.status === 'success') {
                setData(prevData => [...prevData, response.data]);
            } else {
                console.error(response.message || 'Failed to create item');
                setError(response.message);
            }
        } catch (err) {
            console.error('Error creating item:', err);
            setError(err.message || 'An error occurred while creating an item');
        }
    };

    const updateItem = async (id, updatedData) => {
        try {
            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest(`/needy/${id}/`, {
                method: 'PUT',
                body: JSON.stringify(updatedData),
            }, accessToken);

            if (response.status === 'success') {
                setData(prevData => prevData.map(item => (item.id === id ? response.data : item)));
            } else {
                console.error(response.message || 'Failed to update item');
                setError(response.message);
            }
        } catch (err) {
            console.error('Error updating item:', err);
            setError(err.message || 'An error occurred while updating an item');
        }
    };

    const deleteItem = async (id) => {
        try {
            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest(`/needy/${id}/`, {
                method: 'DELETE',
            }, accessToken);

            if (response.status === 'success') {
                setData(prevData => prevData.filter(item => item.id !== id));
            } else {
                console.error(response.message || 'Failed to delete item');
                setError(response.message);
            }
        } catch (err) {
            console.error('Error deleting item:', err);
            setError(err.message || 'An error occurred while deleting an item');
        }
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

    const value = {
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
        getItemByFirebaseId,
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
    };

    return (
        <NeedyContext.Provider value={value}>
            {children}
        </NeedyContext.Provider >
    );
}

export default NeedyContext;