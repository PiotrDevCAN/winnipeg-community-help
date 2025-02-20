import React from "react";
import { Button } from "antd";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const Logout = ({ type }) => {
  const { signOut } = useAppRoutes();
  const handleLogout = () => {
    signOut();
  };

  return (
    <Button
      onClick={handleLogout}
      block
      type={type || "default"}
      htmlType="submit"
      className={type ? "colorful-background" : ""}
    >
      Log out
    </Button>
  );
};
export default Logout;
