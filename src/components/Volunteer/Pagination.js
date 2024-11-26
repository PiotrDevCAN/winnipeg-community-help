import React from 'react';
import { default as PaginationCore } from '../../components/Layout/Pagination';
import { useVolunteerContext } from '../../context/VolunteerContext';

const Pagination = () => {

    const { filteredItems: data , itemsPerPage, setPageSize, currentPage, paginate } = useVolunteerContext();

    return (
        <PaginationCore
            data={data}
            itemsPerPage={itemsPerPage}
            setPageSize={setPageSize}
            currentPage={currentPage}
            paginate={paginate}
        />
    )
};

export default Pagination;