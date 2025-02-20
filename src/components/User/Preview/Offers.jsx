import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllOffers from "@/components/Buttons/ViewAllOffers";
import useUserActions from "@/customHooks/actions/useUserActions";
import { useSelector } from "react-redux";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const Offers = ({ item }) => {
  const { numberOfOffers } = useSelector((state) => state.users);
  const { getOffersNumber, loading, error } = useUserActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { offerHelpByNeedy } = useAppRoutes();

  useEffect(() => {
    getOffersNumber(item.id);
  }, [getOffersNumber]);

  useLoadingMessage(loading, "Users Help Offers");

  if (error) return <p>Error: {error}</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="User's Help Offers"
      actions={[
        <ViewAllOffers key="1" id={item.id} onClick={offerHelpByNeedy} />,
      ]}
    >
      <p>List of Help Offers responded by User</p>
      <Divider style={dividerStyle} />
      <p>
        Number of items: <Text strong>{numberOfOffers}</Text>
      </p>
    </Card>
  ) : (
    <Skeleton active />
  );
};
export default Offers;
