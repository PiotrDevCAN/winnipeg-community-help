import React from "react";
import { Button, Result } from "antd";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const AdminAccessOnly = () => {
  const { home } = useAppRoutes();

  return (
    <Result
      status="warning"
      title="Admin Access Only"
      extra={
        <Button onClick={home} type="primary" key="console">
          Go Home
        </Button>
      }
    />
  );
};

export default AdminAccessOnly;
