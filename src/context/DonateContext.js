import React, { createContext, useContext } from 'react';

const DonateContex = createContext();

export const useDonateContex = () => useContext(DonateContex);

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

    const value = {
        handleBuyCoffee,
        handlePayPal
    };

    return (
        <DonateContex.Provider value={value}>
            {children}
        </DonateContex.Provider>
    );
}

export default DonateContex;