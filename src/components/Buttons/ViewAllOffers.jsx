import useColorfulButton from "@/customHooks/useColorfulButton";

const ViewAllOffers = ({ id, onClick }) => {
  return useColorfulButton(1, "All Offers", id, onClick);
};
export default ViewAllOffers;
