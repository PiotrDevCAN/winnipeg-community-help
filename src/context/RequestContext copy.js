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
        filteredItems = data.filter(item => item.category === catId);
    }
    if (typeId !== null) {
        filteredItems = data.filter(item => item.type === typeId);
    }

    if (communityId !== null) {
        filteredItems = data.filter(item => item.community === communityId);
    }
    if (subCommunityId !== null) {
        filteredItems = data.filter(item => item.subCommunity === subCommunityId);
    }

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = await getAccessToken();

                const response = await apiService.makeRequest('/community/', {}, accessToken);

                if (response.status === 'success') {
                    if (response.data) {
                        setData(response.data);
                    } else {
                        console.log('No data returned.');
                    }
                } else {
                    console.error(response.message || 'Unknown error occurred');
                    setError(response.message);
                }

                if (response.pagination) {
                    console.log('Pagination Info:', response.pagination);
                }

                setLoading(false);

            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message || 'An error occurred while fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [getAccessToken]);

    // If still loading, return a loading state
    const loadingMsg = 'Loading help requests data...';
    if (loading) return <LoadingPlaceholder message={loadingMsg} />

    // If there is an error, display it
    if (error) return <ErrorPlaceholder error={error} />

    // If data has not been fetched (null or empty), return a message
    if (!data || data.length === 0) return <EmptyPlaceholder newItem={handleNewItem} />

    return (
        <RequestContext.Provider value={{ data, setData, filteredItems, currentItems, itemsPerPage, setPageSize, currentPage, paginate }}>
            {children}
        </RequestContext.Provider >
    );
}

export default RequestContext;