import React, { useCallback, useEffect } from "react";
import {
  Card,
  Button,
  Typography,
  Flex,
  Avatar,
  message,
  Skeleton,
} from "antd";
import { RiUserHeartLine } from "react-icons/ri";
import { useAPIAuthContext } from "@/context/auth/APIAuthContext";
import useLoadingMessage from "@/customHooks/useLoadingMessage";
import ViewAllOffers from "@/components/Buttons/ViewAllOffers";
import ViewAllRequests from "@/components/Buttons/ViewAllRequests";
import useVolunteerRecord from "@/customHooks/record/useVolunteerRecord";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";
import ViewProfile from "@/components/Buttons/ViewProfile";

const avatarStyle = {
  width: 35,
  height: 35,
};
const { Text } = Typography;

const VolunteerDetails = ({ userId }) => {
  const {
    volunteerDetails: handleDetails,
    requestHelpByVolunteer: handleRequests,
    offerHelpByVolunteer: handleOffers,
  } = useAppRoutes();

  const { isReady } = useAPIAuthContext();
  const {
    selectedRecord: item,
    fetchRecordById,
    loading,
    error,
  } = useVolunteerRecord();

  useEffect(() => {
    const loadData = async () => {
      await fetchRecordById(userId);
    };
    if (isReady && userId && !item) {
      loadData();
    }
  }, [isReady, userId]);

  useLoadingMessage(loading, "Volunteer");

  if (error) return <p>Error: {error}</p>;

  return !loading ? (
    item ? (
      <Card
        className="card-with-colorful-header"
        title="Volunteer Details"
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
            icon={<RiUserHeartLine style={avatarStyle} />}
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
      <Card className="card-with-colorful-header" title="Volunteer Details">
        Unable to retrieve data
      </Card>
    )
  ) : (
    <Skeleton active />
  );
};
export default VolunteerDetails;
