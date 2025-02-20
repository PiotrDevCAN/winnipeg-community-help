import useColorfulButton from "@/customHooks/useColorfulButton";

const ViewAllVolunteers = ({ id, onClick }) => {
  return useColorfulButton(1, "All Volunteers", id, onClick);
};
export default ViewAllVolunteers;
