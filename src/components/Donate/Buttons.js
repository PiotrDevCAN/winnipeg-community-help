import React from "react";
import { Space } from "antd";
import { DonateProvider } from '../../context/DonateContext';
import BuyMeACoffee from "./BuyMeACoffee";
import DonateWithPayPal from "./DonateWithPayPal";

const Buttons = () => {
    return (
        <DonateProvider>
            <Space align="center" size="large">
                <BuyMeACoffee />
                <DonateWithPayPal />
            </Space>
        </DonateProvider>
    );
};

export default Buttons;
