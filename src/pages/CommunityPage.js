import React from 'react';
import { CommunityProvider } from '@/context/mainTypes/CommunityContext';
import { useCommunityContext } from '@/context/mainTypes/CommunityContext';
import CommunityPreview from '@/components/Community/Preview';
import CommunityForm from '@/components/Community/Form';
import GenericRecordPage from '@/components/Layout/GenericRecordPage';

const CommunityPage = ({ mode }) => (
  <CommunityProvider>
    <GenericRecordPage
      objectType="Community"
      useContextHook={useCommunityContext}
      mode={mode}
      PreviewComponent={CommunityPreview}
      FormComponent={CommunityForm}
    />
  </CommunityProvider>
);

export default CommunityPage;
