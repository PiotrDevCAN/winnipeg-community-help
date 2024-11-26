import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import ErrorPlaceholder from '../components/ErrorPlaceholder';
import EmptyPlaceholder from '../components/EmptyPlaceholder';

import { useRouteContext } from '../context/RouteContext';
import { useStaticCommunityContext } from '../context/StaticCommunityContext';
import { useAPIAuth } from '../context/APIAuthContext';
import APIService from '../services/APIService';

const CommunityContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiService = new APIService(API_BASE_URL);

export const useCommunityContext = () => useContext(CommunityContext);

export const CommunityProvider = ({ children }) => {
    const { getAccessToken } = useAPIAuth();

    const [communityState, setCommunityState] = useState({
        data: [],
        loading: false,
        error: null,
        currentPage: 1,
        itemsPerPage: 9,
        pagination: null,
    });

    const { newCommunity: handleNewItem } = useRouteContext();
    const { selectedCommunity: communityId, selectedSubCommunity: subCommunityId } = useStaticCommunityContext();

    const fetchData = useCallback(async () => {
        setCommunityState(prev => ({ ...prev, loading: true }));
        try {
            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest('/volunteer/', {}, accessToken);
            if (response.status === 'success') {
                setCommunityState(prev => ({
                    ...prev,
                    data: response.data || [],
                    loading: false,
                    error: null,
                    pagination: response.pagination || null,
                }));
            } else {
                setCommunityState(prev => ({ ...prev, error: response.message, loading: false }));
            }
        } catch (err) {
            setCommunityState(prev => ({ ...prev, error: err.message, loading: false }));
        }
    }, [getAccessToken]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const filteredItems = useMemo(() => {
        return communityState.data.filter(item =>
            (!communityId || item.community === communityId) &&
            (!subCommunityId || item.subCommunity === subCommunityId)
        );
    }, [communityState.data, communityId, subCommunityId]);

    const startIndex = (communityState.currentPage - 1) * communityState.itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, startIndex + communityState.itemsPerPage);

    const paginate = pageNumber => setCommunityState(prev => ({ ...prev, currentPage: pageNumber }));
    const setItemsPerPage = items => setCommunityState(prev => ({ ...prev, itemsPerPage: items }));

    if (communityState.loading) {
        return <LoadingPlaceholder message="Loading communities data..." />;
    }

    if (communityState.error) {
        return <ErrorPlaceholder error={communityState.error} retry={fetchData} />;
    }

    if (communityState.data.length === 0) {
        return <EmptyPlaceholder newItem={handleNewItem} message="No communities available." retry={fetchData} />;
    }

    return (
        <CommunityContext.Provider value={{ ...communityState, currentItems, filteredItems, paginate, setItemsPerPage }}>
            {children}
        </CommunityContext.Provider>
    );
};

export default CommunityContext;
