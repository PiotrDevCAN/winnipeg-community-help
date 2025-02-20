import React from "react";
import { Flex, Button, Card } from "antd";
import { useAuthContext } from "@/context/auth/AuthContext";
import { UserOutlined } from "@ant-design/icons";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const LogoutForm = () => {
  const { logout } = useAuthContext();
  const { home } = useAppRoutes();

  const stayLoggedIn = () => {
    home();
  };

  const handleLogout = async () => {
    try {
      await logout();
      alert("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Card bordered={false}>
        <Button
          onClick={handleLogout}
          type="primary"
          icon={<UserOutlined />}
          className="colorful-background"
        >
          Sign Out
        </Button>
        <Button onClick={stayLoggedIn} type="default" icon={<UserOutlined />}>
          Stay Signed In
        </Button>
      </Card>
    </div>
  );
};
export default LogoutForm;
