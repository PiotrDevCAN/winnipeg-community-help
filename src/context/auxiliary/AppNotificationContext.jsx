import React, { createContext, useMemo, useState } from "react";
import useCustomContext from "@/customHooks/useCustomContext";
import { notification } from "antd";

const AppNotificationContext = createContext();
AppNotificationContext.displayName = "App Notification";

export const useAppNotificationContext = () =>
  useCustomContext(AppNotificationContext);

export const AppNotificationProvider = ({ children }) => {
  const [placement, setPlacement] = useState("topRight");
  const [threshold, setThreshold] = useState(3);

  const [notificationApi, contextHolder] = notification.useNotification({
    stack: {
      threshold,
    },
  });

  const showInfo = (customMessage) => {
    notificationApi.info({
      message: `Notification`,
      description: customMessage,
      placement,
    });
  };

  const contextValue = useMemo(
    () => ({
      contextHolder,
      notificationApi,
      placement,
      setPlacement,
      setThreshold,
      showInfo,
    }),
    [contextHolder, notificationApi, placement, setPlacement, setThreshold, showInfo]
  );

  return (
    <AppNotificationContext.Provider value={contextValue}>
      {children}
    </AppNotificationContext.Provider>
  );
};

export default AppNotificationContext;
