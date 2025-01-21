import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

import { useAPIAuth } from '@/context/APIAuthContext';
import APIService from '../services/APIService';

const StaticHelpDataContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

export const useStaticHelpDataContext = () => useContext(StaticHelpDataContext);

export const StaticHelpProvider = ({ children }) => {
    const { isReady, getAccessToken } = useAPIAuth();

    const [categoriesData, setCategoriesData] = useState([]);
    const [typesData, setTypesData] = useState([]);

    const [categoryData, setCategoryData] = useState(null);
    const [typeData, setTypeData] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    const [categoryOptions, setCategoryOptions] = useState([]);
    const [typeOptions, setTypeOptions] = useState([]);

    const [loadingCategories, setLoadingCategories] = useState(false);
    const [loadingTypes, setLoadingTypes] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCategoryData = useCallback(async () => {
        if (isReady) {
            try {
                setLoading(true);
                setLoadingCategories(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest('/help-category/', {}, accessToken);

                if (response.status === 'success') {
                    setCategoriesData(response.data || []);
                    setCategoryOptions(response.data || []);
                } else {
                    console.error(response.message || 'Unknown error occurred');
                    setError(response.message);
                }

                if (response.pagination) {
                    // console.log('Pagination Info - category:', response.pagination);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message || 'An error occurred while fetching data');
            } finally {
                setLoading(false);
                setLoadingCategories(false);
            }
        };
    }, [isReady, getAccessToken]);

    const fetchTypeData = useCallback(async () => {
        if (isReady) {
            try {
                setLoading(true);
                setLoadingTypes(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest('/help-type/', {}, accessToken);

                if (response.status === 'success') {
                    setTypesData(response.data || []);
                } else {
                    console.error(response.message || 'Unknown error occurred');
                    setError(response.message);
                }

                if (response.pagination) {
                    // console.log('Pagination Info - types:', response.pagination);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message || 'An error occurred while fetching data');
            } finally {
                setLoading(false);
                setLoadingTypes(false);
            }
        };
    }, [isReady, getAccessToken]);

    const getCategory = (id) => {
        const categoryId = parseInt(id);
        const category = categoriesData.find(item => item.id === categoryId);
        return category;
    }

    const getCategoryById = useCallback(async (id) => {
        if (isReady) {
            try {
                const categoryId = parseInt(id);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/help-category/${categoryId}/`, {
                    method: 'GET',
                }, accessToken);

                if (response.status === 'success') {
                    const result = response.data
                    setCategoryData(result);
                    return result;
                } else {
                    console.error(response.message || 'Failed to fetch item');
                    setError(response.message);
                }
            } catch (err) {
                console.error('Error fetching item:', err);
                setError(err.message || 'An error occurred while fetching an item');
            }
        };
    }, [isReady, getAccessToken]);

    const getType = (id) => {
        const typeId = parseInt(id);
        const type = typesData.find(item => item.id === typeId);
        return type;
    }

    const getTypeById = useCallback(async (id) => {
        if (isReady) {
            try {
                const typeId = parseInt(id);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/help-type/${typeId}/`, {
                    method: 'GET',
                }, accessToken);

                if (response.status === 'success') {
                    const result = response.data
                    setTypeData(result);
                    return result;
                } else {
                    console.error(response.message || 'Failed to fetch item');
                    setError(response.message);
                }
            } catch (err) {
                console.error('Error fetching item:', err);
                setError(err.message || 'An error occurred while fetching an item');
            }
        };
    }, [isReady, getAccessToken]);

    const getParentIdById = (id) => {
        const typeId = parseInt(id);
        const type = typesData.find(item => item.id === typeId);
        if (type) {
            return type.category_id;
        } else {
            return 0;
        }
    }

    const getTypes = (id) => {
        const categoryId = parseInt(id);
        const result = typesData.filter(item => item.category_id === categoryId);
        return result;
    }

    const countTypes = (id) => {
        const categoryId = parseInt(id);
        const result = getTypes(categoryId);
        return result.length;
    }

    useEffect(() => {
        fetchTypeData();
        fetchCategoryData();
    }, [fetchTypeData, fetchCategoryData]);

    const value = {
        categoriesData, setCategoriesData,
        typesData, setTypesData,
        fetchCategoryData, fetchTypeData,
        selectedCategory, setSelectedCategory,
        selectedType, setSelectedType,
        categoryOptions, setCategoryOptions,
        typeOptions, setTypeOptions,
        getCategory,
        getCategoryById,
        getType,
        getTypeById,
        categoryData,
        typeData,
        getParentIdById,
        getTypes,
        countTypes,
        loadingCategories,
        loadingTypes,
        loading,
        error,
    };

    return (
        <StaticHelpDataContext.Provider value={value}>
            {children}
        </StaticHelpDataContext.Provider>
    );
}