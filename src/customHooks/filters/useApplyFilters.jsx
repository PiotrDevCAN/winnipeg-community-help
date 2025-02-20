import { useEffect, useState } from "react";
import useFilters from "@/customHooks/filters/useFilters";

const useApplyFilters = (items) => {
  const { CategoryFilter, CommunityFilter, PeopleFilter } = useFilters();
  const { selectedCategoryId: catId, selectedTypeId: typeId } = CategoryFilter;
  const { selectedCommunityId: communityId, selectedSubCommunityId: subCommunityId } = CommunityFilter;
  const { selectedNeedyId: userId, selectedVolunteerId: volunteerId } = PeopleFilter;

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (items && items.length !== 0) {
      setFilteredItems(items);
    }
  }, [items, catId, typeId, communityId, subCommunityId, userId, volunteerId]);

  useEffect(() => {
    if (catId) {
      setFilteredItems(items.filter(item => item.category_id === catId));
    }
    if (typeId) {
      setFilteredItems(items.filter(item => item.type_id === typeId));
    }
  }, [items, catId, typeId]);

  useEffect(() => {
    if (communityId) {
      setFilteredItems(items.filter(item => item.main_community_id === communityId));
    }
    if (subCommunityId) {
      setFilteredItems(items.filter(item => item.community_id === subCommunityId));
    }
  }, [items, communityId, subCommunityId]);

  useEffect(() => {
    if (userId) {
      setFilteredItems(items.filter(item => item.requestor_id === userId));
    }
    if (volunteerId) {
      setFilteredItems(items.filter(item => item.volunteer_id === volunteerId));
    }
  }, [items, userId, volunteerId]);

  return { filteredItems };
};

export default useApplyFilters;
