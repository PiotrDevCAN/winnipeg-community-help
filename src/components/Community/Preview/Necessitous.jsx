import React, { useEffect, useState } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllNeedies from "@/components/Buttons/ViewAllNeedies";
import { useSelector } from "react-redux";
import useCommunityActions from "@/customHooks/actions/useCommunityActions";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const PeopleInNeed = ({ item }) => {
  const { numberOfPeopleInNeed } = useSelector(
    (state) => state.communities
  );
  const { getPeopleInNeedNumber, loading, error } = useCommunityActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { needyInCommunity } = useAppRoutes();

  useEffect(() => {
    getPeopleInNeedNumber(item.community_id);
  }, [getPeopleInNeedNumber, item.community_id]);

  useLoadingMessage(loading, "People in Need in Community");

  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>Loading People in Need amount in Community data...</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="People in Need in Community"
      actions={[
        <ViewAllNeedies key="1" id={item.id} onClick={needyInCommunity} />,
      ]}
    >
      <p>List of People in Need in Community</p>
      <Divider style={dividerStyle} />
      <p>
        Number of items: <Text strong>{numberOfPeopleInNeed}</Text>
      </p>
    </Card>
  ) : (
    <Skeleton active />
  );
};
export default PeopleInNeed;
