import React from 'react';
import { default as PaginationCore } from '../../components/Layout/Pagination';
import { useRequestContext } from '../../context/RequestContext';

const Pagination = () => {

    const { filteredItems: data, itemsPerPage, setPageSize, currentPage, paginate } = useRequestContext();

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