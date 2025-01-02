import React from 'react';
import { Flex, Form } from 'antd';
import SuggestionForm from '@/components/SuggestionForm';

const ContactPage = () => {

  const [form] = Form.useForm();

  return (
    <Flex align="center" vertical>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <SuggestionForm form={form} formName="contact" />
      </div>
    </Flex>
  );
};

export default ContactPage;
