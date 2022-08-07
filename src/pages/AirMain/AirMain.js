import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AirBnnerCard from './AirBannerCard';
import AirTripCard from './AirTripCard';
import AirPromotionCarousel from '../../components/carousel/AirPromotionCarousel';
import FreePromotionCarousel from '../../components/carousel/FreePromotionCarosuel';

const AirMain = () => {
  const [jejuData, setJejuData] = useState([]);
  const [japanData, setJapanData] = useState([]);
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    fetch('/data/tripdata/jejuData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setJejuData(data);
      });

    fetch('/data/tripdata/japanData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setJapanData(data);
      });

    fetch('/data/tripdata/PopularData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setPopularData(data);
      });
  }, []);

  return (
    <AirMainContainer>
      <AirBnnerCard />
      <BodyWrap>
        <PromotionTit>
          <AirPromotionCarousel title="✈️ 항공사 프로모션 🛩" />
          <FreePromotionCarousel title="🚌 프리패스 프로모션 🚗" />
        </PromotionTit>
        <MainBox>
          <AirTripCard
            title="🍊 제주 여행은 언제나 즐거워 🌴"
            data={jejuData}
          />
          <AirTripCard title="🎏 간만에 일본에 가볼까? 🏯" data={japanData} />
          <AirTripCard title="✈️ 인기 노선별 최저가 🚗" data={popularData} />
        </MainBox>
      </BodyWrap>
    </AirMainContainer>
  );
};

export default AirMain;

const AirMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainBox = styled.div`
  display: block;
`;

const BodyWrap = styled.div`
  display: block;
`;

const PromotionTit = styled.div`
  display: block;
`;
