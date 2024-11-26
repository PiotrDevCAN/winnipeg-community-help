import React from "react";
import { Button } from "antd";
import { useDonateContex } from '../../context/DonateContext';

const buttonStyle = {
  backgroundColor: "#ff813f",
  borderColor: "#ff813f",
  color: "white"
}

const BuyMeACoffee = () => {

  const { handleBuyCoffee } = useDonateContex();

  return (
    <Button
      type="primary"
      size="large"
      style={buttonStyle}
      onClick={handleBuyCoffee}
    >
      Buy Me a Coffee
    </Button>
  );
};

export default BuyMeACoffee;
