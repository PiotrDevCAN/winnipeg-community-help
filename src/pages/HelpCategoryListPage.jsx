import ListTable from "@/components/HelpCategory/ListTable";
import GenericListPage from "@/components/Layout/GenericListPage";
import useHelpCategoryData from "@/customHooks/data/useHelpCategoryData";

const HelpCategoryListPage = () => {
  return (
    <GenericListPage
      onNewItemCreate=""
      useDataHook={useHelpCategoryData}
      ListTableComponent={ListTable}
    />
  );
};

export default HelpCategoryListPage;
