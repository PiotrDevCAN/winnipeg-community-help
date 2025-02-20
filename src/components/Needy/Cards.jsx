import React from "react";
import { Col } from "antd";
import NeedyCard from "@/components/Needy/Card";

const Cards = ({ data, onSelect }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
            <NeedyCard item={item} />
          </Col>
        );
      })}
    </>
  );
};

export default Cards;
