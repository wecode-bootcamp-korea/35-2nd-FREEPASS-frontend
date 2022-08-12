import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './FreePromotionCarosuel.css';

const FreePromotionCarousel = ({ title }) => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    fetch('/data/carouseldata/freePromotionData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCarouselData(data);
      });
  }, []);

  return (
    <BodyWrap>
      <CardTitle>{title}</CardTitle>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        loop="true"
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
      >
        {carouselData.map(imgData => {
          return (
            <SwiperSlide key={imgData.id}>
              <CarouselImg imgUrl={imgData.imgUrl} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BodyWrap>
  );
};

export default FreePromotionCarousel;

const BodyWrap = styled.div`
  width: 1160px;
  margin: 0 auto;
  margin-bottom: 104px;
`;

const CardTitle = styled.h3`
  margin-bottom: 16px;
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const CarouselImg = styled.div`
  width: 376px;
  height: 180px;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
`;
