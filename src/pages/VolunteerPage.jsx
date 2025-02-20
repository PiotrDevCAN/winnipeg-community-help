import React from 'react';
import VolunteerPreview from '@/components/Volunteer/Preview';
import VolunteerForm from '@/components/Volunteer/Form';
import GenericRecordPage from '@/components/Layout/GenericRecordPage';
import useVolunteerRecord from '@/customHooks/record/useVolunteerRecord';

const VolunteerPage = ({ mode }) => (
  <GenericRecordPage
    objectType="Volunteer"
    useContextHook={useVolunteerRecord}
    mode={mode}
    PreviewComponent={VolunteerPreview}
    FormComponent={VolunteerForm}
  />
);

export default VolunteerPage;
