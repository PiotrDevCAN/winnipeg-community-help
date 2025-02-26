import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllRequests from "@/components/Buttons/ViewAllRequests";
import useNeedyActions from "@/customHooks/actions/useNeedyActions";
import { useSelector } from "react-redux";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";
import useItemsCounter from "@/customHooks/counters/useItemsCounter";

const { Text } = Typography;

const Requests = ({ item }) => {
  const { numberOfRequests, isLoading: loading, error } = useSelector((state) => state.peopleInNeed);
  const { getRequestsNumber } = useNeedyActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { requestHelpByNeedy } = useAppRoutes();

  useEffect(() => {
    getRequestsNumber(item.id);
  }, [getRequestsNumber, item.id]);

  useLoadingMessage(loading, "Person in Need Help Requests");
  const itemsCounter = useItemsCounter(numberOfRequests);

  if (error) return <p>Error: {error}</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="Needy's Help Requests"
      actions={[
        <ViewAllRequests key="1" id={item.id} onClick={requestHelpByNeedy} />,
      ]}
    >
      <p>List of Help Requests responded by Needy</p>
      <Divider style={dividerStyle} />
      {itemsCounter}
    </Card>
  ) : (
    <Skeleton active />
  );
};
export default Requests;
