import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecordNotFound from '@/components/RecordNotFound';
import FormWrapper from '@/components/FormWrapper';

const GenericRecordPage = ({
  objectType,
  useContextHook,
  mode,
  PreviewComponent,
  FormComponent,
}) => {
  const { itemId } = useParams();
  const isFormMode = mode === "edit" || mode === "new";

  const { item, getItem, loading, error } = useContextHook();

  useEffect(() => {
    const loadData = async () => {
      if (itemId && !item) {
        await getItem(itemId);
      }
    };
    loadData();
  }, [itemId, item, getItem]);

  if (mode !== "new") {
    if (loading) return <p>Loading {objectType}...</p>;
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
