import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllOffers from "@/components/Buttons/ViewAllOffers";
import useNeedyActions from "@/customHooks/actions/useNeedyActions";
import { useSelector } from "react-redux";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";
import useItemsCounter from "@/customHooks/counters/useItemsCounter";

const { Text } = Typography;

const Offers = ({ item }) => {
  const { numberOfOffers, isLoading: loading, error } = useSelector((state) => state.peopleInNeed);
  const { getOffersNumber } = useNeedyActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { offerHelpByNeedy } = useAppRoutes();

  useEffect(() => {
    getOffersNumber(item.id);
  }, [getOffersNumber, item.id]);

  useLoadingMessage(loading, "Person in Need Help Offers");
  const itemsCounter = useItemsCounter(numberOfOffers);

  if (error) return <p>Error: {error}</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="Needy's Help Offers"
      actions={[
        <ViewAllOffers key="1" id={item.id} onClick={offerHelpByNeedy} />,
      ]}
    >
      <p>List of Help Offers raised by Needy</p>
      <Divider style={dividerStyle} />
      {itemsCounter}
    </Card>
  ) : (
    <Skeleton active />
  );
};
export default Offers;
