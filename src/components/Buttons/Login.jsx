import React from "react";
import { Button } from "antd";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const Login = ({ type }) => {
  const { signIn } = useAppRoutes();
  const handleLogin = () => {
    signIn();
  };

  return (
    <Button
      onClick={handleLogin}
      block
      type={type || "default"}
      htmlType="submit"
      className={type ? "colorful-background" : ""}
    >
      Log in
    </Button>
  );
};
export default Login;
