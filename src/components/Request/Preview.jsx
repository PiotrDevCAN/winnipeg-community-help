import React from "react";
import { Flex, Row, Col } from "antd";
import { CombinedCommunityProvider } from "@/context/preview/CombinedCommunityContext";
import { CombinedCategoryProvider } from "@/context/preview/CombinedCategoryContext";
import Details from "@/components/Request/Preview/Details";
import Map from "@/components/Request/Preview/Map";
import NeedyPersonDetails from "@/components/User/Preview/NecessitousDetails";
import VolunteerDetails from "@/components/User/Preview/VolunteerDetails";
import Communities from "@/components/Boxes/Communities";
import CategoryTypes from "@/components/Boxes/CategoryTypes";

const Preview = ({ item }) => {
  return (
    <CombinedCommunityProvider>
      <CombinedCategoryProvider>
        <Row gutter={16} style={{ marginBottom: "16px" }}>
          <Col xs={20} sm={16} md={12} lg={12} xl={12}>
            <Flex gap="middle" vertical style={{ height: "100%" }}>
              <Details item={item} />
              <Map item={item} />
            </Flex>
          </Col>
          <Col xs={20} sm={16} md={12} lg={12} xl={12}>
            <Flex gap="middle" vertical>
              <NeedyPersonDetails userId={item.in_need_id} />
              <VolunteerDetails userId={item.volunteer_id} />
              <Communities item={item} />
              <CategoryTypes item={item} />
            </Flex>
          </Col>
        </Row>
      </CombinedCategoryProvider>
    </CombinedCommunityProvider>
  );
};
export default Preview;
