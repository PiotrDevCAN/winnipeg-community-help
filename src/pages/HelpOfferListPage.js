import React, { useEffect } from 'react';
import { Flex, Divider } from 'antd';
import { OfferProvider } from '../context/OfferContext';
import ListTable from '../components/Offer/ListTable';
import { usePageHeaderContext } from '../context/PageHeaderContext';
import CategoryFilter from '../components/Filters/CategoryFilter';
import CommunityFilter from '../components/Filters/CommunityFilter';
import ClearFilters from '../components/ClearFilters';

const HelpOfferListPage = () => {

  const { setComponent1, setComponent2, setComponent3 } = usePageHeaderContext();
  useEffect(() => {
    setComponent1(<CategoryFilter />);
  }, [setComponent1]);

  useEffect(() => {
    setComponent2(<CommunityFilter />);
  }, [setComponent2]);

  useEffect(() => {
    setComponent3(<ClearFilters />);
  }, [setComponent3]);

  return (
    <Flex gap="middle" align="center" vertical>
      <Divider />
      <OfferProvider>
        <ListTable />
      </OfferProvider>
    </Flex>
  );
};

export default HelpOfferListPage;
