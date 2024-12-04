import React from 'react';
import { useParams } from 'react-router-dom';
import { VolunteerProvider } from '../context/VolunteerContext';
import VolunteerPreview from '../components/Volunteer/Preview';

const VolunteerPage = () => {
  const { itemId } = useParams();

  return (
    <VolunteerProvider>
      <VolunteerPreview itemId={itemId} />
    </VolunteerProvider>
  );
};

export default VolunteerPage;
