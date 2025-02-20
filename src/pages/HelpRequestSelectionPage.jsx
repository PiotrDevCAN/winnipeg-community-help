import React from "react";
import CategoryTypeSelector from "@/components/CategoryTypeSelector";
import RequestForm from "@/components/Request/Form";

const HelpRequestSelectionPage = () => {
  return (
    <CategoryTypeSelector>
      <RequestForm />
    </CategoryTypeSelector>
  );
};

export default HelpRequestSelectionPage;
