import React, { useEffect } from "react";
import { useAppMessageContext } from "@/context/auxiliary/AppMessageContext";

const messageEnabled = import.meta.env.VITE_APP_MESSAGE;

const useLoadingMessage = (
  loading,
  objectType = "Data",
  customMessage
) => {
  const { messageApi } = useAppMessageContext();

  useEffect(() => {
    if (messageEnabled === 'true') {
      let hideMessage;
      const messageContent = customMessage || `Loading ${objectType} Data, please wait...`;

      if (loading) {
        hideMessage = messageApi.loading(messageContent, 0);
      } else if (hideMessage) {
        hideMessage();
      }

      return () => {
        if (hideMessage) {
          hideMessage();
        }
      };
    }
  }, [loading, objectType, customMessage]);
};

export default useLoadingMessage;
