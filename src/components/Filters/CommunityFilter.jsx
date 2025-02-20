import React from "react";
import { Row, Col } from "antd";
import MainCommunity from "@/components/Selects/Community/MainCommunity";
import SubCommunity from "@/components/Selects/Community/SubCommunity";

const CommunityFilter = ({ preSelectedId }) => {
  return (
    <Row gutter={16}>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <MainCommunity />
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <SubCommunity preSelectedId={preSelectedId} />
      </Col>
    </Row>
  );
};

export default CommunityFilter;
