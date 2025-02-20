import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllRequests from "@/components/Buttons/ViewAllRequests";
import useVolunteerActions from "@/customHooks/actions/useVolunteerActions";
import { useSelector } from "react-redux";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const Requests = ({ item }) => {
  const { numberOfRequests } = useSelector((state) => state.volunteers);
  const { getRequestsNumber, loading, error } = useVolunteerActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { requestHelpByVolunteer } = useAppRoutes();

  useEffect(() => {
    getRequestsNumber(item.id);
  }, [getRequestsNumber]);

  useLoadingMessage(loading, "Volunteers Help Requests");

  if (error) return <p>Error: {error}</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="Volunteer's Help Requests"
      actions={[
        <ViewAllRequests
          key="1"
          id={item.id}
          onClick={requestHelpByVolunteer}
        />,
      ]}
    >
      <p>List of Help Requests responded by Volunteer</p>
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
