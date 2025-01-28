import React from 'react';
import { useUserContext } from '@/context/mainTypes/UserContext';
import UserPreview from '@/components/User/Preview';
import UserForm from '@/components/User/Form';
import GenericRecordPage from '@/components/Layout/GenericRecordPage';

const UserPage = ({ mode }) => (
  <GenericRecordPage
    objectType="User"
    useContextHook={useUserContext}
    mode={mode}
    PreviewComponent={UserPreview}
    FormComponent={UserForm}
  />
);

export default UserPage;
