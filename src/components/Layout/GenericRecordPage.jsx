import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecordNotFound from "@/components/RecordNotFound";
import FormWrapper from "@/components/FormWrapper";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import { Skeleton } from "antd";

const GenericRecordPage = ({
  objectType,
  useContextHook,
  mode,
  PreviewComponent,
  FormComponent,
}) => {
  const { itemId } = useParams();
  const isFormMode = mode === "edit" || mode === "new";

  const {
    fetchRecordById,
    // addRecord,
    // modifyRecord,
    // removeRecord,
    selectedRecord: item,
    // error: errorMsg,
    isError: error,
    isLoading,
    // status,
  } = useContextHook();

  useEffect(() => {
    const loadData = async () => {
      await fetchRecordById(itemId);
    };
    if (itemId && !item) {
      loadData();
    }
  }, [item, itemId, fetchRecordById]);

  useLoadingMessage(isLoading, objectType);

  if (mode !== "new") {
    if (isLoading) return <Skeleton active />;
    if (error) return <RecordNotFound error={error} />;
    if (!item) return <p>Record data not ready yet</p>;
  }

  return (
    <>
      {isFormMode ? (
        <FormWrapper>
          <FormComponent item={item} mode={mode} />
        </FormWrapper>
      ) : (
        <PreviewComponent item={item} />
      )}
    </>
  );
};

export default GenericRecordPage;
