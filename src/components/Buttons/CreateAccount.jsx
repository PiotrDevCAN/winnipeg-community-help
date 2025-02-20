import React from "react";
import { Button } from "antd";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const CreateAccount = ({ type }) => {
  const { signUp } = useAppRoutes();
  const handleAccountCreate = () => {
    signUp();
  };

  return (
    <Button
      onClick={handleAccountCreate}
      block
      type={type || "default"}
      htmlType="submit"
      className={type ? "colorful-background" : ""}
    >
      Create an Account
    </Button>
  );
};
export default CreateAccount;
