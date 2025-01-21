import React, { createContext, useContext, useState, useCallback } from 'react';
import { useStaticHelpDataContext } from '@/context/StaticHelpDataContext';
import { useStaticCommunityContext } from '@/context/StaticCommunityContext';
import { useUserContext } from '@/context/UserContext';
import { useVolunteerContext } from '@/context/VolunteerContext';
import { useAPIAuth } from '@/context/APIAuthContext';
import APIService from '@/services/APIService';

const OfferContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

export const useOfferContext = () => useContext(OfferContext);

export const OfferProvider = ({ children }) => {
    const { isReady, getAccessToken } = useAPIAuth();

    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setPageSize] = useState(9);

    const [numberOfOffers, setNumberOfOffers] = useState(0);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
        // filteredItems = data.filter(item => item.requestor_id === userId);
    }
    if (volunteerId !== null) {
        filteredItems = data.filter(item => item.requestor_id === volunteerId);
    }

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const fetchData = useCallback(async () => {
        if (isReady) {
            try {
                setLoading(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest('/offer/', {}, accessToken);

                if (response.status === 'success') {
                    setData(response.data || []);
                } else {
                    console.error(response.message || 'Unknown error occurred');
                    setError(response.message);
                }

                if (response.pagination) {
                    // console.log('Pagination Info - offers:', response.pagination);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message || 'An error occurred while fetching data');
            } finally {
                setLoading(false);
            }
        };
    }, [isReady, getAccessToken]);

    const getOffer = (id) => {
        const offerId = parseInt(id);
        const offer = data.find(item => item.id === offerId);
        return offer;
    };

    const getItem = useCallback(async (id) => {
        if (isReady) {
            try {
                setLoading(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/offer/${id}/`, {
                    method: 'GET',
                }, accessToken);

                if (response.status === 'success') {
                    const result = response.data;
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
    }, [isReady, getAccessToken]);

    const createItem = async (newItem) => {
        try {
            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest('/offer/', {
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
            const response = await apiService.makeRequest(`/offer/${id}/`, {
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
            const response = await apiService.makeRequest(`/offer/${id}/`, {
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

    const getOffersInCommunityNumber = useCallback(async (id) => {
        if (isReady) {
            try {
                setLoading(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/user/list/community/${id}/`, {}, accessToken);

                if (response.status === 'success') {
                    setNumberOfOffers(response.data.amount || 0);
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
        getOffer,
        createItem,
        updateItem,
        deleteItem,
        getOffersInCommunityNumber,
        numberOfOffers,
        loading,
        error,
    };

    return (
        <OfferContext.Provider value={value}>
            {children}
        </OfferContext.Provider >
    );
};

export default OfferContext;