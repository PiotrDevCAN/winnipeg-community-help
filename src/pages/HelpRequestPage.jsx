import React from "react";
import GenericRecordPage from "@/components/Layout/GenericRecordPage";
import RequestPreview from "@/components/Request/Preview";
import RequestForm from "@/components/Request/Form";
import useRequestRecord from "@/customHooks/record/useRequestRecord";

const HelpRequestPage = ({ mode }) => (
  <GenericRecordPage
    objectType="Request"
    useContextHook={useRequestRecord}
    mode={mode}
    PreviewComponent={RequestPreview}
    FormComponent={RequestForm}
  />
);

export default HelpRequestPage;
