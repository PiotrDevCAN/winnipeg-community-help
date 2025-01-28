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

const OfferContext = createContext();
OfferContext.displayName = 'Offer';

export const useOfferContext = () => useCustomContext(OfferContext);

export const OfferProvider = ({ children }) => {
    const { isReady, getAccessToken } = useAPIAuth();
    const { createRecord, readRecord, updateRecord, deleteRecord } = useCrudCalls();

    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setPageSize] = useState(9);

    const [numberOfOffers, setNumberOfOffers] = useState(0);

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

    const getItem = (id) => {
        readRecord('offer', id, setItem, setLoading, setError);
    };
    const createItem = (newItem) => {
        createRecord('offer', newItem);
    };
    const updateItem = (updatedData) => {
        updateRecord('offer', updatedData);
    };
    const deleteItem = (id) => {
        deleteRecord('offer', id);
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
        getOffer,
        createItem,
        updateItem,
        deleteItem,
        numberOfOffers,
        loading,
        error,
    }), [data, item, currentItems, itemsPerPage, currentPage, numberOfOffers, loading, error]);

    return (
        <OfferContext.Provider value={contextValue}>
            {children}
        </OfferContext.Provider >
    );
};

export default OfferContext;