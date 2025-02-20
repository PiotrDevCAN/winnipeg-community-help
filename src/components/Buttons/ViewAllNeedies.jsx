import useColorfulButton from "@/customHooks/useColorfulButton";

const ViewAllNeedies = ({ id, onClick }) => {
  return useColorfulButton(1, "All People in Need", id, onClick);
};
export default ViewAllNeedies;
