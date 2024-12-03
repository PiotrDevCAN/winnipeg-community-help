import React from 'react';
import { useParams } from 'react-router-dom';
import { RequestProvider } from '../context/RequestContext';
import { CommunityProvider } from '../context/CommunityContext';
import RequestPreview from '../components/Request/Preview';

const HelpRequestPage = () => {
  const { itemId } = useParams();

  return (
    <RequestProvider>
      <CommunityProvider>
        <RequestPreview itemId={itemId} />
      </CommunityProvider>
    </RequestProvider>
  );
};

export default HelpRequestPage;
