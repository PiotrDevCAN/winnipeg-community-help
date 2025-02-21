import React, { useEffect } from "react";
import { Carousel, Col, Descriptions, Row, Skeleton } from "antd";
import { Button, Flex, Typography, Avatar } from "antd";
import { MdVolunteerActivism } from "react-icons/md";

import useLoadingMessage from "@/customHooks/useLoadingMessage";
import dayjs from "dayjs";
import useOfferData from "@/customHooks/data/useOfferData";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";
import ViewRecord from "../Buttons/ViewRecord";

const { Title, Paragraph } = Typography;

const avatarStyle = {
  backgroundColor: "red",
};

const Offer = () => {
  const { data, isLoading, error } = useOfferData();
  const { offerHelpDetails } = useAppRoutes();

  const handleCardClick = (id) => {
    offerHelpDetails(id);
  };

  useLoadingMessage(isLoading, "Help Offers");

  if (isLoading) return <Skeleton active />
  // if (data.length === 0) return <p>EMPTY: {error}</p>;
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
        children: dayjs(item.created_at).format("YYYY-MM-DD HH:mm:ss"),
      },
    ];
  });

  return !isLoading ? (
    <Carousel autoplay arrows>
      {caruselData.map((item, index) => {
        return (
          <div key={index}>
            <Row gutter={16} align="middle" style={{ margin: "0 32px" }}>
              <Col xs={24} sm={24} md={24} lg={3} xl={3}>
                <Avatar
                  shape="square"
                  size={64}
                  style={avatarStyle}
                  icon={<MdVolunteerActivism />}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                <Descriptions
                  bordered={false}
                  layout="horizontal"
                  column={2}
                  size="default"
                  items={item}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={3} xl={3}>
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

export default Offer;
