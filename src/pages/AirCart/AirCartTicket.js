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
    airline_logo,
    airline_name,
    airplane_code,
    airplane_name,
    arrival_location_name,
    arrival_time,
    departure_location_name,
    departure_time,
    passenger_count,
    price,
    total_price,
    departure_location_code,
    arrival_location_code,
  } = tiketData;

  return (
    <FlightListli>
      <TitleArea>
        <TitleDep>
          {departure_location_name} 가는편
          <TitleDepDate>{departure_time}</TitleDepDate>
        </TitleDep>
        <TitleDepButton onClick={goToAirList}>
          <RedoOutlined />
        </TitleDepButton>
      </TitleArea>
      <SchResult>
        <SchReusltAl>
          <Air>
            <Thumb>
              <ThumbTitle src={airline_logo} /> {airline_name}
            </Thumb>
            <ThumbDepNum>{airplane_name} |</ThumbDepNum>
            <ThumbArrNum>{airplane_code}</ThumbArrNum>
          </Air>
          <TimeInfo>
            <TimeInfoTime>{departure_time}</TimeInfoTime>
            <TimeInfoPlace>
              {departure_location_name} {departure_location_code}
            </TimeInfoPlace>
            <TimeInfoTime>{arrival_time}</TimeInfoTime>
            <TimeInfoPlace>
              {arrival_location_name} {arrival_location_code}
            </TimeInfoPlace>
          </TimeInfo>
          <InterInfo>
            <InfoDay>총{passenger_count}인</InfoDay>
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
  font-weight: 600;
`;

const ThumbTitle = styled.img`
  display: inline-block;
  padding-left: 4px;
  color: #202020;
  font-size: 16px;
  font-weight: 700;
  width: 10%;
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
