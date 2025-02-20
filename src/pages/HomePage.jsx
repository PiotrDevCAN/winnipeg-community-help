import React from 'react';
import { Divider } from 'antd';
import HomeContentCards from '@/components/Home/HomeContentCards';
import HomeContentCarusels from '@/components/Home/HomeContentCarusels';

const HomePage = () => {

  return (
    <>
      <HomeContentCards />
      <Divider />
      <HomeContentCarusels />
    </>
  );
};

export default HomePage;
