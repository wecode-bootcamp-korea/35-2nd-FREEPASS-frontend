import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.min.css';
import { Carousel } from 'antd';
// import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

const AirPromotionCarousel = ({ title }) => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    fetch('/data/carouseldata/AirPromotionData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCarouselData(data);
      });
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    />
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    draggable: true,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    // prevArrow: <LeftCircleOutlined />,
    // nextArrow: <RightCircleOutlined />,
  };

  return (
    <BodyWrap>
      <CardTitle>{title}</CardTitle>
      <CarouselWrap>
        <Carousel {...settings}>
          {carouselData.map(img => {
            return (
              <div key={img.id}>
                <CarouselImg imgUrl={img.imgUrl} />
              </div>
            );
          })}
        </Carousel>
      </CarouselWrap>
    </BodyWrap>
  );
};

export default AirPromotionCarousel;

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
  width: 580px;
  height: 130px;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
`;

const CarouselWrap = styled(Carousel)`
  width: 100%;

  .ant-carousel .slick-dots li button {
    background-color: white;
  }

  .ant-carousel .slick-prev,
  .ant-carousel .slick-next {
    font-size: 20px;
    color: white;
  }

  .ant-carousel .slick-prev {
    left: 10px;
    z-index: 2;
  }

  .ant-carousel .slick-next {
    right: 10px;
    z-index: 2;
  }

  .ant-carousel .slick-slider .slick-slide {
    &:nth-child(odd) {
      padding: 0 10px 0 0;
    }

    &:nth-child(even) {
      padding: 0 0 0 10px;
    }
  }
`;
