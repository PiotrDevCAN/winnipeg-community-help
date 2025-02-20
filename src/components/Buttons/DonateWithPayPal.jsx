import React from "react";
import { Button } from "antd";
import useDonation from "@/customHooks/useDonation";

const buttonStyle = {
  backgroundColor: "#0070ba",
  borderColor: "#0070ba",
  color: "white",
  margin: "0 8px",
};

const DonateWithPayPal = (size = "small") => {
  const { handlePayPal } = useDonation();

  return (
    <Button
      type="primary"
      size={size}
      style={buttonStyle}
      onClick={handlePayPal}
    >
      Donate with PayPal
    </Button>
  );
};

export default DonateWithPayPal;
