import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import LoadingPlaceholder from '@/components/LoadingPlaceholder';
import ErrorPlaceholder from '@/components/Layout/ErrorPlaceholder';
import EmptyPlaceholder from '@/components/Layout/EmptyPlaceholder';

const GenericListPage = ({
  objectType,
  handleNewItem,
  useContextHook,
  ListTableComponent,
}) => {
  const { currentItems: data, loading, error } = useContextHook();

  // If still loading, return a loading state
  const loadingMsg = 'Loading table data...';
  if (loading) return <LoadingPlaceholder message={loadingMsg} />;

  // If there is an error, display it
  if (error) return <ErrorPlaceholder error={error} />;

  // If data has not been fetched (null or empty), return a message
  if (!data || data.length === 0) return <EmptyPlaceholder newItem={handleNewItem} />;

  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <ListTableComponent data={data} />
    </Flex>
  );
};

export default GenericListPage;
