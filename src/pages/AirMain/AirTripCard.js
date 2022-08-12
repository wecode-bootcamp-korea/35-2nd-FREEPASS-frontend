import React from 'react';
import styled from 'styled-components';
import { RetweetOutlined } from '@ant-design/icons';

const AirTripCard = ({ title, data }) => {
  return (
    <ThemeCardContainer>
      <ThemeCardTitle>{title}</ThemeCardTitle>
      <ThemeCardWrap>
        {data.map(({ id, arr, date, dep, discount, img, price, trip }) => {
          return (
            <ThemeMainCard key={id}>
              <ThemeMainCardImgWrap>
                <MainCardImg src={img} alt="img" />
              </ThemeMainCardImgWrap>
              <ThemeCardBottom>
                <Round>
                  {dep} <RetweetOutlined /> {arr}
                </Round>
                <TripDetail>
                  <Trip>{trip}</Trip>
                  <Separate />
                  <Date>{date}</Date>
                </TripDetail>
                <TripPirce>
                  <Price>{price} </Price>
                  <Discount> {discount}</Discount>
                </TripPirce>
              </ThemeCardBottom>
            </ThemeMainCard>
          );
        })}
      </ThemeCardWrap>
    </ThemeCardContainer>
  );
};

export default AirTripCard;

const ThemeCardContainer = styled.div`
  margin-bottom: 104px;
`;

const ThemeCardTitle = styled.h3`
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const ThemeCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1160px;
  text-align: center;
`;

const ThemeMainCard = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
`;

const ThemeMainCardImgWrap = styled.div`
  width: 100%;
  height: 198px;
  overflow: hidden;
`;

const MainCardImg = styled.img`
  &:hover {
    transform: scale(1.05);
  }
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: all 0.3s;
`;

const ThemeCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: absolute;
  width: calc(100% - 16px);
  background: #fff;
  border: 1px solid #f0f2f5;
  box-shadow: 0 4px 8px 0 rgb(69 88 115 / 12%);
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
`;

const Round = styled.h2`
  font-size: 16px;
  color: #0f294d;
  letter-spacing: 0;
  line-height: 22px;
  font-weight: 700;
`;

const TripDetail = styled.div`
  padding-top: 8px;
  font-size: 14px;
  color: #455873;
  letter-spacing: 0;
  line-height: 18px;
`;

const Trip = styled.span`
  line-height: 0px;
`;

const Separate = styled.span`
  display: inline-block;
  width: 1px;
  height: 8px;
  background-color: #ced2d9;
  margin: 0 8px;
`;

const Date = styled.span`
  line-height: 0px;
`;

const TripPirce = styled.div`
  font-size: 14px;
  color: #455873;
  line-height: 22px;
  padding-top: 8px;
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #343a40;
`;

const Discount = styled.span`
  font-size: 16px;
  color: #3264ff;
  font-weight: 700;
`;
