import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import { useAPIAuth } from '@/context/auth/APIAuthContext';
import APIService from '@/services/APIService';
import { useCrudCalls } from '@/customHooks/useCrudCalls';
import useCustomContext from '@/customHooks/useCustomContext';
// import { useAuthContext } from '@/context/AuthContext';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

const UserContext = createContext();
UserContext.displayName = 'User';

export const useUserContext = () => useCustomContext(UserContext);

export const UserProvider = ({ children }) => {
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
                const response = await apiService.makeRequest('/user/', {}, accessToken);

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
        readRecord('user', id, setItem, setLoading, setError);
    };
    const createItem = (newItem) => {
        createRecord('user', newItem);
    };
    const updateItem = (updatedData) => {
        updateRecord('user', updatedData);
    };
    const deleteItem = (id) => {
        deleteRecord('user', id);
    };

    const getItemByFirebaseId = useCallback(async (firebaseId) => {
        if (isReady) {
            try {
                const accessToken = await getAccessToken();

                const response = await apiService.makeRequest(`/user/firebase/${firebaseId}/`, {
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

    const getOffersNumber = useCallback(async (id) => {
        if (isReady) {
            try {
                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/user/${id}/offers`, {
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
                const response = await apiService.makeRequest(`/user/${id}/requests`, {
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
                const response = await apiService.makeRequest(`/user/list/community/${id}/`, {}, accessToken);

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
    }), [data, item, currentItems, itemsPerPage, currentPage, loading, error, selectedUser]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider >
    );
}

export default UserContext;