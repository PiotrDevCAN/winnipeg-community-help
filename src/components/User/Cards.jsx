import React from "react";
import { Col } from "antd";
import UserCard from "@/components/User/Card";

const Cards = ({ data, onSelect }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
            <UserCard item={item} />
          </Col>
        );
      })}
    </>
  );
};

export default Cards;
