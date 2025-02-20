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
    if (itemId && !item) {
      fetchRecordById(itemId);
    }
  }, [item, itemId]);

  useLoadingMessage(isLoading, objectType);

  if (mode !== "new") {
    if (error) return <RecordNotFound error={error} />;
    // if (!item) return <p>Record data not ready yet</p>;
    if (!item || isLoading) return <Skeleton active />;
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
