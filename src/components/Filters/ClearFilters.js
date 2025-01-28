import React from 'react';
import { Space, Button } from 'antd';

import { useStaticHelpDataContext } from '@/context/static/StaticHelpDataContext';
import { useStaticCommunityContext } from '@/context/static/StaticCommunityContext';
import { useUserContext } from '@/context/mainTypes/UserContext';
import { useVolunteerContext } from '@/context/mainTypes/VolunteerContext';

const ClearFilters = () => {

    const {
        setSelectedCategory,
        setSelectedType,
        setTypeOptions,
    } = useStaticHelpDataContext();

    const {
        setSelectedCommunityId,
        setSelectedSubCommunityId,
        setSubCommunityOptions,
    } = useStaticCommunityContext();

    const {
        setSelectedUser,
    } = useUserContext();

    const {
        setSelectedVolunteer,
    } = useVolunteerContext();

    const handleClearFilters = () => {
        // clear categories
        setSelectedCategory(null);
        setTypeOptions([]);
        setSelectedType(null);

        // clear communities
        setSelectedCommunityId(null);
        setSubCommunityOptions([]);
        setSelectedSubCommunityId(null);

        // clear users
        setSelectedUser(null);

        //clear volunteers
        setSelectedVolunteer(null);
    }

    return (
        <Space>
            <Button onClick={handleClearFilters} block type="primary" htmlType="submit" className="colorful-background">
                Clear filters
            </Button>
        </Space >
    );
};

export default ClearFilters;
