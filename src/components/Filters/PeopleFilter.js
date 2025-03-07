import React, { useEffect } from 'react';
import { Select, Row, Col } from 'antd';

import { MdVolunteerActivism } from "react-icons/md";
import { MdOutlineVolunteerActivism } from "react-icons/md";

import { useNeedyContext } from '@/context/mainTypes/NeedyContext';
import { useVolunteerContext } from '@/context/mainTypes/VolunteerContext';
import SelectAllOption from '@/components/SelectAllOption';
import { prepareUserSelectData } from '@/services/prepareUserSelectData';

const PeopleFilter = ({ preSelectedVolunteerId, preSelectedNeedyId }) => {

    const {
        data: usersData,
        fetchData: fetchUserData,
        selectedUser, setSelectedUser,
        load: loadingUsers,
        error: errorUsers,
    } = useNeedyContext();
    const {
        data: volunteersData,
        fetchData: fetchVolunteerData,
        selectedVolunteer, setSelectedVolunteer,
        load: loadingVolunteers,
        error: errorVolunteers,
    } = useVolunteerContext();

    const updatedUsersData = prepareUserSelectData(usersData);
    const updatedVolunteersData = prepareUserSelectData(volunteersData);

    const usersOptionsData = SelectAllOption.concat(updatedUsersData);
    const volunteersDataOptionsData = SelectAllOption.concat(updatedVolunteersData);

    const updateUser = (value) => {
        const userId = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedUser(null);
        } else {
            setSelectedUser(userId);
        }
    }

    const updateVolunteer = (value) => {
        const volunteerId = parseInt(value);
        if (String(value).includes('all')) {
            setSelectedVolunteer(null);
        } else {
            setSelectedVolunteer(volunteerId);
        }
    }

    const handleUserChange = (value) => {
        updateUser(value);
    };
    const handleVolunteerChange = (value) => {
        updateVolunteer(value);
    };

    useEffect(() => {
        fetchUserData();
        fetchVolunteerData();
        if (preSelectedNeedyId) {
            const needyId = parseInt(preSelectedNeedyId);
            setSelectedUser(needyId);
        }
        if (preSelectedVolunteerId) {
            const volunteerId = parseInt(preSelectedVolunteerId);
            setSelectedVolunteer(volunteerId);
        }
    }, [fetchUserData, fetchVolunteerData]);

    if (errorUsers) return <p>Error: {errorUsers}</p>;
    if (errorVolunteers) return <p>Error: {errorVolunteers}</p>;

    return (
        <Row gutter={16}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Select
                    value={selectedUser}
                    suffixIcon={<MdVolunteerActivism />}
                    showSearch
                    placeholder="Select a Needy Person"
                    optionFilterProp="label"
                    onChange={handleUserChange}
                    options={usersOptionsData}
                    loading={loadingUsers}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Select
                    value={selectedVolunteer}
                    suffixIcon={<MdOutlineVolunteerActivism />}
                    showSearch
                    placeholder="Select a Volunteer"
                    optionFilterProp="label"
                    onChange={handleVolunteerChange}
                    options={volunteersDataOptionsData}
                    loading={loadingVolunteers}
                    style={{ width: '100%' }}
                />
            </Col>
        </Row>
    );
};

export default PeopleFilter;
