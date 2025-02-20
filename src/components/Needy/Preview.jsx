import React from "react";
import { Flex, Row, Col } from "antd";
import { CombinedCommunityProvider } from "@/context/preview/CombinedCommunityContext";
import Details from "@/components/Needy/Preview/Details";
import Map from "@/components/Needy/Preview/Map";
import Requests from "@/components/Needy/Preview/Requests";
import Offers from "@/components/Needy/Preview/Offers";
import Communities from "@/components/Boxes/Communities";

const Preview = ({ item }) => {
  return (
    <CombinedCommunityProvider>
      <Row gutter={16} style={{ marginBottom: "16px" }}>
        <Col xs={20} sm={16} md={12} lg={12} xl={12}>
          <Flex gap="middle" vertical style={{ height: "100%" }}>
            <Details item={item} />
            <Map item={item} />
          </Flex>
        </Col>
        <Col xs={20} sm={16} md={12} lg={12} xl={12}>
          <Flex gap="middle" vertical>
            <Offers item={item} />
            <Requests item={item} />
            <Communities item={item} />
          </Flex>
        </Col>
      </Row>
    </CombinedCommunityProvider>
  );
};
export default Preview;
