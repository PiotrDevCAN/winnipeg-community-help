import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import { useStaticHelpDataContext } from '@/context/static/StaticHelpDataContext';
import { useStaticCommunityContext } from '@/context/static/StaticCommunityContext';
import { useUserContext } from '@/context/mainTypes/UserContext';
import { useVolunteerContext } from '@/context/mainTypes/VolunteerContext';
import { useAPIAuth } from '@/context/auth/APIAuthContext';
import APIService from '@/services/APIService';
import { useCrudCalls } from '@/customHooks/useCrudCalls';
import useCustomContext from '@/customHooks/useCustomContext';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

let RequestContext = createContext();
RequestContext.displayName = 'Request';

export const useRequestContext = () => useCustomContext(RequestContext);

export const RequestProvider = ({ children }) => {
    const { isReady, getAccessToken } = useAPIAuth();
    const { createRecord, readRecord, updateRecord, deleteRecord } = useCrudCalls();

    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setPageSize] = useState(9);

    const [numberOfRequests, setNumberOfRequests] = useState(0);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const { selectedCategory: catId, selectedType: typeId } = useStaticHelpDataContext();
    const { selectedCommunityId: communityId, selectedSubCommunityId: subCommunityId } = useStaticCommunityContext();

    const { selectedUser: userId } = useUserContext();
    const { selectedVolunteer: volunteerId } = useVolunteerContext();

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

    if (userId !== null) {
        filteredItems = data.filter(item => item.requestor_id === userId);
    }
    if (volunteerId !== null) {
        // alert('volunteer who responded');
        // filteredItems = data.filter(item => item.requestor_id === volunteerId);
    }

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const fetchData = useCallback(async () => {
        if (isReady) {
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
    }, [isReady, getAccessToken]);

    const getRequest = (id) => {
        const requestId = parseInt(id);
        const request = data.find(item => item.id === requestId);
        return request;
    };

    const getItem = (id) => {
        readRecord('request', id, setItem, setLoading, setError);
    };
    const createItem = (newItem) => {
        createRecord('request', newItem);
    };
    const updateItem = (updatedData) => {
        updateRecord('request', updatedData);
    };
    const deleteItem = (id) => {
        deleteRecord('request', id);
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
        getRequest,
        createItem,
        updateItem,
        deleteItem,
        numberOfRequests,
        loading,
        error,
    }), [data, setData, fetchData, filteredItems, currentItems, itemsPerPage, setPageSize, currentPage, paginate, item, getItem, getRequest, createItem, updateItem, deleteItem, numberOfRequests, loading, error]);

    return (
        <RequestContext.Provider value={contextValue}>
            {children}
        </RequestContext.Provider >
    );
};

export default RequestContext;