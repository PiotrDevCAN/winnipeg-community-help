import React, { useEffect } from "react";
import { Button, Select } from "antd";
import { MdVolunteerActivism } from "react-icons/md";
import usePeopleFilter from "@/customHooks/filters/usePeopleFilter";

const Needy = ({ preSelectedId }) => {
  const {
    selectedNeedyId,
    handleNeedyChange,
    peopleInNeedOptions,
    loadingPeopleInNeed,
    updateNeedy,
  } = usePeopleFilter();

  useEffect(() => {
    if (preSelectedId) {
      updateNeedy(preSelectedId);
    }
  }, [preSelectedId, updateNeedy]);

  return (
    <>
      <Select
        value={selectedNeedyId}
        suffixIcon={<MdVolunteerActivism />}
        showSearch
        placeholder="Select a Needy Person"
        optionFilterProp="label"
        onChange={handleNeedyChange}
        options={peopleInNeedOptions}
        loading={loadingPeopleInNeed}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default Needy;
