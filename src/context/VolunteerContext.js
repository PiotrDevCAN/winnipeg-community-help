import React, { createContext, useContext, useState, useCallback } from 'react';
import { useStaticCommunityContext } from '@/context/StaticCommunityContext';
import { useAPIAuth } from '@/context/APIAuthContext';
import APIService from '@/services/APIService';

const VolunteerContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

export const useVolunteerContext = () => useContext(VolunteerContext);

export const VolunteerProvider = ({ children }) => {
    const { isReady, getAccessToken } = useAPIAuth();

    const [selectedVolunteer, setSelectedVolunteer] = useState(null);

    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setPageSize] = useState(9);

    const [numberOfVolunteers, setNumberOfVolunteers] = useState(0);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { selectedCommunityId: communityId, selectedSubCommunityId: subCommunityId } = useStaticCommunityContext();

    let filteredItems = data;

    if (communityId !== null) {
        filteredItems = data.filter(item => item.community === communityId);
    }
    if (subCommunityId !== null) {
        filteredItems = data.filter(item => item.sub_community_id === subCommunityId);
    }

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const fetchData = useCallback(async () => {
        if (isReady) {
            try {
                setLoading(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest('/volunteer/', {}, accessToken);

                if (response.status === 'success') {
                    setData(response.data || []);
                } else {
                    console.error(response.message || 'Unknown error occurred');
                    setError(response.message);
                }

                if (response.pagination) {
                    // console.log('Pagination Info - volunteers:', response.pagination);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message || 'An error occurred while fetching data');
            } finally {
                setLoading(false);
            }
        };
    }, [isReady]);

    const getVolunteer = (id) => {
        const volunteerId = parseInt(id);
        const volunteer = data.find(item => item.id === volunteerId);
        return volunteer;
    };

    const getItem = useCallback(async (id) => {
        if (isReady) {
            try {
                setLoading(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/volunteer/${id}/`, {
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
            } finally {
                setLoading(false);
            }
        }
    }, [isReady]);

    const createItem = async (newItem) => {
        try {
            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest('/volunteer/', {
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
            const response = await apiService.makeRequest(`/volunteer/${id}/`, {
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
            const response = await apiService.makeRequest(`/volunteer/${id}/`, {
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
        // try {
        // const accessToken = await getAccessToken();
        // const response = await apiService.makeRequest(`/volunteer/${id}/offers`, {
        //     method: 'GET',
        // }, accessToken);

        // if (response.status === 'success') {
        //     const result = response.data
        //     // setTypeData(result);
        //     return result;
        // } else {
        //     console.error(response.message || 'Failed to fetch item');
        //     setError(response.message);
        // }
        return id;
        // } catch (err) {
        //     console.error('Error fetching item:', err);
        //     setError(err.message || 'An error occurred while fetching an item');
        // }
    }, []);

    const getRequestsNumber = useCallback(async (id) => {
        // try {
        // const accessToken = await getAccessToken();
        // const response = await apiService.makeRequest(`/volunteer/${id}/requests`, {
        //     method: 'GET',
        // }, accessToken);

        // if (response.status === 'success') {
        //     const result = response.data
        //     // setTypeData(result);
        //     return result;
        // } else {
        //     console.error(response.message || 'Failed to fetch item');
        //     setError(response.message);
        // }
        return id;
        // } catch (err) {
        //     console.error('Error fetching item:', err);
        //     setError(err.message || 'An error occurred while fetching an item');
        // }
    }, []);

    const getVolunteersInCommunityNumber = useCallback(async (id) => {
        if (isReady) {
            try {
                setLoading(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/volunteer/list/community/${id}/`, {}, accessToken);

                if (response.status === 'success') {
                    setNumberOfVolunteers(response.data.amount || 0);
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
    }, [isReady]);

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
        getVolunteer,
        createItem,
        updateItem,
        deleteItem,
        getOffersNumber,
        getRequestsNumber,
        getVolunteersInCommunityNumber,
        numberOfVolunteers,
        selectedVolunteer, setSelectedVolunteer,
        loading,
        error,
    };

    return (
        <VolunteerContext.Provider value={value}>
            {children}
        </VolunteerContext.Provider >
    );
};

export default VolunteerContext;