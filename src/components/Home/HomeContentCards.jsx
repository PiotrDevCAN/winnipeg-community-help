import React, { useEffect, useState } from "react";
import { Flex } from "antd";
import Tile from "@/components/Home/Tile";
import useMediaQuery from "@/customHooks/useMediaQuery";
import useTilesData from "@/customHooks/useTilesData";

const HomeContentCards = () => {
  const [align, setAlign] = useState("flex-end");
  const [size, setSize] = useState("middle"); // large
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { tilesData } = useTilesData();

  useEffect(() => {
    if (isMobile) {
      setSize("middle");
    } else {
      setSize("large");
    }
  }, [isMobile]);

  return (
    <>
      <Flex vertical gap="middle">
        {tilesData.map((item, index) => {
          return <Tile key={index} index={index} item={item} size={size} />;
        })}
      </Flex>
    </>
  );
};

export default HomeContentCards;
