import React from "react";
import { Button, Card, Typography, Divider, Skeleton } from "antd";
import useCommunity from "@/customHooks/useCommunity";
import useTypeCategory from "@/customHooks/useTypeCategory";
import dayjs from "dayjs";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Text } = Typography;

const Details = ({ item }) => {
  const { mainCommunity, subCommunity } = useCommunity(item);
  const { category, type } = useTypeCategory(item);

  const { offerHelpEdit } = useAppRoutes();
  const handleEditClick = (id) => {
    offerHelpEdit(id);
  };

  const dividerStyle = {
    margin: "8px 0",
  };
  const formattedDate = dayjs(item.created_at).format("YYYY-MM-DD HH:mm:ss");

  return mainCommunity && subCommunity && category && type ? (
    <Card
      className="card-with-colorful-header"
      title="Help Offer Details"
      actions={[
        <Button
          key="1"
          type="primary"
          size="default"
          onClick={() => handleEditClick(item.id)}
          className="colorful-background"
        >
          Edit Record
        </Button>,
      ]}
    >
      <p>
        Title: <Text strong>{item.title}</Text>
      </p>
      <p>
        Description: <Text strong>{item.description}</Text>
      </p>
      <p>
        Status: <Text strong>{item.status}</Text>
      </p>
      <p>
        Created: <Text strong>{formattedDate}</Text>
      </p>
      <Divider style={dividerStyle} />
      <p>
        Community: <Text strong>{mainCommunity.label}</Text>
      </p>
      <p>
        Sub Community: <Text strong>{subCommunity.label}</Text>
      </p>
      <Divider style={dividerStyle} />
      <p>
        Category: <Text strong>{category.label}</Text>
      </p>
      <p>
        Type: <Text strong>{type.label}</Text>
      </p>
    </Card>
  ) : (
    // <Skeleton active />
    <>Not loaded yet</>
  );
};
export default Details;
