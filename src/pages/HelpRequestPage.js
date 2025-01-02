import React from 'react';
import { useRequestContext, RequestProvider } from '@/context/RequestContext';
import GenericRecordPage from '@/components/Layout/GenericRecordPage';
import RequestPreview from '@/components/Request/Preview';
import RequestForm from '@/components/Request/Form';

const HelpRequestPage = ({ mode }) => (
  <RequestProvider>
    <GenericRecordPage
      objectType="request"
      useContextHook={useRequestContext}
      mode={mode}
      PreviewComponent={RequestPreview}
      FormComponent={RequestForm}
    />
  </RequestProvider>
);

export default HelpRequestPage;
