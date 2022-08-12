import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './Esg.css';
export default function Msg() {
  const [slidesData, setSlidesData] = useState([]);
  useEffect(() => {
    fetch('/data/esgdata/esgData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSlidesData(data);
      });
  }, []);
  return (
    <SwiperContainer>
      <StyledSwiper
        direction="vertical"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Keyboard, Mousewheel]}
        mousewheel={true}
        keyboard={true}
      >
        {slidesData.map(({ id, video, imgUrl, mtitle, title }) => (
          <SwiperSlide key={id}>
            {video ? (
              <video src={video} type="video/mp4" autoPlay loop muted />
            ) : (
              ''
            )}
            <CarouselImg imgUrl={imgUrl} />
            <CarouseTitWrap>
              <CarouseMainTit>{mtitle}</CarouseMainTit>
              <CarouseTit>{title}</CarouseTit>
            </CarouseTitWrap>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </SwiperContainer>
  );
}
const SwiperContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-pagination-bullets {
    right: 50px;
  }
`;
const CarouselImg = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
`;
const CarouseTitWrap = styled.div`
  position: absolute;
  width: 830px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const CarouseMainTit = styled.h2`
  font-size: 2.6rem;
  line-height: 1.3;
  font-weight: 900;
  color: white;
  text-shadow: 0px 1px 3px rgb(0 0 0 / 30%);
`;
const CarouseTit = styled.p`
  margin-top: 24px;
  color: #fff;
  line-height: 1.4;
  font-size: 3.2rem;
  font-weight: 700;
  text-shadow: 0px 1px 3px rgb(0 0 0 / 30%);
`;
