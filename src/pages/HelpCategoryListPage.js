import React from 'react';
import { useHelpCategoryContext, HelpCategoryProvider } from '@/context/mainTypes/HelpCategoryContext';
import ListTable from '@/components/HelpCategory/ListTable';
import GenericListPage from '@/components/Layout/GenericListPage';

const HelpCategoryListPage = () => {

  return (
    <HelpCategoryProvider>
      <GenericListPage
        handleNewItem=""
        useContextHook={useHelpCategoryContext}
        ListTableComponent={ListTable}
      />
    </HelpCategoryProvider>
  );
};

export default HelpCategoryListPage;
