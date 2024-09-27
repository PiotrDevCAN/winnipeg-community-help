import React from 'react';
import { Flex } from 'antd';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <Flex gap="middle" align="center" vertical>
      <ContactForm />
    </Flex>
  );
};

export default ContactPage;
