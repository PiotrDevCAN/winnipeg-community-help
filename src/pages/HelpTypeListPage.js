import React from 'react';
import { useHelpTypeContext, HelpTypeProvider } from '@/context/mainTypes/HelpTypeContext';
import ListTable from '@/components/HelpType/ListTable';
import GenericListPage from '@/components/Layout/GenericListPage';

const HelpTypeListPage = () => {

  return (
    <HelpTypeProvider>
      <GenericListPage
        handleNewItem=""
        useContextHook={useHelpTypeContext}
        ListTableComponent={ListTable}
      />
    </HelpTypeProvider>
  );
};

export default HelpTypeListPage;
