import React from "react";
import { Avatar, Divider, Card, Typography } from "antd";
import { TbBuildingCommunity } from "react-icons/tb";
import dayjs from "dayjs";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const { Meta } = Card;

const cardStyle = {
  marginBottom: 16,
};

const avatarStyle = {
  width: 35,
  height: 35,
};

const dividerStyle = {
  margin: "8px 0",
};

const { Text } = Typography;

const CommunityCard = ({ item }) => {
  const { communityDetails } = useAppRoutes();
  const handleCardClick = (id) => {
    communityDetails(id);
  };
  const formattedDate = dayjs(item.created_at).format("YYYY-MM-DD HH:mm:ss");

  return (
    <Card
      title="Community Card"
      className="card-with-colorful-header"
      hoverable
      style={cardStyle}
      onClick={() => handleCardClick(item.id)}
    >
      <Meta
        avatar={
          <Avatar
            style={{
              backgroundColor: "orange",
              verticalAlign: "middle",
            }}
            size={48}
            icon={<TbBuildingCommunity style={avatarStyle} />}
            shape="square"
          />
        }
        title={item.label}
        description={
          <>
            <p>
              Main Community: <Text strong>{item.alias}</Text>
            </p>
            <p>
              Alias: <Text strong>{item.alias}</Text>
            </p>
            <Divider style={dividerStyle} />
            <p>
              E-mail: <Text strong>{item.email}</Text>
            </p>
            <p>
              Phone Number: <Text strong>{item.phone_number}</Text>
            </p>
            <p>
              Website: <Text strong>{item.website}</Text>
            </p>
            <p>
              Description: <Text strong>{item.description}</Text>
            </p>
            <p>
              Created: <Text strong>{formattedDate}</Text>
            </p>
          </>
        }
      />
    </Card>
  );
};
export default CommunityCard;
