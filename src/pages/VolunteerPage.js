import React from 'react';
import { useVolunteerContext } from '@/context/VolunteerContext';
import VolunteerPreview from '@/components/Volunteer/Preview';
import VolunteerForm from '@/components/Volunteer/Form';
import GenericRecordPage from '@/components/Layout/GenericRecordPage';

const VolunteerPage = ({ mode }) => (
  <GenericRecordPage
    objectType="volunteer"
    useContextHook={useVolunteerContext}
    mode={mode}
    PreviewComponent={VolunteerPreview}
    FormComponent={VolunteerForm}
  />
);

export default VolunteerPage;
