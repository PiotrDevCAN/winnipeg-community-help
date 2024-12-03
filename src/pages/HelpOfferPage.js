import React from 'react';
import { useParams } from 'react-router-dom';
import { OfferProvider } from '../context/OfferContext';
import { CommunityProvider } from '../context/CommunityContext';
import OfferPreview from '../components/Offer/Preview';

const HelpOfferPage = () => {
  const { itemId } = useParams();

  return (
    <OfferProvider>
      <CommunityProvider>
        <OfferPreview itemId={itemId} />
      </CommunityProvider>
    </OfferProvider>
  );
};

export default HelpOfferPage;
