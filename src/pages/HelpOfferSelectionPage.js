import React from 'react';
import CategoryTypeSelector from '../components/CategoryTypeSelector';
import OfferForm from '../components/Offer/Form';

const HelpOfferSelectionPage = () => {
  return (
    <CategoryTypeSelector>
      <OfferForm />
    </CategoryTypeSelector>
  );

  // return (
  // <div>
  //   TEST
  //   <LineIcon name="spinner-3" />
  //   About
  //   <LineIcon name="Spinner3" />
  //   Reefe
  //   <LineIcon
  //     name="adobe"
  //     variation="lni"
  //     style={{ fontSize: "1rem", color: "red" }}
  //   />
  //   ewfwerfw
  //   <RegularAdobe />
  //   <RegularZoomOut />
  //   AAA
  // </div>
  // <div>
  //   <h1>Select Help Offer</h1>
  //   <LiniHome size="24" color="blue" />  {/* Correct usage of icon as a React component */}
  //   <LiniUser size="24" color="green" />
  //   <LiniHeart size="24" color="red" /> {/* Heart icon */}
  // </div>
  // );
};

export default HelpOfferSelectionPage;
