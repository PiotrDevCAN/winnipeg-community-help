import React, { createContext, useContext, useState, useEffect } from 'react';

import { useAPIAuth } from '../context/APIAuthContext';
import APIService from '../services/APIService';

const StaticHelpDataContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

export const useStaticHelpDataContext = () => useContext(StaticHelpDataContext);

export const StaticHelpProvider = ({ children }) => {
    const { getAccessToken } = useAPIAuth();

    const [categoriesData, setCategoriesData] = useState([]);
    const [typesData, setTypesData] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [typeOptions, setTypeOptions] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [loadingCategories, setLoadingCategories] = useState(false);
    const [loadingTypes, setLoadingTypes] = useState(false);

    const fetchCategoryData = async () => {
        try {
            setLoading(true);

            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest('/help-category/', {}, accessToken);

            if (response.status === 'success') {
                setCategoriesData(response.data || []);
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
        }
    };

    const fetchTypeData = async () => {
        try {
            setLoading(true);

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
        }
    };

    const getCategory = (id) => {
        const category = categoriesData.find(item => item.id === id);
        return category;
    }

    const getType = (id) => {
        const type = typesData.find(item => item.id === id);
        return type;
    }

    const getTypes = (id) => {
        const result = typesData.filter(item => item.category_id === id);
        return result;
    }

    const countTypes = (id) => {
        const result = getTypes(id);
        return result.length;
    }

    useEffect(() => {
        fetchTypeData();
        fetchCategoryData();
    }, [getAccessToken]);

    return (
        <StaticHelpDataContext.Provider value={{
            categoriesData, setCategoriesData,
            typesData, setTypesData,
            selectedCategory, setSelectedCategory,
            selectedType, setSelectedType,
            typeOptions, setTypeOptions,
            getCategory,
            getType,
            getTypes,
            countTypes,
            loadingCategories, setLoadingCategories,
            loadingTypes, setLoadingTypes,
            loading,
            error,
        }}>
            {children}
        </StaticHelpDataContext.Provider>
    );
}