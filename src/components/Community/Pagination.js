import React from 'react';
import { default as PaginationCore } from '../../components/Layout/Pagination';
import { useCommunityContext } from '../../context/CommunityContext';

const Pagination = () => {

    const { filteredItems: data, itemsPerPage, setPageSize, currentPage, paginate } = useCommunityContext();

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