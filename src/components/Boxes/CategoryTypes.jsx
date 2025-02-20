import React, { useEffect } from "react";
import { Card, Button, Divider, Typography, Skeleton } from "antd";
import useTypeCategory from "@/customHooks/useTypeCategory";
import ViewAllOffers from "@/components/Buttons/ViewAllOffers";
import ViewAllRequests from "@/components/Buttons/ViewAllRequests";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const CategoryTypes = ({ item }) => {
  const { category, type } = useTypeCategory(item);

  const { requestHelpInType, offerHelpInType } = useAppRoutes();

  const dividerStyle = {
    margin: "8px 0",
  };

  return category && type ? (
    <Card
      className="card-with-colorful-header"
      title="Related Help Category and Type"
      actions={[
        <ViewAllRequests key="1" id={item.id} onClick={requestHelpInType} />,
        <ViewAllOffers key="2" id={item.id} onClick={offerHelpInType} />,
      ]}
    >
      <p>
        Category: <Text strong>{category?.label}</Text>
      </p>
      <p>
        Description: <Text strong>{category?.description}</Text>
      </p>
      <Divider style={dividerStyle} />
      <p>
        Type: <Text strong>{type?.label}</Text>
      </p>
      <p>
        Description: <Text strong>{type?.description}</Text>
      </p>
    </Card>
  ) : (
    <Skeleton active />
  );
};
export default CategoryTypes;
