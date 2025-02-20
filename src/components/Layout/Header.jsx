import React, { useMemo, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Row, Col, Button } from "antd";
import icon2Logo from "@/assets/icon2.png";
import useSiderMenu from "@/customHooks/useSiderMenu";

import QuickActionsButtons from "@/components/QuickActions/Buttons";
import QuickActionsIcons from "@/components/QuickActions/Icons";

import DonateButtons from "@/components/Donate/Buttons";
import DonateIcons from "@/components/Donate/Icons";
import UserActions from "@/components/UserActions";

const Header = () => {
  const { collapsed, toggleCollapsed } = useSiderMenu();

  return (
    <>
      <Row gutter={16} align="middle">
        <Col xs={10} sm={10} md={6} lg={4} xl={4}>
          <div className="sider-logo">
            <a href="/">
              <img src={icon2Logo} alt="logo" />
            </a>
          </div>
        </Col>

        <Col xs={0} sm={0} md={14} lg={9} xl={8}>
          <QuickActionsButtons />
        </Col>
        <Col xs={0} sm={0} md={0} lg={10} xl={11}>
          <DonateButtons />
        </Col>

        <Col xs={5} sm={5} md={0} lg={0} xl={0}>
          <Button size="large" type="primary" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Col>
        <Col xs={3} sm={3} md={2} lg={0} xl={0}>
          <QuickActionsIcons />
        </Col>
        <Col xs={3} sm={3} md={0} lg={0} xl={0}>
          <DonateIcons />
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} xl={1}>
          <UserActions />
        </Col>
      </Row>
    </>
  );
};

export default Header;
