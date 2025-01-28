import React from 'react';
import { Pagination as PaginationAnt } from 'antd';
import { useVolunteerContext } from '@/context/mainTypes/VolunteerContext';

const Pagination = () => {

    const { data, itemsPerPage, setPageSize, currentPage, paginate } = useVolunteerContext();

    const onShowSizeChange = (current, pageSize) => {
        setPageSize(pageSize);
    };

    const onChange = (page, pageSize) => {
        paginate(page);
    };

    return (
        < PaginationAnt
            align="center"
            total={data.length}
            showTotal={(total) => `Total ${total} items`}
            defaultPageSize={itemsPerPage}
            defaultCurrent={currentPage}
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={onChange}
        />
    )
};

export default Pagination;