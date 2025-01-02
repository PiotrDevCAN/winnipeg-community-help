import React, { createContext, useContext, useState, useCallback } from 'react';
import { useStaticCommunityContext } from '@/context/StaticCommunityContext';
import SelectAllOption from '@/components/SelectAllOption';
import { prepareSelectData } from '@/services/prepareSelectData';

const FormCommunityContext = createContext();

export const useFormCommunityContext = () => useContext(FormCommunityContext);

export const FormCommunityProvider = ({ children }) => {
    const {
        mainCommunitiesData,
        subCommunitiesData,
        communityOptions,
        subCommunityOptions, setSubCommunityOptions,
        loadingCommunities, loadingSubCommunities,
        getParentIdById,
        getSubCommunities,
    } = useStaticCommunityContext();

    const [selectedCommunityId, setSelectedCommunityId] = useState(null);
    const [selectedSubCommunityId, setSelectedSubCommunityId] = useState(null);

    const updatedMainCommunitiesData = prepareSelectData(communityOptions);
    const updatedSubCommunitiesData = prepareSelectData(subCommunityOptions);

    const mainCommunitiesDataOptionsData = SelectAllOption.concat(updatedMainCommunitiesData);
    const subCommunitiesOptionsData = SelectAllOption.concat(updatedSubCommunitiesData);

    const updateCommunity = (value, second) => {
        const communityId = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedCommunityId(null);
            setSelectedSubCommunityId(null);
            setSubCommunityOptions([]);
        } else {
            const tempSubCommunities = getSubCommunities(communityId);
            setSubCommunityOptions(tempSubCommunities || []);
            setSelectedCommunityId(communityId);
            setSelectedSubCommunityId(second);
        }
    }

    const updateSubCommunity = (value) => {
        const communityId = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedSubCommunityId(null);
        } else {
            setSelectedSubCommunityId(communityId);
        }
    }

    const handleCommunityChange = (value) => {
        updateCommunity(value);
    };
    const handleSubCommunityChange = (value) => {
        updateSubCommunity(value);
    };

    const triggerCommunityChange = async (newCommunityId) => {
        if (newCommunityId) {
            const subCommunityId = parseInt(newCommunityId);
            const mainCommunityId = getParentIdById(subCommunityId);
            updateCommunity(mainCommunityId, subCommunityId);
        }
    };

    // useEffect(() => {
    //     if (item) {
    //         form.setFieldsValue({
    //             ...item,
    //             // email: item.email,
    //             firstName: item.first_name,
    //             lastName: item.last_name,
    //             nickname: item.nick,
    //             prefix: item.prefix,
    //             phone: item.phone_number,
    //             // birthDate: item.birth_date,
    //         });
    //     }
    // }, [item]);

    return (
        <FormCommunityContext.Provider
            value={{
                mainCommunitiesData,
                subCommunitiesData,
                selectedCommunityId,
                selectedSubCommunityId,
                handleCommunityChange,
                handleSubCommunityChange,
                mainCommunitiesDataOptionsData,
                subCommunitiesOptionsData,
                loadingCommunities,
                loadingSubCommunities,
                triggerCommunityChange,
            }}
        >
            {children}
        </FormCommunityContext.Provider>
    );
};

export default FormCommunityContext;