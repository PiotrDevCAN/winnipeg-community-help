import React from 'react';
import ListTable from '../components/Offer/ListTable';
import Pagination from '../components/Pagination';

const HelpOfferListPage = () => {
  return (
    <div>
      <div className="overflow-x-auto font-[sans-serif]">

        <ListTable />
        <Pagination />
        
      </div>
    </div>
  );
};

export default HelpOfferListPage;
