import React, { useEffect, useState } from "react";
import { Row } from "antd";
import useApplyFilters from "@/customHooks/filters/useApplyFilters";
import LoadingPlaceholder from "@/components/LoadingPlaceholder";
import ErrorPlaceholder from "@/components/Layout/ErrorPlaceholder";
import EmptyPlaceholder from "@/components/Layout/EmptyPlaceholder";
import Pagination from "@/components/Layout/Pagination";

const GenericCardsPage = ({
  objectType,
  onNewItemCreate,
  useDataHook,
  CardsComponent,
}) => {

  const { data: dataRaw, isLoading, error } = useDataHook();
  const { data: items } = dataRaw;

  const { filteredItems } = useApplyFilters(items);
  const [currentItems, setCurrentItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  const handleNewItemCreate = () => {
    onNewItemCreate();
  };

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageSizeChange = (pageSize) => {
    setPageSize(pageSize);
  };

  useEffect(() => {
    const indexOfFirstItem = (currentPage - 1) * pageSize;
    const indexOfLastItem = currentPage * pageSize;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(currentItems);
  }, [filteredItems, currentPage, pageSize]);

  // If still loading, return a loading state
  const loadingMsg = "Loading cards data...";
  if (isLoading) return <LoadingPlaceholder message={loadingMsg} />;

  // If there is an error, display it
  if (error) return <ErrorPlaceholder error={error} />;

  // If data has not been fetched (null or empty), return a message
  if (!filteredItems || filteredItems.length === 0)
    return <EmptyPlaceholder newItem={handleNewItemCreate} />;

  return (
    <>
      <Row gutter={16}>
        <CardsComponent data={currentItems} />
      </Row>
      <Pagination
        data={filteredItems}
        currentPage={currentPage}
        itemsPerPage={pageSize}
        onPaginate={handlePaginate}
        onPageSize={handlePageSizeChange}
      />
    </>
  );
};

export default GenericCardsPage;
