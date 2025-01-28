import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import { useStaticCommunityContext } from '@/context/static/StaticCommunityContext';
import { useAPIAuth } from '@/context/auth/APIAuthContext';
import APIService from '@/services/APIService';
import { useCrudCalls } from '@/customHooks/useCrudCalls';
import useCustomContext from '@/customHooks/useCustomContext';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

const CommunityContext = createContext();
CommunityContext.displayName = 'Community';

export const useCommunityContext = () => useCustomContext(CommunityContext);

export const CommunityProvider = ({ children }) => {
    const { isReady, getAccessToken } = useAPIAuth();
    const { createRecord, readRecord, updateRecord, deleteRecord } = useCrudCalls();

    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setPageSize] = useState(9);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                const response = await apiService.makeRequest('/community/', {}, accessToken);

                if (response.status === 'success') {
                    setData(response.data || []);
                } else {
                    console.error(response.message || 'Unknown error occurred');
                    setError(response.message);
                }

                if (response.pagination) {
                    // console.log('Pagination Info - communities:', response.pagination);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message || 'An error occurred while fetching data');
            } finally {
                setLoading(false);
            }
        };
    }, [isReady, getAccessToken]);

    const getCommunity = (id) => {
        const communityId = parseInt(id);
        const community = data.find(item => item.id === communityId);
        return community;
    };

    const getItem = (id) => {
        readRecord('community', id, setItem, setLoading, setError);
    };
    const createItem = (newItem) => {
        createRecord('community', newItem);
    };
    const updateItem = (updatedData) => {
        updateRecord('community', updatedData);
    };
    const deleteItem = (id) => {
        deleteRecord('community', id);
    };

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
        getCommunity,
        createItem,
        updateItem,
        deleteItem,
        loading,
        error,
    }), [data, fetchData, filteredItems, currentItems, itemsPerPage, currentPage, item, loading, error]);

    return (
        <CommunityContext.Provider value={contextValue}>
            {children}
        </CommunityContext.Provider >
    );
};

export default CommunityContext;