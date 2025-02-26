import React, { useEffect, useState } from "react";
import { Carousel, Col, Descriptions, Row, Skeleton } from "antd";
import { Button, Flex, Typography, Avatar } from "antd";
import { TbBuildingCommunity } from "react-icons/tb";

import useLoadingMessage from "@/customHooks/useLoadingMessage";
import useLoadingNotification from "@/customHooks/useLoadingNotification";
import useCommunityData from "@/customHooks/data/useCommunityData";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";
import ViewRecord from "@/components/Buttons/ViewRecord";

const { Title, Paragraph } = Typography;

const avatarStyle = {
  backgroundColor: "orange",
};

const Community = () => {
  const { data, isLoading, error } = useCommunityData();
  const { communityDetails } = useAppRoutes();

  const handleCardClick = (id) => {
    communityDetails(id);
  };

  useLoadingMessage(isLoading, "Communities");

  if (isLoading) return <Skeleton active />
  if (error) return <p>Error: {error}</p>;

  const caruselData = data.map((item, index) => {
    return [
      {
        label: <Title level={4}>Name</Title>,
        children: <Title level={4}>{item.label}</Title>,
      },
      {
        label: "Alias",
        children: item.alias,
      },
      {
        label: "Description",
        children: item.description,
        span: 2,
      },
      {
        label: "E-mail",
        children: item.email,
      },
      {
        label: "Website",
        children: item.website,
      },
    ];
  });

  return !isLoading ? (
    <Carousel autoplay arrows>
      {caruselData.map((item, index) => {
        return (
          <div key={index}>
            <Row gutter={16} align="middle" style={{ margin: "0 32px" }}>
              <Col xs={6} sm={2} md={2} lg={2} xl={3}>
                <Avatar
                  shape="square"
                  size={64}
                  style={avatarStyle}
                  icon={<TbBuildingCommunity />}
                />
              </Col>
              <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                <Descriptions
                  bordered={false}
                  layout="horizontal"
                  column={2}
                  size="default"
                  items={item}
                />
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} xl={3}>
                <ViewRecord id={item.id} onClick={handleCardClick} />
              </Col>
            </Row>
          </div>
        );
      })}
    </Carousel>
  ) : (
    <Skeleton active />
  );
};

export default Community;
