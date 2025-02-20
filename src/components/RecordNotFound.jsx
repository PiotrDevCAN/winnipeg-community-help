import React from "react";
import { Button, Result } from "antd";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const RecordNotFound = ({ error }) => {
  const { home } = useAppRoutes();

  return (
    <Result
      status="warning"
      title={error}
      extra={
        <Button onClick={home} type="primary" key="console">
          Go Home
        </Button>
      }
    />
  );
};

export default RecordNotFound;
