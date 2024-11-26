import React, { createContext, useContext, useState, useEffect } from 'react';
import mainCommunitiesData from '../data/mainCommunitiesData';
import communitiesData from '../data/communitiesData';

const StaticCommunityContext = createContext();

export const useStaticCommunityContext = () => useContext(StaticCommunityContext);

export const StaticCommunityProvider = ({ children }) => {

    const [mainCommunities, setMainData] = useState(mainCommunitiesData);
    const [communities, setSubData] = useState(communitiesData);
    const [communityId, setCommunityId] = useState('');
    const [subCommunityId, setSubCommunityId] = useState('');

    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [selectedSubCommunity, setSelectedSubCommunity] = useState(null);
    const [subCommunityOptions, setSubCommunityOptions] = useState([]);

    const [loadingCommunities, setLoadingCommunities] = useState(false);
    const [loadingSubCommunities, setLoadingSubCommunities] = useState(false);

    const getCommunity = (id) => {
        const community = mainCommunitiesData.find(item => item.id === id);
        return community;
    }

    const getSubCommunity = (id) => {
        const subCommunity = communitiesData.find(item => item.id === id);
        return subCommunity;
    }

    const getSubCommunities = (id) => {
        const result = communitiesData.filter(item => item.parentId === id);
        return result;
    }

    const countSubCommunities = (id) => {
        const result = getSubCommunities(id);
        return result.length;
    }

    return (
        <StaticCommunityContext.Provider value={{
            mainCommunities, setMainData,
            communities, setSubData,
            communityId, setCommunityId,
            subCommunityId, setSubCommunityId,
            selectedCommunity, setSelectedCommunity,
            selectedSubCommunity, setSelectedSubCommunity,
            subCommunityOptions, setSubCommunityOptions,
            getCommunity,
            getSubCommunity,
            getSubCommunities,
            countSubCommunities,
            loadingCommunities,
            loadingSubCommunities,
        }}>
            {children}
        </StaticCommunityContext.Provider >
    );
}

export default StaticCommunityContext;