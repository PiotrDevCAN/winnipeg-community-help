import React from 'react';
import { Space } from 'antd';

import CategoryFilter from '../CategoryFilter';
import CommunityFilter from '../CommunityFilter';

const FiltersSelectsSection = () => {
    return (
        <Space>
            <CategoryFilter />
            <CommunityFilter />
        </Space >
    );
};

export default FiltersSelectsSection;
