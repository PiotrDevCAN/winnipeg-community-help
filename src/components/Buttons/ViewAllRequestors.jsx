import useColorfulButton from "@/customHooks/useColorfulButton";

const ViewAllRequestors = ({ id, onClick }) => {
  return useColorfulButton(1, "All Requestors", id, onClick);
};
export default ViewAllRequestors;
