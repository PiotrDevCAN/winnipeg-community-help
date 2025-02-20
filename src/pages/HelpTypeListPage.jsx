import ListTable from "@/components/HelpType/ListTable";
import GenericListPage from "@/components/Layout/GenericListPage";
import useHelpTypeData from "@/customHooks/data/useHelpTypeData";

const HelpTypeListPage = () => {
  return (
    <GenericListPage
      onNewItemCreate=""
      useDataHook={useHelpTypeData}
      ListTableComponent={ListTable}
    />
  );
};

export default HelpTypeListPage;
