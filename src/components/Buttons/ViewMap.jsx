import useColorfulButton from "@/customHooks/useColorfulButton";

const ViewMap = ({ id, onClick }) => {
  return useColorfulButton(1, "View Fullscreen Map", id, onClick);
};
export default ViewMap;
