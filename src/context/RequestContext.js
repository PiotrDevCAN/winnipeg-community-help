import React, { createContext, useContext, useState, useEffect } from 'react';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import ErrorPlaceholder from '../components/ErrorPlaceholder';
import EmptyPlaceholder from '../components/EmptyPlaceholder';

import { useRouteContext } from '../context/RouteContext';
import { useStaticHelpDataContext } from '../context/StaticHelpDataContext';
import { useStaticCommunityContext } from '../context/StaticCommunityContext';
import { useAPIAuth } from '../context/APIAuthContext';
import APIService from '../services/APIService';

const RequestContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

export const useRequestContext = () => useContext(RequestContext);

export const RequestProvider = ({ children }) => {
    const { getAccessToken } = useAPIAuth();

    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setPageSize] = useState(9);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { askForHelp: handleNewItem } = useRouteContext();
    const { selectedCategory: catId, selectedType: typeId } = useStaticHelpDataContext();
    const { selectedCommunity: communityId, selectedSubCommunity: subCommunityId } = useStaticCommunityContext();

    let filteredItems = data;

    if (catId !== null) {
        filteredItems = data.filter(item => item.category_id === catId);
    }
    if (typeId !== null) {
        filteredItems = data.filter(item => item.type_id === typeId);
    }

    if (communityId !== null) {
        filteredItems = data.filter(item => item.community_id === communityId);
    }
    if (subCommunityId !== null) {
        filteredItems = data.filter(item => item.sub_community_id === subCommunityId);
    }

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const fetchData = async () => {
        try {
            setLoading(true);

            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest('/request/', {}, accessToken);

            if (response.status === 'success') {
                setData(response.data || []);
            } else {
                console.error(response.message || 'Unknown error occurred');
                setError(response.message);
            }

            if (response.pagination) {
                // console.log('Pagination Info - requests:', response.pagination);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError(err.message || 'An error occurred while fetching data');
        } finally {
            setLoading(false);
        }
    };

    const getRequest = (id) => {
        const request = data.find(item => item.id === id);
        return request;
    };

    const getItem = async (id) => {
        try {
            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest(`/request/${id}/`, {
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
    };

    const createItem = async (newItem) => {
        try {
            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest('/request/', {
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
            const response = await apiService.makeRequest(`/request/${id}/`, {
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
            const response = await apiService.makeRequest(`/request/${id}/`, {
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
    const loadingMsg = 'Loading help requests data...';
    if (loading) return <LoadingPlaceholder message={loadingMsg} />

    // If there is an error, display it
    if (error) return <ErrorPlaceholder error={error} />

    // If data has not been fetched (null or empty), return a message
    if (!data || data.length === 0) return <EmptyPlaceholder newItem={handleNewItem} />;

    return (
        <RequestContext.Provider value={{
            data,
            setData,
            filteredItems,
            currentItems,
            itemsPerPage,
            setPageSize,
            currentPage,
            paginate,
            item,
            getItem,
            getRequest,
            createItem,
            updateItem,
            deleteItem,
        }}>
            {children}
        </RequestContext.Provider >
    );
};

export default RequestContext;