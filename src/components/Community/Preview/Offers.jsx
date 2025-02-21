import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllOffers from "@/components/Buttons/ViewAllOffers";
import useCommunityActions from "@/customHooks/actions/useCommunityActions";
import { useSelector } from "react-redux";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const Offers = ({ item }) => {
  const { numberOfOffers, isLoading: loading, error } = useSelector((state) => state.communities);
  const { getOffersNumber } = useCommunityActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { offerHelpInCommunity } = useAppRoutes();

  useEffect(() => {
    getOffersNumber(item.community_id);
  }, [getOffersNumber, item.community_id]);

  useLoadingMessage(loading, "Offers in Community");

  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>Loading Help Offers amount in Community data...</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="Help Offers in Community"
      actions={[
        <ViewAllOffers key="1" id={item.id} onClick={offerHelpInCommunity} />,
      ]}
    >
      <p>List of Help Offers in Community</p>
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
