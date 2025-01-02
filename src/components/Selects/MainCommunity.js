import React from 'react';
import { Select } from 'antd';
import { useFormCommunityContext } from '@/context/FormCommunityContext';
import { TbBuildingCommunity } from "react-icons/tb";

const MainCommunity = () => {

    const {
        selectedCommunityId,
        handleCommunityChange,
        mainCommunitiesDataOptionsData,
        loadingCommunities
    } = useFormCommunityContext();

    return (
        <Select
            value={selectedCommunityId}
            suffixIcon={<TbBuildingCommunity />}
            showSearch
            placeholder="Select a Community"
            optionFilterProp="label"
            onChange={handleCommunityChange}
            options={mainCommunitiesDataOptionsData}
            loading={loadingCommunities}
            style={{ width: '100%' }}
        />
    );
};

export default MainCommunity;