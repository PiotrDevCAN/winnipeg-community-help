import useCategoryFilter from "@/customHooks/filters/useCategoryFilter";
import useCommunityFilter from "@/customHooks/filters/useCommunityFilter";
import usePeopleFilter from "@/customHooks/filters/usePeopleFilter";

const useFilters = () => {
    const CategoryFilter = useCategoryFilter();
    const CommunityFilter = useCommunityFilter();
    const PeopleFilter = usePeopleFilter();
    return { CategoryFilter, CommunityFilter, PeopleFilter };
};

export default useFilters;
