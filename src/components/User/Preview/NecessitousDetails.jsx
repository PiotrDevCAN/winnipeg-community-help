import React, { useCallback, useEffect } from "react";
import {
  Card,
  Button,
  Typography,
  Avatar,
  Flex,
  message,
  Skeleton,
} from "antd";
import { TbUserHeart } from "react-icons/tb";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllOffers from "@/components/Buttons/ViewAllOffers";
import ViewAllRequests from "@/components/Buttons/ViewAllRequests";
import useNeedyRecord from "@/customHooks/record/useNeedyRecord";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";
import ViewProfile from "@/components/Buttons/ViewProfile";

const avatarStyle = {
  width: 35,
  height: 35,
};
const { Text } = Typography;

const NeedyPersonDetails = ({ userId }) => {
  const {
    needyDetails: handleDetails,
    requestHelpByNeedy: handleRequests,
    offerHelpByNeedy: handleOffers,
  } = useAppRoutes();

  const {
    selectedRecord: item,
    fetchRecordById,
    loading,
    error,
  } = useNeedyRecord();

  useEffect(() => {
    const loadData = async () => {
      await fetchRecordById(userId);
    };
    if (userId && !item) {
      loadData();
    }
  }, [item, userId, fetchRecordById]);

  useLoadingMessage(loading, "Person in Need");

  if (error) return <p>Error: {error}</p>;

  return !loading ? (
    item ? (
      <Card
        className="card-with-colorful-header"
        title="Needy Person Details"
        actions={[
          <ViewProfile key="1" id={item.id} onClick={handleDetails} />,
          <ViewAllRequests key="2" id={item.id} onClick={handleRequests} />,
          <ViewAllOffers key="3" id={item.id} onClick={handleOffers} />,
        ]}
      >
        <Flex horizontal="true" align="flex-start" justify="space-around">
          <Avatar
            style={{
              backgroundColor: "red",
              verticalAlign: "middle",
            }}
            size={64}
            icon={<TbUserHeart style={avatarStyle} />}
            shape="square"
          />
          <div>
            <p>
              First Name: <Text strong>{item.first_name}</Text>
            </p>
            <p>
              Last Name: <Text strong>{item.last_name}</Text>
            </p>
            <p>
              Nickname: <Text strong>{item.nickname}</Text>
            </p>
            <p>
              E-mail: <Text strong>{item.email}</Text>
            </p>
            <p>
              Phone: <Text strong>{item.phone_number}</Text>
            </p>
            <p>
              Description: <Text strong>{item.description}</Text>
            </p>
          </div>
          <div></div>
        </Flex>
      </Card>
    ) : (
      <Card className="card-with-colorful-header" title="Needy Person Details">
        Unable to retrieve data
      </Card>
    )
  ) : (
    <Skeleton active />
  );
};
export default NeedyPersonDetails;
