import React from 'react';
import FreePromotionCarousel from '../components/carousel/FreePromotionCarosuel';
import styled from 'styled-components';
import { setFont } from '../styles/common';

const Main = () => {
  return (
    <>
      <VideoContainer>
        <Video
          autoPlay
          src="/images/Main/production ID_4612063.mp4"
          type="video/mp4"
          muted
          loop
        />
        <VideoText>
          <Text>MAKE JEJU BETTER</Text>
          <Text margintop="40px">청정 제주를 지키는 여행,</Text>
          <Text margintop="15px">FREEPASS와 함께해주세요</Text>
        </VideoText>
      </VideoContainer>
      <CarouselWrap>
        <CarouselTitle>🚌 프리패스 프로모션 🚗</CarouselTitle>
        <FreePromotionCarousel />
      </CarouselWrap>

      <MainTitle>테마스토리</MainTitle>
      <StoryContainer>
        {Story.map((value, index) => {
          return (
            <StoryWrap key={index}>
              <StoryImage src={value.image} />
              <MessageBox>
                {value.message.map((msg, index) => {
                  return <Message key={index}>{msg}</Message>;
                })}
                {value.tag.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>;
                })}
              </MessageBox>
            </StoryWrap>
          );
        })}
      </StoryContainer>
    </>
  );
};

export default Main;

const Story = [
  {
    image: 'images/Main/maximilien-t-scharner-FD0Ga_KJTwM-unsplash.jpg',
    message: ['이용에 궁금하신 점이', '있으신가요?'],
    tag: ['#손찬규갤러리', '#성산', '#책방무사'],
  },

  {
    image: 'images/Main/andriyko-podilnyk-bdmdX_XMcV4-unsplash.jpg',
    message: ['카페패스,', '커피를 부탁해!'],
    tag: ['#본카페', '#카페Son', '#Coffee'],
  },
  {
    image: 'images/Main/nathan-dumlao-8yBQQqH3q8Q-unsplash.jpg',
    message: ['카페패스,', '티타임을 부탁해!'],
    tag: ['#피커스', '#제주미유', '#어니스트밀크'],
  },
];

const VideoContainer = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
`;

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const VideoText = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  ${setFont('40px', '800')}
  color: white;
  margin-top: ${props => props.margintop};
`;

const CarouselWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  padding-top: 50px;
`;

const CarouselTitle = styled.h2`
  ${setFont()}
  margin-bottom: 10px;
`;

const MainTitle = styled.p`
  ${setFont()}
  text-align: center;
  margin-top: 50px;
`;

const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50vh;
  margin: 30px 0 100px 0;
`;

const StoryWrap = styled.div`
  position: relative;
  width: 25%;
  margin: 0 10px;
`;

const StoryImage = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: 1;
  border-radius: 14px;
`;

const MessageBox = styled.div`
  width: 80%;
  position: absolute;
  z-index: 2;
  text-align: left;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Message = styled.p`
  ${setFont('22px', '900')}
  color: white;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  ${setFont('17px', '500')}
  color: white;
  margin-top: 10px;
`;
