import useDonation from "@/customHooks/useDonation";
import { Button } from "antd";

const buttonStyle = {
  backgroundColor: "#ff813f",
  borderColor: "#ff813f",
  color: "white",
  margin: "0 8px",
};

const BuyMeACoffee = (size = "small") => {
  const { handleBuyCoffee } = useDonation();

  return (
    <Button
      type="primary"
      size={size}
      style={buttonStyle}
      onClick={handleBuyCoffee}
    >
      Buy Me a Coffee
    </Button>
  );
};

export default BuyMeACoffee;
