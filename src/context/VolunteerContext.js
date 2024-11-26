import React, { createContext, useContext, useState, useEffect } from 'react';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import ErrorPlaceholder from '../components/ErrorPlaceholder';
import EmptyPlaceholder from '../components/EmptyPlaceholder';

import { useRouteContext } from '../context/RouteContext';
// import { useStaticHelpDataContext } from '../context/StaticHelpDataContext';
import { useStaticCommunityContext } from '../context/StaticCommunityContext';
import { useAPIAuth } from '../context/APIAuthContext';
import APIService from '../services/APIService';

const VolunteerContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiService = new APIService(API_BASE_URL);

export const useVolunteerContext = () => useContext(VolunteerContext);

export const VolunteerProvider = ({ children }) => {
    const { getAccessToken } = useAPIAuth();

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setPageSize] = useState(9);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { newVolunteer: handleNewItem } = useRouteContext();
    const { selectedCommunity: communityId, selectedSubCommunity: subCommunityId } = useStaticCommunityContext();

    let filteredItems = data;

    if (communityId !== null) {
        filteredItems = data.filter(item => item.community === communityId);
    }
    if (subCommunityId !== null) {
        filteredItems = data.filter(item => item.subCommunity === subCommunityId);
    }

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const fetchData = async () => {
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
                console.log('Pagination Info:', response.pagination);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError(err.message || 'An error occurred while fetching data');
        } finally {
            setLoading(false);
        }
    };

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

    useEffect(() => {
        fetchData();
    }, [getAccessToken]);

    // If still loading, return a loading state
    const loadingMsg = 'Loading volunteers data...';
    if (loading) return <LoadingPlaceholder message={loadingMsg} />

    // If there is an error, display it
    if (error) return <ErrorPlaceholder error={error} />

    // If data has not been fetched (null or empty), return a message
    if (!data || data.length === 0) return <EmptyPlaceholder newItem={handleNewItem} />

    return (
        <VolunteerContext.Provider value={{
            data,
            setData,
            filteredItems,
            currentItems,
            itemsPerPage,
            setPageSize,
            currentPage,
            paginate,
            createItem,
            updateItem,
            deleteItem,
        }}>
            {children}
        </VolunteerContext.Provider >
    );
}

export default VolunteerContext;