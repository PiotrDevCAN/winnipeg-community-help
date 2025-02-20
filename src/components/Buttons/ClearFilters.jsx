import useColorfulButton from "@/customHooks/useColorfulButton";

const ClearFilters = ({ id, onClick }) => {
  return useColorfulButton(1, "Clear filters", id, onClick);
};
export default ClearFilters;
