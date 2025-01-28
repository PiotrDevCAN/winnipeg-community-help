import React from "react";
import { Button } from "antd";
import { useDonateContex } from '@/context/auxiliary/DonateContext';

const buttonStyle = {
  backgroundColor: "#0070ba",
  borderColor: "#0070ba",
  color: "white"
}

const DonateWithPayPal = () => {

  const { handlePayPal } = useDonateContex();

  return (
    <Button
      type="primary"
      size="large"
      style={buttonStyle}
      onClick={handlePayPal}
    >
      Donate with PayPal
    </Button>
  );
};

export default DonateWithPayPal;
