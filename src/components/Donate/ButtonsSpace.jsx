import React from "react";
import { Space } from "antd";
import BuyMeACoffee from "@/components/Buttons/BuyMeACoffee";
import DonateWithPayPal from "@/components/Buttons/DonateWithPayPal";

const ButtonsSpace = () => {
  return (
    <Space align="center" size="large">
      <BuyMeACoffee />
      <DonateWithPayPal />
    </Space>
  );
};

export default ButtonsSpace;
