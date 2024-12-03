import React from 'react';
import { Divider, Card, Row, Col, Carousel } from 'antd';
import HomeContentCards from '../components/Home/HomeContentCardsFull';
import HomeContentCarusels from '../components/Home/HomeContentCarusels';

const HomePage = () => {

  return (
    <>
      {/* <Divider /> */}
      <HomeContentCards />

      <Divider />
      <HomeContentCarusels />
    </>
  );
};

export default HomePage;
