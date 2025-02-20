import React from "react";
import { Card, Button } from "antd";
import PreviewMap from "@/components/Map/PreviewMap";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";
import { useAppNotificationContext } from "@/context/auxiliary/AppNotificationContext";
import ViewMap from "@/components/Buttons/ViewMap";

const Map = ({ item }) => {
  const { showInfo } = useAppNotificationContext();

  const { communityEdit } = useAppRoutes();
  const handleMapPreview = () => {
    showInfo("Functionality not implemented yet");
  };

  return (
    <Card
      className="card-with-colorful-header"
      title="Map Card"
      actions={[<ViewMap key="1" id={item.id} onClick={handleMapPreview} />]}
    >
      <div id="map-container">
        <PreviewMap />
      </div>
    </Card>
  );
};
export default Map;
