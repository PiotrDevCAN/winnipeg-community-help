import React from "react";
import CommunityPreview from "@/components/Community/Preview";
import CommunityForm from "@/components/Community/Form";
import GenericRecordPage from "@/components/Layout/GenericRecordPage";
import useCommunityRecord from "@/customHooks/record/useCommunityRecord";

const CommunityPage = ({ mode }) => (
  <GenericRecordPage
    objectType="Community"
    useContextHook={useCommunityRecord}
    mode={mode}
    PreviewComponent={CommunityPreview}
    FormComponent={CommunityForm}
  />
);

export default CommunityPage;
