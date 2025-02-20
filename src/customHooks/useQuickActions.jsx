import {
  MdOutlineVolunteerActivism,
  MdVolunteerActivism,
} from "react-icons/md";
import { RiUserHeartLine } from "react-icons/ri";
import { TbBuildingCommunity } from "react-icons/tb";
import { QuestionCircleOutlined } from "@ant-design/icons";
import useSuggestionModal from "@/customHooks/useSuggestionModal";
import useAppRoutes from "@/customHooks/routes/useAppRoutesHandlers";

const useQuickActions = () => {
  const { askForHelp, offerHelp, newVolunteer, newCommunity } = useAppRoutes();
  const { showSuggestionModal } = useSuggestionModal();

  const menuContent = [
    {
      label: "Quick Actions",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      label: "New help request",
      onClick: askForHelp,
      icon: <MdOutlineVolunteerActivism />,
    },
    {
      label: "New help offer",
      onClick: offerHelp,
      icon: <MdVolunteerActivism />,
    },
    {
      label: "New volunteer",
      onClick: newVolunteer,
      icon: <RiUserHeartLine />,
    },
    {
      label: "New community",
      onClick: newCommunity,
      icon: <TbBuildingCommunity />,
    },
    {
      label: "Send suggestion",
      onClick: showSuggestionModal,
      icon: <QuestionCircleOutlined />,
    },
  ];

  return { menuContent };
};

export default useQuickActions;
