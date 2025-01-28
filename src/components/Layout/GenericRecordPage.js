import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecordNotFound from '@/components/RecordNotFound';
import FormWrapper from '@/components/FormWrapper';
import { useAPIAuth } from '@/context/auth/APIAuthContext';
import useLoadingMessage from '../../customHooks/useLoadingMessage';

const GenericRecordPage = ({
  objectType,
  useContextHook,
  mode,
  PreviewComponent,
  FormComponent,
}) => {
  const { itemId } = useParams();
  const isFormMode = mode === "edit" || mode === "new";

  const { isReady } = useAPIAuth();
  const { item, getItem, loading, error } = useContextHook();

  useEffect(() => {
    const loadData = async () => {
      await getItem(itemId);
    };
    if (isReady && itemId && !item) {
      loadData();
    }
  }, [isReady, itemId]);

  useLoadingMessage(loading, objectType);

  if (mode !== "new") {
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
