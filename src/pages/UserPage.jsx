import React from "react";
import UserPreview from "@/components/User/Preview";
import UserForm from "@/components/User/Form";
import GenericRecordPage from "@/components/Layout/GenericRecordPage";
import useUserRecord from "@/customHooks/record/useUserRecord";

const UserPage = ({ mode }) => (
  <GenericRecordPage
    objectType="User"
    useContextHook={useUserRecord}
    mode={mode}
    PreviewComponent={UserPreview}
    FormComponent={UserForm}
  />
);

export default UserPage;
