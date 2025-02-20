import React from "react";
import { Card } from "antd";

import OffersCarusel from "@/components/Carusels/Offer";
import RequestsCarusel from "@/components/Carusels/Request";
import PeopleInNeedCarusel from "@/components/Carusels/PeopleInNeed";
import VolunteersCarusel from "@/components/Carusels/Volunteer";
import CommunitiesCarusel from "@/components/Carusels/Community";

const wrapperStyle = {
  marginBottom: 16,
};

const HomeContentCarusels = () => {
  return (
    <>
      <Card
        title="Help Requests"
        className="gradientBg odd"
        size="small"
        align="center"
        style={wrapperStyle}
      >
        <RequestsCarusel />
      </Card>

      <Card
        title="Help Offers"
        className="gradientBg even"
        size="small"
        align="center"
        style={wrapperStyle}
      >
        <OffersCarusel />
      </Card>

      <Card
        title="People in Need"
        className="gradientBg odd"
        size="small"
        align="center"
        style={wrapperStyle}
      >
        <PeopleInNeedCarusel />
      </Card>

      <Card
        title="Volunteers"
        className="gradientBg odd"
        size="small"
        align="center"
        style={wrapperStyle}
      >
        <VolunteersCarusel />
      </Card>

      <Card
        title="Communities"
        className="gradientBg even"
        size="small"
        align="center"
        style={wrapperStyle}
      >
        <CommunitiesCarusel />
      </Card>
    </>
  );
};

export default HomeContentCarusels;
