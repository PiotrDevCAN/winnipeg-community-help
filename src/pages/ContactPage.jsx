import React from 'react';
import { Card, Flex, Form } from 'antd';
import SuggestionForm from '@/components/SuggestionForm';

const ContactPage = () => {

  const [form] = Form.useForm();

  return (
    <Flex align="center" vertical>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <Card bordered={false}>
          <SuggestionForm form={form} formName="contact" />
        </Card>
      </div>
    </Flex>
  );
};

export default ContactPage;
