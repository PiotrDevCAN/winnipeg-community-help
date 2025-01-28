import React, { createContext, useMemo } from 'react';
import useCustomContext from '@/customHooks/useCustomContext';
import { message } from 'antd';

const AppMessageContext = createContext();
AppMessageContext.displayName = 'App Message';

export const useAppMessageContext = () => useCustomContext(AppMessageContext);

export const AppMessageProvider = ({ children }) => {

    const [messageApi, contextHolder] = message.useMessage();

    const contextValue = useMemo(() => ({
        contextHolder,
        messageApi,
    }), []);

    return (
        <AppMessageContext.Provider value={contextValue}>
            {children}
        </AppMessageContext.Provider>
    );
}

export default AppMessageContext;