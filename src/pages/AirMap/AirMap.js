import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftCont from './LeftCont';
import RightCont from './RightCont';

const AirMap = () => {
  const [mapInfo, setMapInfo] = useState([]);

  // useEffect(() => {
  //   fetch('/data/mapdata/mapData.json')
  //     .then(res => res.json())
  //     .then(data => setMapInfo(data.message));
  // }, []);

  useEffect(() => {
    fetch('http://43.200.163.205:8000/flights/locations')
      .then(res => res.json())
      .then(data => setMapInfo(data.result));
  }, []);

  // console.log(mapInfo);

  const isData = mapInfo.length !== 0;

  return !isData ? (
    <h2>로딩중입니다....</h2>
  ) : (
    <AirMapContainer>
      <LeftCont />
      <RightCont mapInfo={mapInfo} />
    </AirMapContainer>
  );
};

export default AirMap;

const AirMapContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
