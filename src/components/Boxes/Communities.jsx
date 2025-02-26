import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useCommunity from "@/customHooks/useCommunity";
import ViewAllOffers from "@/components/Buttons/ViewAllOffers";
import ViewAllRequests from "@/components/Buttons/ViewAllRequests";
import ViewAllRequestors from "@/components/Buttons/ViewAllRequestors";
import ViewAllVolunteers from "@/components/Buttons/ViewAllVolunteers";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const Communities = ({ item }) => {
  const { mainCommunity, subCommunity } = useCommunity(item);

  const {
    requestHelpInCommunity,
    offerHelpInCommunity,
    userInCommunity,
    volunteerInCommunity,
  } = useAppRoutes();

  const dividerStyle = {
    margin: "8px 0",
  };

  return mainCommunity && subCommunity ? (
    <Card
      className="card-with-colorful-header"
      title="Related Main and Sub Community"
      actions={[
        <ViewAllRequests
          key="1"
          id={item.id}
          onClick={requestHelpInCommunity}
        />,
        <ViewAllOffers key="1" id={item.id} onClick={offerHelpInCommunity} />,
        <ViewAllRequestors key="1" id={item.id} onClick={userInCommunity} />,
        <ViewAllVolunteers
          key="1"
          id={item.id}
          onClick={volunteerInCommunity}
        />,
      ]}
    >
      <p>
        Main Community: <Text strong>{mainCommunity?.label}</Text>
      </p>
      <p>
        Main Community Description:{" "}
        <Text strong>{mainCommunity?.description}</Text>
      </p>
      <Divider style={dividerStyle} />
      <p>
        Community: <Text strong>{subCommunity?.label}</Text>
      </p>
      <p>
        Alias: <Text strong>{subCommunity?.alias}</Text>
      </p>
      <p>
        Description: <Text strong>{subCommunity?.description}</Text>
      </p>
    </Card>
  ) : (
    <Skeleton active />
  );
};
export default Communities;
