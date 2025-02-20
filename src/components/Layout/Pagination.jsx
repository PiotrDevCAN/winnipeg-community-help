import React, { useEffect } from "react";
import { Pagination as PaginationAnt } from "antd";

const Pagination = ({
  data,
  itemsPerPage,
  currentPage,
  onPageSize,
  onPaginate,
}) => {
  const handleSizeChange = (current, pageSize) => {
    onPageSize(pageSize);
  };

  const handlePaginate = (page, pageSize) => {
    onPaginate(page);
  };

  return (
    <PaginationAnt
      align="center"
      total={data.length}
      showTotal={(total) => `Total ${total} items`}
      defaultPageSize={itemsPerPage}
      defaultCurrent={currentPage}
      showSizeChanger
      onShowSizeChange={handleSizeChange}
      onChange={handlePaginate}
      style={{ paddingBottom: 20 }}
    />
  );
};

export default Pagination;
