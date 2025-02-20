import React from "react";
import { Row, Col } from "antd";
import Volunteer from "@/components/Selects/People/Volunteer";
import Needy from "@/components/Selects/People/Needy";

const PeopleFilter = ({ preSelectedNeedyId, preSelectedVolunteerId }) => {
  return (
    <Row gutter={16}>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <Needy preSelectedId={preSelectedNeedyId} />
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <Volunteer preSelectedId={preSelectedVolunteerId} />
      </Col>
    </Row>
  );
};

export default PeopleFilter;
