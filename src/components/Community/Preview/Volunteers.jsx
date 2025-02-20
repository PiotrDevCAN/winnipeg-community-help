import React, { useEffect, useState } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllVolunteers from "@/components/Buttons/ViewAllVolunteers";
import useCommunityActions from "@/customHooks/actions/useCommunityActions";
import { useSelector } from "react-redux";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const Volunteers = ({ item }) => {
  const { numberOfVolunteers } = useSelector(
    (state) => state.communities
  );
  const { getVolunteersNumber, loading, error } = useCommunityActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { volunteerInCommunity } = useAppRoutes();

  useEffect(() => {
    getVolunteersNumber(item.community_id);
  }, [getVolunteersNumber]);

  useLoadingMessage(loading, "Volunteers in Community");

  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>Loading Volunteers amount in Community data...</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="Volunteers in Community"
      actions={[
        <ViewAllVolunteers
          key="1"
          id={item.id}
          onClick={volunteerInCommunity}
        />,
      ]}
    >
      <p>List of Volunteers in Community</p>
      <Divider style={dividerStyle} />
      <p>
        Number of items: <Text strong>{numberOfVolunteers}</Text>
      </p>
    </Card>
  ) : (
    <Skeleton active />
  );
};
export default Volunteers;
