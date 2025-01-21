import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

import { useAPIAuth } from '@/context/APIAuthContext';
import APIService from '@/services/APIService';

const StaticCommunityContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const apiService = new APIService(API_BASE_URL);

export const useStaticCommunityContext = () => useContext(StaticCommunityContext);

export const StaticCommunityProvider = ({ children }) => {
    const { isReady, getAccessToken } = useAPIAuth();

    // store the fetched data
    const [mainCommunitiesData, setMainCommunitiesData] = useState([]);
    const [subCommunitiesData, setSubCommunitiesData] = useState([]);

    // store the options for the dropdowns
    const [communityOptions, setCommunityOptions] = useState([]);
    const [subCommunityOptions, setSubCommunityOptions] = useState([]);

    // used to filter out the selected community
    const [selectedCommunityId, setSelectedCommunityId] = useState(null);
    const [selectedSubCommunityId, setSelectedSubCommunityId] = useState(null);

    // store the selected community data
    const [mainCommunityData, setMainCommunityData] = useState(null);
    const [subCommunityData, setSubCommunityData] = useState(null);

    // loading states
    const [loadingCommunities, setLoadingCommunities] = useState(false);
    const [loadingSubCommunities, setLoadingSubCommunities] = useState(false);

    // main loading and error states
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMainCommunityData = useCallback(async () => {
        if (isReady) {
            try {
                setLoading(true);
                setLoadingCommunities(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest('/main-community/', {}, accessToken);

                if (response.status === 'success') {
                    setMainCommunitiesData(response.data || []);
                    setCommunityOptions(response.data || []);
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
                setLoadingCommunities(false);
            }
        };
    }, [isReady, getAccessToken]);

    const fetchSubCommunityData = useCallback(async () => {
        if (isReady) {
            try {
                setLoading(true);
                setLoadingSubCommunities(true);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest('/community/', {}, accessToken);

                if (response.status === 'success') {
                    setSubCommunitiesData(response.data || []);
                    // select main community first
                    // setSubCommunityOptions(response.data || []);
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
                setLoadingSubCommunities(false);
            }
        };
    }, [isReady, getAccessToken]);

    const getCommunity = (id) => {
        const communityId = parseInt(id);
        const community = mainCommunitiesData.find(item => item.id === communityId);
        return community;
    }

    const getCommunityById = useCallback(async (id) => {
        if (isReady) {
            try {
                const communityId = parseInt(id);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/main-community/${communityId}/`, {
                    method: 'GET',
                }, accessToken);

                if (response.status === 'success') {
                    const result = response.data
                    setMainCommunityData(result);
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

    const getSubCommunity = (id) => {
        const communityId = parseInt(id);
        const subCommunity = subCommunitiesData.find(item => item.id === communityId);
        return subCommunity;
    }

    const getSubCommunityById = useCallback(async (id) => {
        if (isReady) {
            try {
                const communityId = parseInt(id);

                const accessToken = await getAccessToken();
                const response = await apiService.makeRequest(`/community/${communityId}/`, {
                    method: 'GET',
                }, accessToken);

                if (response.status === 'success') {
                    const result = response.data
                    setSubCommunityData(result);
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
        const communityId = parseInt(id);
        console.log('subCommunitiesData:', subCommunitiesData);
        const subCommunity = subCommunitiesData.find(item => item.id === communityId);
        if (subCommunity) {
            return subCommunity.community_id;
        } else {
            return 0;
        }
    }

    const getSubCommunities = (id) => {
        const communityId = parseInt(id);
        const result = subCommunitiesData.filter(item => item.community_id === communityId);
        return result;
    }

    const countSubCommunities = (id) => {
        const communityId = parseInt(id);
        const result = getSubCommunities(communityId);
        return result.length;
    }

    useEffect(() => {
        fetchMainCommunityData();
        fetchSubCommunityData();
    }, [fetchMainCommunityData, fetchSubCommunityData]);

    const value = {
        mainCommunitiesData, setMainCommunitiesData,
        subCommunitiesData, setSubCommunitiesData,
        communityOptions, setCommunityOptions,
        subCommunityOptions, setSubCommunityOptions,
        selectedCommunityId, setSelectedCommunityId,
        selectedSubCommunityId, setSelectedSubCommunityId,
        mainCommunityData,
        subCommunityData,
        getCommunity,
        getCommunityById,
        getSubCommunity,
        getSubCommunityById,
        getParentIdById,
        getSubCommunities,
        countSubCommunities,
        loadingCommunities,
        loadingSubCommunities,
        loading,
        error
    };

    return (
        <StaticCommunityContext.Provider value={value}>
            {children}
        </StaticCommunityContext.Provider >
    );
}

export default StaticCommunityContext;