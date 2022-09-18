import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  plusPassenger,
  minusPassenger,
  setRating,
} from '../../../store/passenger';
import styled, { css } from 'styled-components';

const People = () => {
  const dispatch = useDispatch();
  const passengerInfo = useSelector(state => state.passengerInfo);
  const { adult, child, baby, rating } = passengerInfo;

  const condition = {
    adult: adult === 1,
    child: child === 0,
    baby: baby === 0,
  };

  return (
    <PeopleDiv>
      <RightDiv>
        <p>탑승인원과 좌석</p>
        <p>등급을 선택해주세요.</p>
      </RightDiv>
      <CenterDiv>
        <Text>탑승인원</Text>
        {PASSENGER_DATA.map(({ id, sort, desc, name }) => {
          return (
            <PassengerDiv key={id}>
              <Division>
                <Sort>{sort}</Sort>
                <Desc>{desc}</Desc>
              </Division>
              <Setting>
                <ButtonMinus
                  name={name}
                  onClick={e => {
                    const { name } = e.target;
                    dispatch(minusPassenger(name));
                  }}
                  disabled={condition[name]}
                >
                  &#10134;
                </ButtonMinus>
                <Num>{passengerInfo[name]}</Num>
                <ButtonPlus
                  name={name}
                  onClick={e => {
                    const { name } = e.target;
                    dispatch(plusPassenger(name));
                  }}
                  disabled={name === 'baby' && adult <= baby}
                >
                  &#10133;
                </ButtonPlus>
              </Setting>
            </PassengerDiv>
          );
        })}
      </CenterDiv>
      <LeftDiv>
        <Text>좌석등급</Text>
        {SEAT_DATA.map(({ id, seat_rating }) => {
          return (
            <Rating
              key={id}
              primary={rating === seat_rating}
              onClick={e => dispatch(setRating(e.target.innerText))}
            >
              {seat_rating}
            </Rating>
          );
        })}
      </LeftDiv>
    </PeopleDiv>
  );
};

const PASSENGER_DATA = [
  { id: 1, sort: '성인', desc: '만 13세 이상', name: 'adult' },
  { id: 2, sort: '소아', desc: '만 2세 ~ 만 12세', name: 'child' },
  {
    id: 3,
    sort: '유아',
    desc: '만 2세 미만, 보호자와 동반 착석',
    name: 'baby',
  },
];

const SEAT_DATA = [
  { id: 1, seat_rating: '전체' },
  { id: 2, seat_rating: '비즈니스석' },
];

const PeopleDiv = styled.div`
  height: 430px;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const RightDiv = styled.div`
  width: 260px;
  height: 100%;
  padding-top: 48px;
  background-color: #fff;
  p {
    line-height: 1.7rem;
    font-size: 24px;
    font-weight: bold;
  }
`;

const CenterDiv = styled.div`
  width: 400px;
  height: 100%;
  padding-top: 48px;
  padding-left: 28px;
  padding-right: 25px;
  border-left: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
  background-color: #fff;
`;

const PassengerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
`;

const Division = styled.span`
  line-height: 1.1rem;
`;

const Sort = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 13.5px;
  font-weight: bolder;
`;

const Desc = styled.span`
  font-size: 12px;
`;

const Setting = styled.span``;

const ButtonMinus = styled.button`
  width: 25px;
  height: 25px;
  padding: 0 3px;
  border: 1px solid #eaeaea;
  border-radius: 50%;
  background: #fff;
`;

const Num = styled.span`
  padding: 0 10px;
  font-size: 18px;
  font-weight: bolder;
`;

const ButtonPlus = styled.button`
  width: 25px;
  height: 25px;
  padding: 0 3px;
  border: 1px solid #eaeaea;
  border-radius: 50%;
  background: #fff;
`;

const LeftDiv = styled.div`
  width: 400px;
  height: 100%;
  padding-top: 48px;
  padding-left: 28px;
  padding-right: 25px;
  background-color: #fff;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Rating = styled.button`
  height: 40px;
  width: 130px;
  margin-top: 25px;
  margin-right: 7px;
  border-radius: 7px;
  border: 1px solid #eaeaea;
  font-size: 13px;
  background-color: #fff;

  ${props =>
    props.primary &&
    css`
      border-color: #cde0ff;
      color: #63a1ff;
      background-color: #f4f9ff;
    `}
`;

export default People;
