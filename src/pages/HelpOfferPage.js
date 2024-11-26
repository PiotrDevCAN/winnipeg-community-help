import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import OfferForm from '../components/Offer/Form';

const HelpOfferPage = () => {
  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <OfferForm />
    </Flex>
  );
};

export default HelpOfferPage;
