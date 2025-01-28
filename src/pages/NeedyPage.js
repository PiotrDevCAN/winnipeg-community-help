import React from 'react';
import { useNeedyContext } from '@/context/mainTypes/NeedyContext';
import NeedyPreview from '@/components/Needy/Preview';
import NeedyForm from '@/components/Needy/Form';
import GenericRecordPage from '@/components/Layout/GenericRecordPage';

const NeedyPage = ({ mode }) => (
  <GenericRecordPage
    objectType="Person in Need"
    useContextHook={useNeedyContext}
    mode={mode}
    PreviewComponent={NeedyPreview}
    FormComponent={NeedyForm}
  />
);

export default NeedyPage;
