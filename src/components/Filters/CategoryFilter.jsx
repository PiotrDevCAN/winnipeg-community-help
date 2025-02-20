import React from "react";
import { Row, Col } from "antd";
import Category from "@/components/Selects/Category/Category";
import Type from "@/components/Selects/Category/Type";

const CategoryFilter = ({ preSelectedId }) => {
  return (
    <Row gutter={16}>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <Category />
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <Type preSelectedId={preSelectedId} />
      </Col>
    </Row>
  );
};

export default CategoryFilter;
