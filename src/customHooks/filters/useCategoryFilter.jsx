import { useCallback, useEffect, useMemo, useState } from "react";
import { useStaticHelpDataContext } from "@/context/static/StaticHelpDataContext";
import SelectAllOption from "@/components/SelectAllOption";
import prepareSelectData from "@/services/prepareSelectData";

const useCategoryFilter = () => {
  const {
    categoriesData,
    typesData,
    selectedCategoryId,
    setSelectedCategoryId,
    selectedTypeId,
    setSelectedTypeId,
    loadingCategories,
    loadingTypes,
    getTypes,
    typeData,
    getTypeById,
    categoriesOptions,
    setCategoriesOptions,
    typesOptions,
    setTypesOptions,
  } = useStaticHelpDataContext();

  useEffect(() => {
    if (categoriesData.length !== 0) {
      const updatedCategoriesData = prepareSelectData(categoriesData);
      setCategoriesOptions(SelectAllOption.concat(updatedCategoriesData));
    }
  }, [categoriesData, setCategoriesOptions]);

  // useEffect(() => {
  //   if (typesData.length !== 0) {
  //     const updatedTypesData = prepareSelectData(typesData);
  //     setTypesOptions(SelectAllOption.concat(updatedTypesData));
  //   }
  // }, [typesData, setTypesOptions]);

  const updateCategory = useCallback((value, second = null) => {
    if (value !== null) {
      const categoryId = parseInt(value);
      if (String(value).includes("all")) {
        setTypesOptions([]);
        setSelectedCategoryId(null);
        setSelectedTypeId(null);
      } else {
        const tempTypes = getTypes(categoryId);
        const updatedTypesData = prepareSelectData(tempTypes);
        setTypesOptions(SelectAllOption.concat(updatedTypesData));
        setSelectedCategoryId(categoryId);
        setSelectedTypeId(second);
      }
    } else {
      setTypesOptions([]);
      setSelectedCategoryId(null);
      setSelectedTypeId(null);
    }
  }, [getTypes, setTypesOptions, setSelectedCategoryId, setSelectedTypeId]);

  const updateType = useCallback((value) => {
    const typeId = parseInt(value);
    if (String(value).includes("all")) {
      setSelectedTypeId(null);
    } else {
      setSelectedTypeId(typeId);
    }
  }, [setSelectedTypeId]);

  const handleCategoryChange = useCallback((value) => {
    updateCategory(value);
  }, [updateCategory]);

  const handleTypeChange = useCallback((value) => {
    updateType(value);
  }, [updateType]);

  const triggerTypeChange = useCallback(async (newTypeId) => {
    if (newTypeId) {
      const typeId = parseInt(newTypeId);
      console.log('typeData START ' + typeId);
      console.log(typeData);
      if (typeData === null) {
        console.log('LOAD');
        await getTypeById(typeId);
      } else {
        console.log('SKIP');
        const categoryId = typeData.category_id;
        console.log(typeData);
        updateCategory(categoryId, typeId);
      }
    }
  }, [typeData, getTypeById, updateCategory]);

  return useMemo(
    () => ({
      categoriesData,
      typesData,
      selectedCategoryId,
      setSelectedCategoryId,
      selectedTypeId,
      setSelectedTypeId,
      handleCategoryChange,
      handleTypeChange,
      categoriesOptions,
      typesOptions,
      loadingCategories,
      loadingTypes,
      updateCategory,
      updateType,
      triggerTypeChange,
    }),
    [
      categoriesData,
      typesData,
      selectedCategoryId,
      setSelectedCategoryId,
      selectedTypeId,
      setSelectedTypeId,
      handleCategoryChange,
      handleTypeChange,
      categoriesOptions,
      typesOptions,
      loadingCategories,
      loadingTypes,
      updateCategory,
      updateType,
      triggerTypeChange,
    ]
  );
};

export default useCategoryFilter;
