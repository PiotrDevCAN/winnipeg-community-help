import React, { useEffect } from 'react';
import { useCombinedCommunityContext } from '@/context/CombinedCommunityContext';
import useLoadingMessage from './useLoadingMessage';

const useCommunity = (item) => {

    const { loadCommunitiesData, mainCommunityData, subCommunityData, loadingMainCommunity, loadingSubCommunity, errorMainCommunity, errorSubCommunity } = useCombinedCommunityContext();

    useEffect(() => {
        if (item) {
            const subCommunityId = item.community_id;
            loadCommunitiesData(subCommunityId);
        }
    }, [item, loadCommunitiesData]);

    useLoadingMessage(loadingMainCommunity, 'Main Community');
    useLoadingMessage(loadingSubCommunity, 'Sub Community');

    // if (loadingMainCommunity || !mainCommunityData) return <p>Loading main community data...</p>;
    // if (loadingSubCommunity || !subCommunityData) return <p>Loading sub community data...</p>;
    // if (errorMainCommunity) return <p>Error in obtaining main community data...</p>;
    // if (errorSubCommunity) return <p>Error in obtaining sub community data...</p>;

    return { mainCommunityData, subCommunityData }
};
export default useCommunity;