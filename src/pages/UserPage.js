import React from 'react';
import { useUserContext } from '@/context/UserContext';
import UserPreview from '@/components/User/Preview';
import UserForm from '@/components/User/Form';
import GenericRecordPage from '@/components/Layout/GenericRecordPage';

const UserPage = ({ mode }) => (
  <GenericRecordPage
    objectType="user"
    useContextHook={useUserContext}
    mode={mode}
    PreviewComponent={UserPreview}
    FormComponent={UserForm}
  />
);

export default UserPage;
