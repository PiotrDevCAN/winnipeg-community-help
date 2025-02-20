import React, { useEffect } from "react";
import { message } from "antd";

const useLoadingMessage = (loading, objectType = "Data", customMessage) => {
  useEffect(() => {
    let hideMessage;

    const messageContent =
      customMessage || `Loading ${objectType} Data, please wait...`;

    if (loading) {
      hideMessage = message.loading(messageContent, 0);
      console.log(`Loading ${objectType}...`);
    } else if (hideMessage) {
      hideMessage();
    }

    return () => {
      if (hideMessage) {
        hideMessage();
      }
    };
  }, [loading, objectType, customMessage]);
};

export default useLoadingMessage;
