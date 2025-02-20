import React, { useEffect } from "react";
import { Select } from "antd";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import usePeopleFilter from "@/customHooks/filters/usePeopleFilter";

const Volunteer = ({ preSelectedId }) => {
  const {
    selectedVolunteerId,
    handleVolunteerChange,
    volunteersOptions,
    loadingVolunteers,
    updateVolunteer,
  } = usePeopleFilter();

  useEffect(() => {
    if (preSelectedId) {
      updateVolunteer(preSelectedId);
    }
  }, [preSelectedId, updateVolunteer]);

  return (
    <>
      <Select
        value={selectedVolunteerId}
        suffixIcon={<MdOutlineVolunteerActivism />}
        showSearch
        placeholder="Select a Volunteer"
        optionFilterProp="label"
        onChange={handleVolunteerChange}
        options={volunteersOptions}
        loading={loadingVolunteers}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default Volunteer;
