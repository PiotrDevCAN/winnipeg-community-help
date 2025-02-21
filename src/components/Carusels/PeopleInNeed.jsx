import React, { useEffect } from "react";
import { Carousel, Col, Descriptions, Row, Skeleton } from "antd";
import { Button, Flex, Typography, Avatar } from "antd";
import { TbUserHeart } from "react-icons/tb";

import useLoadingMessage from "@/customHooks/useLoadingMessage";
import useNeedyData from "@/customHooks/data/useNeedyData";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Title, Paragraph } = Typography;

const avatarStyle = {
  backgroundColor: "teal",
};

const PeopleInNeed = () => {
  const { data, loading, error } = useNeedyData();
  const { volunteerDetails } = useAppRoutes();

  const handleCardClick = (id) => {
    volunteerDetails(id);
  };

  useLoadingMessage(loading, "Volunteers");

  if (data.length === 0) return <p>EMPTY: {error}</p>;
  if (error) return <p>Error: {error}</p>;

  const caruselData = data.data.map((item, index) => {
    return [
      {
        label: <Title level={4}>Full Name</Title>,
        children: (
          <Title level={4}>
            {item.first_name} {item.last_name}
          </Title>
        ),
      },
      {
        label: "Nickname",
        children: item.nickname,
      },
      {
        label: "E-mail",
        children: item.email,
      },
      {
        label: "Description",
        children: item.description,
        // span: 2,
      },
      {
        label: "Website",
        children: item.website,
      },
    ];
  });

  return !loading ? (
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
                  icon={<TbUserHeart />}
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
                <Button
                  type="primary"
                  size="large"
                  onClick={() => handleCardClick(item.id)}
                >
                  View
                </Button>
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

export default PeopleInNeed;
