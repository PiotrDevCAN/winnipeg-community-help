import React from "react";
import { Button } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const shortCutStyle = {
  margin: "0 8px",
};

const CreateHelpRequest = ({ size }) => {
  const { askForHelp } = useAppRoutes();

  return (
    <Button
      onClick={askForHelp}
      type="primary"
      size={size}
      icon={<AppstoreAddOutlined />}
      style={shortCutStyle}
      className="colorful-background"
    >
      Ask for help
    </Button>
  );
};
export default CreateHelpRequest;
