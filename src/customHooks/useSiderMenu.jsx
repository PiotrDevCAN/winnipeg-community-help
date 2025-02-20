import { useEffect, useState } from "react";
import useMediaQuery from "@/customHooks/useMediaQuery";

const useSiderMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMobile]);

  return { collapsed, toggleCollapsed };
};
export default useSiderMenu;
