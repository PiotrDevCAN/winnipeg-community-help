import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllOffers from "@/components/Buttons/ViewAllOffers";
import useVolunteerActions from "@/customHooks/actions/useVolunteerActions";
import { useSelector } from "react-redux";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const Offers = ({ item }) => {
  const { numberOfOffers } = useSelector((state) => state.volunteers);
  const { getOffersNumber, loading, error } = useVolunteerActions();

  const dividerStyle = {
    margin: "8px 0",
  };

  const { offerHelpByVolunteer } = useAppRoutes();

  useEffect(() => {
    getOffersNumber(item.id);
  }, [getOffersNumber, item.id]);

  useLoadingMessage(loading, "Volunteers Help Offers");

  if (error) return <p>Error: {error}</p>;

  return !loading ? (
    <Card
      className="card-with-colorful-header"
      title="Volunteer's Help Offers"
      actions={[
        <ViewAllOffers key="1" id={item.id} onClick={offerHelpByVolunteer} />,
      ]}
    >
      <p>List of Help Offers raised by Volunteer</p>
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
