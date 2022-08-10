import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const ModalFilterBar = ({ modalData }) => {
  // console.log(modalData);
  const {
    departure_location,
    arrival_location,
    departure_date,
    adult,
    child,
    infant,
    seat_class,
  } = modalData;

  const adultCount = `성인${adult},`;
  const childCount = `${child !== 0 ? `소아${child},` : ''}`;
  const babyCount = `${infant !== 0 ? `유아${infant},` : ''}`;

  if (departure_date?.length > 0) {
    return (
      <div>
        <BarButton>
          <InnerBar>
            <FlightInner primary>
              <Panel width="180px">
                <Text>출발</Text>
                <Button>
                  <Text>
                    {departure_location}
                    <span>{CITYNAME_EN_DATA[departure_location]}</span>
                  </Text>
                </Button>
              </Panel>
              <Panel width="180px">
                <Text>도착</Text>
                <Button>
                  <Text>
                    {arrival_location}
                    <span>{CITYNAME_EN_DATA[arrival_location]}</span>
                  </Text>
                </Button>
              </Panel>
            </FlightInner>
            <FlightInner>
              <Panel width="215px">
                <Text>탑승일</Text>
                <Button>
                  {departure_date.length === 1
                    ? departure_date
                    : `${departure_date[0].slice(2)}~${departure_date[1].slice(
                        2
                      )}`}
                </Button>
              </Panel>
            </FlightInner>
            <FlightInner>
              <Panel width="190px">
                <Text>인원 및 좌석등급</Text>
                <Button>
                  <Text>
                    {adultCount}
                    {childCount}
                    {babyCount}
                    {seat_class === 'business' ? '비즈니스석' : '전체'}
                  </Text>
                </Button>
              </Panel>
            </FlightInner>
            <Search>검색</Search>
          </InnerBar>
        </BarButton>
      </div>
    );
  }
};

const CITYNAME_EN_DATA = {
  서울: 'SEL',
  제주: 'CJU',
  김포: 'GMP',
  부산: 'PUS',
  청주: 'CJJ',
  광주: 'KWJ',
  대구: 'TAE',
  여수: 'RSU',
  울산: 'USN',
  양양: 'YNY',
  이제프스크: 'LJK',
  보이제: 'BOI',
  제네바: 'GVA',
  콘제도: 'RNI',
  제네럴산토스: 'GES',
  제양: 'SWA',
  알제: 'ALG',
  제르바: 'DJE',
  제슈프: 'RZE',
};

const BarButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 40px;
  border: 0;
  background-color: #f8f8f8;
`;
const InnerBar = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
  text-align: left;
  background-color: #f8f8f8;
`;
const FlightInner = styled.span`
  height: 83px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-left: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgb(32 32 32 / 8%);
  background: #fff;
  ${props =>
    props.primary &&
    css`
      border: 1px solid #63a1ff;
    `}
`;
const Panel = styled.span`
  width: ${props => props.width};
  padding: 10px 7px 3px 5px;
  text-align: left;
  font-size: 10px;
`;
const Text = styled.span`
  margin: ${props => props.margin};
  line-height: 1.2rem;
  color: #606060;
  font-size: 13px;
  span {
    padding-left: 5px;
    color: #63a1ff;
  }
`;
const Button = styled.div`
  height: 20px;
  display: block;
  padding: 0;
  border: none;
  text-align: left;
  line-height: 1.2rem;
  font-weight: 700;
  font-size: 15px;
  background: #fff;
  ${Text} {
    color: #202020;
    font-size: 15px;
    font-weight: 700;
  }
`;
const GrayText = styled.span`
  color: #aeaeae;
  font-weight: 400;
`;
const Search = styled.span`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border-radius: 16px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  background: #569aff;
`;
export default ModalFilterBar;
