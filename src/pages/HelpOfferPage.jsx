import React from "react";
import OfferPreview from "@/components/Offer/Preview";
import OfferForm from "@/components/Offer/Form";
import GenericRecordPage from "@/components/Layout/GenericRecordPage";
import useOfferRecord from "@/customHooks/record/useOfferRecord";

const HelpOfferPage = ({ mode }) => (
  <GenericRecordPage
    objectType="Offer"
    useContextHook={useOfferRecord}
    mode={mode}
    PreviewComponent={OfferPreview}
    FormComponent={OfferForm}
  />
);

export default HelpOfferPage;
