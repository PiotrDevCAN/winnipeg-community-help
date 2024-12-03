import React, { createContext, useContext, useState, useEffect } from 'react';

import { useAPIAuth } from '../context/APIAuthContext';
import APIService from '../services/APIService';

const StaticCommunityContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

export const useStaticCommunityContext = () => useContext(StaticCommunityContext);

export const StaticCommunityProvider = ({ children }) => {
    const { getAccessToken } = useAPIAuth();

    const [mainCommunitiesData, setMainCommunitiesData] = useState([]);
    const [subCommunitiesData, setSubCommunitiesData] = useState([]);

    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [selectedSubCommunity, setSelectedSubCommunity] = useState(null);
    const [subCommunityOptions, setSubCommunityOptions] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [loadingCommunities, setLoadingCommunities] = useState(false);
    const [loadingSubCommunities, setLoadingSubCommunities] = useState(false);

    const fetchMainCommunityData = async () => {
        try {
            setLoading(true);

            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest('/main-community/', {}, accessToken);

            if (response.status === 'success') {
                setMainCommunitiesData(response.data || []);
            } else {
                console.error(response.message || 'Unknown error occurred');
                setError(response.message);
            }

            if (response.pagination) {
                // console.log('Pagination Info - main community:', response.pagination);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError(err.message || 'An error occurred while fetching data');
        } finally {
            setLoading(false);
        }
    };

    const fetchSubCommunityData = async () => {
        try {
            setLoading(true);

            const accessToken = await getAccessToken();
            const response = await apiService.makeRequest('/community/', {}, accessToken);

            if (response.status === 'success') {
                setSubCommunitiesData(response.data || []);
            } else {
                console.error(response.message || 'Unknown error occurred');
                setError(response.message);
            }

            if (response.pagination) {
                // console.log('Pagination Info - sub community:', response.pagination);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError(err.message || 'An error occurred while fetching data');
        } finally {
            setLoading(false);
        }
    };

    const getCommunity = (id) => {
        const community = mainCommunitiesData.find(item => item.id === id);
        return community;
    }

    const getSubCommunity = (id) => {
        const subCommunity = subCommunitiesData.find(item => item.id === id);
        return subCommunity;
    }

    const getSubCommunities = (id) => {
        const result = subCommunitiesData.filter(item => item.community_id === id);
        return result;
    }

    const countSubCommunities = (id) => {
        const result = getSubCommunities(id);
        return result.length;
    }

    useEffect(() => {
        fetchMainCommunityData();
        fetchSubCommunityData();
    }, [getAccessToken]);

    return (
        <StaticCommunityContext.Provider value={{
            mainCommunitiesData, setMainCommunitiesData,
            subCommunitiesData, setSubCommunitiesData,
            selectedCommunity, setSelectedCommunity,
            selectedSubCommunity, setSelectedSubCommunity,
            subCommunityOptions, setSubCommunityOptions,
            getCommunity,
            getSubCommunity,
            getSubCommunities,
            countSubCommunities,
            loadingCommunities,
            loadingSubCommunities,
            loading,
            error,
        }}>
            {children}
        </StaticCommunityContext.Provider >
    );
}

export default StaticCommunityContext;