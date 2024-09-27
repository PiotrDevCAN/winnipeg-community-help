import React from 'react';
import ListTable from '../components/Community/ListTable';
import Pagination from '../components/Pagination';

import { CommunityProvider } from '../context/CommunityContext';

const CommunityListPage = () => {
  return (
    <div>
      <div className="overflow-x-auto font-[sans-serif]">

        <CommunityProvider>
          <ListTable />
        </CommunityProvider>
        <Pagination />

      </div>
    </div>
  );
};

export default CommunityListPage;
