import useColorfulButton from "@/customHooks/useColorfulButton";

const ViewProfile = ({ id, onClick }) => {
  return useColorfulButton(1, "View Profile", id, onClick);
};
export default ViewProfile;
