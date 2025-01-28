import React, { createContext, useMemo } from 'react';
import useCustomContext from '@/customHooks/useCustomContext';

const DonateContex = createContext();
DonateContex.displayName = 'Donate';

export const useDonateContex = () => useCustomContext(DonateContex);

export const DonateProvider = ({ children }) => {

    const openInNewTab = (url) => {
        const absoluteUrl = `${url}`;
        window.open(absoluteUrl, "_blank");
    };

    const handleBuyCoffee = () => {
        const url = "https://buymeacoffee.com/piotrdevcan";
        openInNewTab(url);
    };

    const handlePayPal = () => {
        const url = "https://www.paypal.com/donate?hosted_button_id=UVEL5JGMRSEZ4";
        openInNewTab(url);
    };

    const contextValue = useMemo(() => ({
        handleBuyCoffee,
        handlePayPal
    }), []);

    return (
        <DonateContex.Provider value={contextValue}>
            {children}
        </DonateContex.Provider>
    );
}

export default DonateContex;