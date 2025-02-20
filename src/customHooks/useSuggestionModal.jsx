import React from "react";
import SuggestionModal from "@/components/Modals/SuggestionModal";
import { useSuggestionFormContext } from "@/context/auxiliary/SuggestionFormContext";

const useSuggestionModal = () => {
  const { open, setOpen } = useSuggestionFormContext();

  const showSuggestionModal = () => {
    setOpen(true);
  };
  const hideSuggestionModal = () => {
    setOpen(false);
  };

  const contextHolder = (
    <SuggestionModal
      open={open}
      onOk={hideSuggestionModal}
      onCancel={hideSuggestionModal}
    />
  );

  return { contextHolder, open, showSuggestionModal, hideSuggestionModal };
};

export default useSuggestionModal;
