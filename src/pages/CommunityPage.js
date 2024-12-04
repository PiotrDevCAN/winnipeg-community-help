import React from 'react';
import { useParams } from 'react-router-dom';
import { CommunityProvider } from '../context/CommunityContext';
import CommunityPreview from '../components/Community/Preview';

const Page = () => {
  const { itemId } = useParams();

  return (
    <CommunityProvider>
      <CommunityPreview itemId={itemId} />
    </CommunityProvider>
  );
};

export default Page;
