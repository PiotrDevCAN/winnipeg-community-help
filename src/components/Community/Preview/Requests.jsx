import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllRequests from "@/components/Buttons/ViewAllRequests";
import useCommunityActions from "@/customHooks/actions/useCommunityActions";
import { useSelector } from "react-redux";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";
import useItemsCounter from "@/customHooks/counters/useItemsCounter";

const { Text } = Typography;

const Requests = ({ item }) => {
  const { numberOfRequests, isLoading: loading, error } = useSelector((state) => state.communities);
  const { getRequestsNumber } = useCommunityActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { requestHelpInCommunity } = useAppRoutes();

  useEffect(() => {
    getRequestsNumber(item.community_id);
  }, [getRequestsNumber, item.community_id]);

  useLoadingMessage(loading, "Help Requests in Community");
  const itemsCounter = useItemsCounter(numberOfRequests);

  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>Loading Help Requests amount in Community data...</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="Help Requests in Community"
      actions={[
        <ViewAllRequests
          key="1"
          id={item.id}
          onClick={requestHelpInCommunity}
        />,
      ]}
    >
      <p>List of Help Requests in Community</p>
      <Divider style={dividerStyle} />
      {itemsCounter}
    </Card>
  ) : (
    <Skeleton active />
  );
};
export default Requests;
