import React, { useEffect } from "react";
import { Carousel, Col, Descriptions, Row, Skeleton } from "antd";
import { Button, Flex, Typography, Avatar } from "antd";
import { MdOutlineVolunteerActivism } from "react-icons/md";

import useLoadingMessage from "@/customHooks/useLoadingMessage";
import useRequestData from "@/customHooks/data/useRequestData";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";
import ViewRecord from "@/components/Buttons/ViewRecord";

const { Title, Paragraph } = Typography;

const avatarStyle = {
  backgroundColor: "red",
};

const Request = () => {
  const { data, isLoading, error } = useRequestData();
  const { requestHelpDetails } = useAppRoutes();

  const handleCardClick = (id) => {
    requestHelpDetails(id);
  };

  useLoadingMessage(isLoading, "Help Requests");

  if (isLoading) return <Skeleton active />
  if (error) return <p>Error: {error}</p>;

  const caruselData = data.map((item, index) => {
    return [
      {
        label: <Title level={4}>Title</Title>,
        children: <Title level={4}>{item.title}</Title>,
      },
      {
        label: "Category Name",
        children: item.category_name,
      },
      {
        label: "Type Name",
        children: item.type_name,
      },
      {
        label: "Community Name",
        children: item.community_name,
      },
      {
        label: "SubCommunity Name",
        children: item.sub_community_name,
      },
      {
        label: "Description",
        children: item.description,
        // span: 2,
      },
      {
        label: "Status",
        children: item.status,
      },
      {
        label: "Created",
        children: item.created_at,
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
                  icon={<MdOutlineVolunteerActivism />}
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

export default Request;
