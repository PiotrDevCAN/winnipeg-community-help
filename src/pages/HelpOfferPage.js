import React from 'react';
import { useOfferContext, OfferProvider } from '@/context/OfferContext';
import OfferPreview from '@/components/Offer/Preview';
import OfferForm from '@/components/Offer/Form';
import GenericRecordPage from '@/components/Layout/GenericRecordPage';

const HelpOfferPage = ({ mode }) => (
  <OfferProvider>
    <GenericRecordPage
      objectType="offer"
      useContextHook={useOfferContext}
      mode={mode}
      PreviewComponent={OfferPreview}
      FormComponent={OfferForm}
    />
  </OfferProvider>
);

export default HelpOfferPage;
