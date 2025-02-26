import React, { useEffect } from "react";
import { useAppNotificationContext } from "@/context/auxiliary/AppNotificationContext";

const notificationEnabled = import.meta.env.VITE_APP_NOTIFICATION;

const useLoadingNotification = (
  loading,
  objectType = "Data",
  customMessage
) => {
  const { showInfo } = useAppNotificationContext();

  useEffect(() => {
    if (notificationEnabled === 'true') {
      const messageContent = customMessage || `Loading ${objectType} Data, please wait...`;

      if (loading) {
        showInfo(messageContent);
      }
    }
  }, [loading, objectType, customMessage]);
};

export default useLoadingNotification;
