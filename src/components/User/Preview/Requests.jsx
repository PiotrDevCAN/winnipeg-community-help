import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllRequests from "@/components/Buttons/ViewAllRequests";
import useUserActions from "@/customHooks/actions/useUserActions";
import { useSelector } from "react-redux";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const Requests = ({ item }) => {
  const { numberOfRequests } = useSelector((state) => state.users);
  const { getRequestsNumber, loading, error } = useUserActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { requestHelpByNeedy } = useAppRoutes();
  const handleViewRequests = (id) => {
    requestHelpByNeedy(id);
  };

  useEffect(() => {
    getRequestsNumber(item.id);
  }, [getRequestsNumber]);

  useLoadingMessage(loading, "Users Help Requests");

  if (error) return <p>Error: {error}</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="User's Help Requests"
      actions={[
        <ViewAllRequests key="1" id={item.id} onClick={requestHelpByNeedy} />,
      ]}
    >
      <p>List of Help Requests raised by User</p>
      <Divider style={dividerStyle} />
      <p>
        Number of items: <Text strong>{numberOfRequests}</Text>
      </p>
    </Card>
  ) : (
    <Skeleton active />
  );
};
export default Requests;
