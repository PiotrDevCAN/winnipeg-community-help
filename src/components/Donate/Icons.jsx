import React from "react";
import { Button, Dropdown } from "antd";
import { FaDonate } from "react-icons/fa";
import useDonation from "@/customHooks/useDonation";

const iconStyle = {
  margin: "0 8px",
  // color: '#fff',
  // backgroundColor: '#000',
};

const Icons = () => {
  const { menuContent } = useDonation();

  const menuProps = {
    items: menuContent,
  };

  return (
    <>
      <Dropdown menu={menuProps} trigger={["click"]}>
        <Button
          type="default"
          shape="circle"
          icon={<FaDonate />}
          style={iconStyle}
        />
      </Dropdown>
    </>
  );
};

export default Icons;
