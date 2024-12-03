import React from 'react';
import { Pagination as PaginationAnt } from 'antd';

const Pagination = ({ data, itemsPerPage, setPageSize, currentPage, paginate }) => {

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
            style={{ paddingBottom: 20 }}
        />
    )
};

export default Pagination;