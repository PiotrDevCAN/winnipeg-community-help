import React from 'react';
import { default as PaginationCore } from '../../components/Layout/Pagination';
import { useOfferContext } from '../../context/OfferContext';

const Pagination = () => {

    const { filteredItems: data, itemsPerPage, setPageSize, currentPage, paginate } = useOfferContext();

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