import React from "react";
import { Button } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const shortCutStyle = {
  margin: "0 8px",
};

const CreateHelpOffer = ({ size }) => {
  const { offerHelp } = useAppRoutes();

  return (
    <Button
      onClick={offerHelp}
      type="primary"
      size={size}
      icon={<AppstoreAddOutlined />}
      style={shortCutStyle}
      className="colorful-background"
    >
      Offer help
    </Button>
  );
};
export default CreateHelpOffer;
