import { Select } from 'antd';
import React, { useEffect } from 'react';
import { useFormCommunityContext } from '@/context/auxiliary/FormCommunityContext';
import { RiCommunityLine } from "react-icons/ri";

const SubCommunity = ({ preSelectedId }) => {

    const {
        mainCommunitiesData,
        subCommunitiesData,
        triggerCommunityChange,
        selectedSubCommunityId,
        handleSubCommunityChange,
        subCommunitiesOptionsData,
        loadingSubCommunities
    } = useFormCommunityContext();

    useEffect(() => {
        if (preSelectedId) {
            triggerCommunityChange(preSelectedId);
        }
    }, [mainCommunitiesData, subCommunitiesData]);

    return (
        <Select
            value={selectedSubCommunityId}
            suffixIcon={<RiCommunityLine />}
            showSearch
            placeholder="Select a Sub Community"
            optionFilterProp="label"
            onChange={handleSubCommunityChange}
            options={subCommunitiesOptionsData}
            loading={loadingSubCommunities}
            style={{ width: '100%' }}
        />
    );
};

export default SubCommunity;