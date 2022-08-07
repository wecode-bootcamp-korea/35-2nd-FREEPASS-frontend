import React from 'react';
import styled from 'styled-components';

const AirBnnerCard = () => {
  return (
    <BannerWrap>
      <BannerVideo autoPlay loop muted>
        <BannerSource
          src="https://static-www.jejupass.com/resource/PC/images/esg_main/esg_main_video.mp4"
          type="video/mp4"
        />
      </BannerVideo>
      <BannerTitWrap>
        <BannerTit>MAKE JEJU BETTER</BannerTit>
        <BnnerDesc>
          청정 제주를 지키는 여행
          <br />
          프리패스와 함께 해 주세요
        </BnnerDesc>
      </BannerTitWrap>
    </BannerWrap>
  );
};

export default AirBnnerCard;

const BannerWrap = styled.div`
  width: 100vw;
  height: 680px;
  position: relative;
  text-align: center;
  margin-bottom: 104px;
`;

const BannerVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerSource = styled.source`
  line-height: 0px;
`;

const BannerTitWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BannerTit = styled.strong`
  font-size: 2.6rem;
  line-height: 1.3;
  font-weight: 900;
  color: white;
  text-shadow: 0px 1px 3px rgb(0 0 0 / 30%);
`;

const BnnerDesc = styled.p`
  margin-top: 24px;
  color: #fff;
  line-height: 1.4;
  font-size: 3.4rem;
  font-weight: 700;
  text-shadow: 0px 1px 3px rgb(0 0 0 / 30%);
`;
