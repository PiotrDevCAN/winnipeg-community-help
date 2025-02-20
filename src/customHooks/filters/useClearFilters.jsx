import useFilters from "@/customHooks/filters/useFilters";

const useClearFilters = () => {
  const { CategoryFilter, CommunityFilter, PeopleFilter } = useFilters();
  const { updateCategory } = CategoryFilter;
  const { updateCommunity } = CommunityFilter;
  const { updateNeedy, updateVolunteer } = PeopleFilter;

  const handleClearFilters = () => {
    // clear categories
    updateCategory(null, null);

    // clear communities
    updateCommunity(null, null);

    // clear people
    updateNeedy(null);
    updateVolunteer(null);
  };

  return { handleClearFilters };
};

export default useClearFilters;
