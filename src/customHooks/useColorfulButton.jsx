import React from "react";
import { Button } from "antd";

const useColorfulButton = (key, label, id, onClick) => {
  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <Button
      key={key}
      type="primary"
      size="default"
      onClick={handleOnClick}
      className="colorful-background"
    >
      {label}
    </Button>
  );
};

export default useColorfulButton;
