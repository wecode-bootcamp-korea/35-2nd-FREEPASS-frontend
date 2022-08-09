import React from 'react';
import styled from 'styled-components';
import ClockLoader from 'react-spinners/ClockLoader';

const Loading = () => {
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  return (
    <DivSection>
      <Div>
        <AllContent>
          <SubTitle>취뽀 FREEPAS가 응원합니다.</SubTitle>
          <Title>당신의 취뽀는 FREEPASS</Title>
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
          <ClockLoader color="#accdff" cssOverride={override} size="50" />
          <Text>
            서울에서 김포까지 <br /> 당신의 여정을 찾고 있어요
          </Text>
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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const SubTitle = styled.h1`
  position: relative;
  font-size: 18px;
  z-index: 1000;
`;

const Title = styled.span`
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 30px;
  line-height: 3rem;
  font-size: 29px;
  z-index: 1000;
`;

const FlightInfo = styled.div`
  width: 400px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  border-top: 1.3px solid #ffffff;
  border-bottom: 1.3px solid #ffffff;
`;

const Start = styled.span`
  width: 190px;
  display: flex;
  flex-direction: column;
`;

const Arrow = styled.span`
  width: 60px;
  margin-bottom: 40px;
  font-size: 40px;
`;

const End = styled.span`
  width: 190px;
  display: flex;
  flex-direction: column;
`;

const City = styled.span`
  padding-bottom: 14px;
  font-size: 23px;
`;

const Date = styled.span`
  font-size: 14px;
`;

const Text = styled.div`
  margin: 20px 0;
  color: #ffffff;
  line-height: 1.5rem;
`;
export default Loading;
