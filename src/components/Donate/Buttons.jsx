import React from "react";
import { Flex, Tooltip } from "antd";
import BuyMeACoffee from "@/components/Buttons/BuyMeACoffee";
import DonateWithPayPal from "@/components/Buttons/DonateWithPayPal";

const Buttons = (size = "small") => {
  return (
    <Flex justify="center">
      <Tooltip title="Rise new request for help">
        <BuyMeACoffee size={size} />
      </Tooltip>
      <Tooltip title="Tell community you are open to help">
        <DonateWithPayPal size={size} />
      </Tooltip>
    </Flex>
  );
};

export default Buttons;
