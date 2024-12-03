import React from 'react';
import CategoryTypeSelector from '../components/CategoryTypeSelector';
import OfferForm from '../components/Offer/Form';

const HelpOfferSelectionPage = () => {
  return (
    <CategoryTypeSelector>
      <OfferForm />
    </CategoryTypeSelector>
  );
};

export default HelpOfferSelectionPage;
