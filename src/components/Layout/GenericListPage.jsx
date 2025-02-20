import React, { useEffect } from "react";
import { Flex, Divider } from "antd";
import useApplyFilters from "@/customHooks/filters/useApplyFilters";
import LoadingPlaceholder from "@/components/LoadingPlaceholder";
import ErrorPlaceholder from "@/components/Layout/ErrorPlaceholder";
import EmptyPlaceholder from "@/components/Layout/EmptyPlaceholder";


const GenericListPage = ({
  objectType,
  handleNewItemCreate,
  useDataHook,
  ListTableComponent,
}) => {

  const { data: dataRaw, isLoading, error } = useDataHook();
  const { data: items } = dataRaw;

  const { filteredItems } = useApplyFilters(items);

  // If still loading, return a loading state
  const loadingMsg = "Loading table data...";
  if (isLoading) return <LoadingPlaceholder message={loadingMsg} />;

  // If there is an error, display it
  if (error) return <ErrorPlaceholder error={error} />;

  // If data has not been fetched (null or empty), return a message
  if (!filteredItems || filteredItems.length === 0)
    return <EmptyPlaceholder newItem={handleNewItemCreate} />;

  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <ListTableComponent data={filteredItems} />
    </Flex>
  );
};

export default GenericListPage;
