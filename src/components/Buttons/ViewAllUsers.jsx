import useColorfulButton from "@/customHooks/useColorfulButton";

const ViewAllUsers = ({ id, onClick }) => {
  return useColorfulButton(1, "All Users", id, onClick);
};
export default ViewAllUsers;
