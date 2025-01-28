import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import { useStaticCommunityContext } from '@/context/static/StaticCommunityContext';
import { useAPIAuth } from '@/context/auth/APIAuthContext';
import APIService from '@/services/APIService';
import { useCrudCalls } from '@/customHooks/useCrudCalls';
import useCustomContext from '@/customHooks/useCustomContext';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

const VolunteerContext = createContext();
VolunteerContext.displayName = 'Volunteer';

export const useVolunteerContext = () => useCustomContext(VolunteerContext);

export const VolunteerProvider = ({ children }) => {
    const { createRecord, readRecord, updateRecord, deleteRecord } = useCrudCalls();

    const { isReady, getAccessToken } = useAPIAuth();

    const [selectedVolunteer, setSelectedVolunteer] = useState(null);

    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setPageSize] = useState(9);

    const [numberOfRequests, setNumberOfRequests] = useState(0);
    const [numberOfOffers, setNumberOfOffers] = useState(0);
    const [numberOfVolunteers, setNumberOfVolunteers] = useState(0);

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
    }, [isReady, getAccessToken]);

    const getVolunteer = (id) => {
        const volunteerId = parseInt(id);
        const volunteer = data.find(item => item.id === volunteerId);
        return volunteer;
    };

    const getItem = (id) => {
        readRecord('volunteer', id, setItem, setLoading, setError);
    };
    const createItem = (newItem) => {
        createRecord('volunteer', newItem);
    };
    const updateItem = (updatedData) => {
        updateRecord('volunteer', updatedData);
    };
    const deleteItem = (id) => {
        deleteRecord('volunteer', id);
    };

    const getOffersNumber = useCallback(async (id) => {
        if (isReady) {
            try {
                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/volunteer/${id}/offers`, {
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
        }
    }, [isReady, getAccessToken]);

    const getRequestsNumber = useCallback(async (id) => {
        if (isReady) {
            try {
                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/volunteer/${id}/requests`, {
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
        }
    }, [isReady, getAccessToken]);

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
        getVolunteer,
        createItem,
        updateItem,
        deleteItem,
        getOffersNumber,
        getRequestsNumber,
        getVolunteersInCommunityNumber,
        numberOfOffers,
        numberOfRequests,
        numberOfVolunteers,
        selectedVolunteer, setSelectedVolunteer,
        loading,
        error,
    }), [data, fetchData, filteredItems, currentItems, itemsPerPage, currentPage, item, numberOfOffers, numberOfRequests, numberOfVolunteers, selectedVolunteer, loading, error]);

    return (
        <VolunteerContext.Provider value={contextValue}>
            {children}
        </VolunteerContext.Provider >
    );
};

export default VolunteerContext;