import React, { useEffect } from 'react';
import { Row } from 'antd';
import Pagination from '@/components/Layout/Pagination';
import LoadingPlaceholder from '@/components/LoadingPlaceholder';
import ErrorPlaceholder from '@/components/Layout/ErrorPlaceholder';
import EmptyPlaceholder from '@/components/Layout/EmptyPlaceholder';

const GenericCardsPage = ({
  objectType,
  handleNewItem,
  useContextHook,
  CardsComponent,
}) => {
  const {
    currentItems: data,
    loading,
    error,
    filteredItems: filteredData,
    itemsPerPage,
    setPageSize,
    currentPage,
    paginate,
  } = useContextHook();

  // If still loading, return a loading state
  const loadingMsg = 'Loading cards data...';
  if (loading) return <LoadingPlaceholder message={loadingMsg} />;

  // If there is an error, display it
  if (error) return <ErrorPlaceholder error={error} />;

  // If data has not been fetched (null or empty), return a message
  if (!data || data.length === 0) return <EmptyPlaceholder newItem={handleNewItem} />;

  return (
    <>
      <Row gutter={16}>
        <CardsComponent data={data} />
      </Row>
      <Pagination
        data={filteredData}
        itemsPerPage={itemsPerPage}
        setPageSize={setPageSize}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default GenericCardsPage;
