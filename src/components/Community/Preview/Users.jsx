import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllUsers from "@/components/Buttons/ViewAllUsers";
import useCommunityActions from "@/customHooks/actions/useCommunityActions";
import { useSelector } from "react-redux";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const Users = ({ item }) => {
  const { numberOfUsers } = useSelector(
    (state) => state.communities
  );
  const { getUsersNumber, loading, error } = useCommunityActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { userInCommunity } = useAppRoutes();

  useEffect(() => {
    getUsersNumber(item.community_id);
  }, [getUsersNumber]);

  useLoadingMessage(loading, "Users in Community");

  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>Loading Users amount in Community data...</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="Users in Community"
      actions={[
        <ViewAllUsers key="1" id={item.id} onClick={userInCommunity} />,
      ]}
    >
      <p>List of Users in Community</p>
      <Divider style={dividerStyle} />
      <p>
        Number of items: <Text strong>{numberOfUsers}</Text>
      </p>
    </Card>
  ) : (
    <Skeleton active />
  );
};
export default Users;
