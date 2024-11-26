import React, { createContext, useContext, useState, useEffect } from 'react';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import ErrorPlaceholder from '../components/ErrorPlaceholder';
import EmptyPlaceholder from '../components/EmptyPlaceholder';

// import volunteersData from '../data/volunteersData';

import { useRouteContext } from '../context/RouteContext';
// import { useStaticHelpDataContext } from '../context/StaticHelpDataContext';
import { useStaticCommunityContext } from '../context/StaticCommunityContext';
import { useAPIAuth } from '../context/APIAuthContext';
import { APIService } from '../services/APIService';

const VolunteerContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const useVolunteerContext = () => useContext(VolunteerContext);

export const VolunteerProvider = ({ children }) => {
    const { getAccessToken } = useAPIAuth();

    // const [data, setData] = useState(volunteersData);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setPageSize] = useState(9);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { newVolunteer: handleNewItem } = useRouteContext();
    const { selectedCommunity: communityId, selectedSubCommunity: subCommunityId } = useStaticCommunityContext();

    let filteredItems = data;

    if (communityId !== null) {
        filteredItems = data.filter(item => item.community === communityId);
    }
    if (subCommunityId !== null) {
        filteredItems = data.filter(item => item.subCommunity === subCommunityId);
    }

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = await getAccessToken();
                const response = await APIService.makeRequest(`${API_BASE_URL}/volunteer/`, {}, accessToken);
                // console.log(response);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once after the component mounts

    // If still loading, return a loading state
    const loadingMsg = 'Loading volunteers data...';
    if (loading) return <LoadingPlaceholder message={loadingMsg} />

    // If there is an error, display it
    if (error) return <ErrorPlaceholder error={error} />

    // If data has not been fetched (null or empty), return a message
    if (!data || data.length === 0) return <EmptyPlaceholder newItem={handleNewItem} />

    return (
        <VolunteerContext.Provider value={{ data, setData, filteredItems, currentItems, itemsPerPage, setPageSize, currentPage, paginate }}>
            {children}
        </VolunteerContext.Provider >
    );
}

export default VolunteerContext;