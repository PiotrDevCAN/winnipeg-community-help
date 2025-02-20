import React from "react";
import { Button } from "antd";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const ResetPassword = ({ type }) => {
  const { resetPassword } = useAppRoutes();
  const handlePasswordRemind = () => {
    resetPassword();
  };

  return (
    <Button
      onClick={handlePasswordRemind}
      block
      type={type || "default"}
      htmlType="submit"
      className={type ? "colorful-background" : ""}
    >
      Reset Password
    </Button>
  );
};
export default ResetPassword;
