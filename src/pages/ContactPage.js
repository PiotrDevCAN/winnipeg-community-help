import React from 'react';
import { Flex, Divider, Form } from 'antd';
import SuggestionForm from '../components/SuggestionForm';

const ContactPage = () => {

  const [form] = Form.useForm();

  return (
    <Flex align="center" vertical>
      {/* <Divider /> */}
      <SuggestionForm form={form} formName="contact" />
    </Flex>
  );
};

export default ContactPage;
