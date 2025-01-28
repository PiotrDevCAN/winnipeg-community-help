import React, { useEffect } from 'react';
import { useAppNotificationContext } from '@/context/auxiliary/AppNotificationContext';

const useLoadingNotification = (loading, objectType = 'Data', customMessage) => {

    const { showInfo } = useAppNotificationContext();

    useEffect(() => {
        const messageContent = customMessage || `Loading ${objectType} Data, please wait...`;

        if (loading) {
            showInfo(messageContent);
        }

    }, [loading, objectType, customMessage]);
};

export default useLoadingNotification;
