import React from 'react';
import NeedyPreview from '@/components/Needy/Preview';
import NeedyForm from '@/components/Needy/Form';
import GenericRecordPage from '@/components/Layout/GenericRecordPage';
import useNeedyRecord from '@/customHooks/record/useNeedyRecord';

const NeedyPage = ({ mode }) => (
  <GenericRecordPage
    objectType="Person in Need"
    useContextHook={useNeedyRecord}
    mode={mode}
    PreviewComponent={NeedyPreview}
    FormComponent={NeedyForm}
  />
);

export default NeedyPage;
