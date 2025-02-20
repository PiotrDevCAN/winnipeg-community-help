import React from "react";
import { Button } from "antd";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const RemindPassword = ({ type }) => {
  const { remindPassword } = useAppRoutes();
  const handlePasswordRemind = () => {
    remindPassword();
  };

  return (
    <Button
      onClick={handlePasswordRemind}
      block
      type={type || "default"}
      htmlType="submit"
      className={type ? "colorful-background" : ""}
    >
      Remind Password
    </Button>
  );
};
export default RemindPassword;
