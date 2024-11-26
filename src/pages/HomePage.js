import React from 'react';
import { Divider, Card, Row, Col, Carousel } from 'antd';
// import HomeContentCards from '../components/Home/HomeContentCards';
import HomeContentCards from '../components/Home/HomeContentCardsFull';
import HomeContentCarusels from '../components/Home/HomeContentCarusels';
// import Map from '../components/Map/Map';

import { useAPIAuth } from '../context/APIAuthContext';

const HomePage = () => {

  const { accessToken, refreshTokenHandler, loading, error } = useAPIAuth();

  return (
    <>
      {/* <Card >
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            <div id="map-container" >
              <Map />
            </div>
          </Col>
        </Row>
      </Card> */}

      {/* <Divider /> */}
      <HomeContentCards />

      <Divider />
      <HomeContentCarusels />
    </>
  );
};

export default HomePage;
