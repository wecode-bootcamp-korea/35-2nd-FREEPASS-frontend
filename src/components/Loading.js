import React from 'react';
import styled from 'styled-components';
import BarLoader from 'react-spinners/BarLoader';
// import { IoAirplaneSharp } from 'react-icons/io5';
// import { AiOutlineSmile } from 'react-icons/ai';
import { BiWinkSmile } from 'react-icons/bi';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';

const Loading = () => {
  const override = {
    display: 'block',
    margin: '10px auto',
  };

  return (
    <DivSection>
      <Div>
        <AllContent>
          <SubTitle>취뽀 FREEPASS가 응원합니다.</SubTitle>
          <Title>
            당신의 취뽀는 FREEPASS
            <BiWinkSmile size="35" className="smile" />
          </Title>

          <FlightInfo>
            <Start>
              <City>서울</City>
              <Date>2022.08.13</Date>
            </Start>
            <Arrow>&#10231;</Arrow>
            <End>
              <City>김포</City>
              <Date>2022.08.16</Date>
            </End>
          </FlightInfo>
          {/* <Text>
            서울에서 김포까지 <br /> 당신의 여정을 찾고 있어요
          </Text> */}
          <Text>
            선택하신 조건의 <br /> 항공권을 검색 중 입니다.
          </Text>
          {/* <IoAirplaneSharp /> */}
          <AirDiv>
            <GiAirplaneDeparture size="25" padding-left="10px" />
            <BarLoader
              width="150"
              color="#accdff"
              cssOverride={override}
              size="70"
            />
            <GiAirplaneArrival size="25" padding-left="10px" />
          </AirDiv>
        </AllContent>
      </Div>
    </DivSection>
  );
};

const DivSection = styled.section`
  background-image: url(https://images.unsplash.com/photo-1558285549-2a06f9a5fe65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  position: relative;
  color: #ffffff;
  text-align: center;
`;

const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const AllContent = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  .smile {
    margin-left: 7px;
  }
`;
const SubTitle = styled.h1`
  position: relative;
  font-size: 15px;
  z-index: 1000;
`;

const Title = styled.span`
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 10px;
  line-height: 3rem;
  font-size: 24px;
  z-index: 1000;
`;

const FlightInfo = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  border-top: 1.3px solid #ffffff;
  border-bottom: 1.3px solid #ffffff;
`;

const Start = styled.span`
  width: 140px;
  display: flex;
  flex-direction: column;
`;

const Arrow = styled.span`
  width: 30px;
  margin-bottom: 20px;
  font-size: 34px;
`;

const End = styled.span`
  width: 140px;
  display: flex;
  flex-direction: column;
`;

const City = styled.span`
  padding-bottom: 14px;
  font-size: 18px;
`;

const Date = styled.span`
  font-size: 13px;
`;

const Text = styled.div`
  margin: 20px 0;
  color: #ffffff;
  line-height: 1.5rem;
`;

const AirDiv = styled.div`
  display: flex;
  padding: 0 50px;
`;

export default Loading;
