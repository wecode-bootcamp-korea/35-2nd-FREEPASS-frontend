import React from 'react';
import styled from 'styled-components';
import { WalletOutlined, RedoOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const AirCartTicket = ({ tiketData }) => {
  const navigate = useNavigate();

  const goToAirList = () => {
    navigate('/airlist');
  };

  const {
    kor_origin,
    depDate,
    airline,
    flight_number,
    en_airline,
    depTime,
    origin,
    arrTime,
    destination,
    total_price,
    person,
  } = tiketData;

  return (
    <FlightListli>
      <TitleArea>
        <TitleDep>
          {kor_origin} 가는편
          <TitleDepDate>{depDate}</TitleDepDate>
        </TitleDep>
        <TitleDepButton onClick={goToAirList}>
          <RedoOutlined />
        </TitleDepButton>
      </TitleArea>
      <SchResult>
        <SchReusltAl>
          <Air>
            <Thumb>
              <WalletOutlined />
              <ThumbTitle>{airline}</ThumbTitle>
            </Thumb>
            <ThumbDepNum>{flight_number} |</ThumbDepNum>
            <ThumbArrNum>{en_airline}</ThumbArrNum>
          </Air>
          <TimeInfo>
            <TimeInfoTime>{depTime}</TimeInfoTime>
            <TimeInfoPlace>{origin}</TimeInfoPlace>
            <TimeInfoTime>{arrTime}</TimeInfoTime>
            <TimeInfoPlace>{destination}</TimeInfoPlace>
          </TimeInfo>
          <InterInfo>
            <InfoDay>총{person}인</InfoDay>
            <InfoFightPirce>
              {total_price.toLocaleString('ko-KR')}원
            </InfoFightPirce>
            <InfoRate>항공사별 초과 수화물 | </InfoRate>
            <InfoRateCancel> 운임규정 및 취소 규정안내</InfoRateCancel>
          </InterInfo>
        </SchReusltAl>
      </SchResult>
    </FlightListli>
  );
};

export default AirCartTicket;

const FlightListli = styled.li`
  margin-top: 24px;
  border: 1px solid #eaeaea;
  border-radius: 12px;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 0;
  padding: 0 24px;
  background-color: #f8f8f8;
`;

const TitleDep = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const TitleDepDate = styled.span`
  display: inline-block;
  padding-left: 10px;
  color: gray;
  font-weight: 600;
  font-size: 20px;
`;

const TitleDepButton = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const SchResult = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SchReusltAl = styled.div`
  padding: 20px 24px;
`;

const Air = styled.div`
  display: inline-block;
  width: 260px;
  vertical-align: top;
  padding-right: 16px;
`;

const Thumb = styled.span`
  display: block;
`;

const ThumbTitle = styled.span`
  display: inline-block;
  padding-left: 4px;
  color: #202020;
  font-size: 16px;
  font-weight: 700;
`;

const ThumbDepNum = styled.span`
  display: inline-block;
  margin-top: 12px;
  margin-right: 8px;
  color: gray;
  font-size: 16px;
`;

const ThumbArrNum = styled.span`
  display: inline-block;
  margin-top: 12px;
  color: gray;
  font-size: 16px;
`;

const TimeInfo = styled.div`
  display: inline-block;
  width: 160px;
`;

const TimeInfoTime = styled.span`
  &:first-child {
    margin-top: 0px;
  }
  display: inline-block;
  margin-right: 6px;
  color: #202020;
  font-size: 16px;
  font-weight: 700;
  min-width: 52px;
  margin-top: 8px;
`;

const TimeInfoPlace = styled.span`
  color: gray;
  font-size: 14px;
`;

const InterInfo = styled.div`
  display: inline-block;
  text-align: right;
  width: 310px;
  color: gray;
  font-size: 14px;
`;

const InfoDay = styled.span`
  &:first-child {
    margin-top: 0px;
    margin-right: 5px;
  }
  display: inline-block;
  margin-top: 12px;
  color: gray;
  width: 150px;
  font-size: 16px;
  font-weight: 700;
`;

const InfoFightPirce = styled.span`
  font-size: 14px;
  color: #63a1ff;
  width: 150px;
  font-size: 16px;
  font-weight: 900;
`;

const InfoRate = styled.span`
  &:first-child {
    margin-top: 0px;
  }
  display: inline-block;
  margin-top: 12px;
  width: 150px;
  font-size: 14px;
`;

const InfoRateCancel = styled.span`
  color: gray;
  font-size: 14px;
`;
