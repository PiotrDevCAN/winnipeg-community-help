import useColorfulButton from "@/customHooks/useColorfulButton";

const ViewRecord = ({ id, onClick }) => {
  return useColorfulButton(1, "View", id, onClick);
};
export default ViewRecord;
