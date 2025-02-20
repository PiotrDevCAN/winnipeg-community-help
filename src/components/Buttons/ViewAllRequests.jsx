import useColorfulButton from "@/customHooks/useColorfulButton";

const ViewAllRequests = ({ id, onClick }) => {
  return useColorfulButton(1, "All Requests", id, onClick);
};
export default ViewAllRequests;
