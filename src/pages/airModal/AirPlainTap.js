import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCityImageData } from '../../store/city';
import styled, { css } from 'styled-components';
import Arrive from './filterBar/Arrive';
import Dep from './filterBar/Dep';
import People from './filterBar/People';
import { BASE_URL } from '../../config';
import Loading from '../../components/Loading';

const AirPlainTap = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { contry, passengerInfo, board } = useSelector(state => state);
  const { departure, destination } = contry;
  const { adult, child, baby, rating } = passengerInfo;
  const { boardStartDay, boardEndDay, search } = board;
  const [currentId, setCurrentId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const goToAirList = () => {
    setIsLoading(true);
    const departure_date = boardStartDay.slice(0, 8).replace(/\./g, '-'); //"22.09.22(목)" -> "22-09-22"형식으로 바꾸기
    const arrival_date = boardEndDay.slice(0, 8).replace(/\./g, '-'); //"22.09.22(목)" -> "22-09-22"형식으로 바꾸기
    const seat_class = rating === '전체' ? 'normal' : 'business';
    const ticket_type = search === '편도' ? 'one_way' : 'round_trip';
    const oneWayQueryString = `?ticket_type=${ticket_type}&departure_location=${departure}&arrival_location=${destination}&departure_date=${`20${departure_date}`}&adult=${adult}&infant=${child}&child=${baby}&remaining_seat=${seat_class}`;
    const roundTripQueryString =
      oneWayQueryString + `&departure_date=${`20${arrival_date}`}`;
    const finalQueryString =
      ticket_type === 'one_way' ? oneWayQueryString : roundTripQueryString;
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/airmodal${finalQueryString}`);
      navigate(`/airlist${finalQueryString}`);
      fetch(`${BASE_URL}/flights/schedules${location.search}`);
    }, 5000);
  };

  useEffect(() => {
    fetch('/data/CITYDATA_ARR.json')
      .then(res => res.json())
      .then(data => {
        dispatch(setCityImageData(data));
      });
  }, []);

  const clickHandler = id => {
    setCurrentId(id);
  };

  const adultCount = `성인${adult},`;
  const childCount = `${child !== 0 ? `소아${child},` : ''}`;
  const babyCount = `${baby !== 0 ? `유아${baby},` : ''}`;

  if (isLoading)
    return (
      <Loading
        departure={departure}
        destination={destination}
        boardStartDay={boardStartDay}
        boardEndDay={boardEndDay}
      />
    );

  return (
    <>
      <InnerBar>
        <FlightInner primary={currentId === 1 || currentId === 2}>
          <Panel width="180px" onClick={() => clickHandler(1)}>
            <Text>출발</Text>
            <Button>
              <Text>
                {departure}
                <span>{CITYNAME_EN_DATA[departure]}</span>
              </Text>
            </Button>
          </Panel>
          <Panel width="180px" onClick={() => clickHandler(2)}>
            <Text>도착</Text>
            <Button>
              <Text>
                {destination}
                <span>{CITYNAME_EN_DATA[destination]}</span>
              </Text>
            </Button>
          </Panel>
        </FlightInner>
        <FlightInner primary={currentId === 3}>
          <Panel width="215px" onClick={() => clickHandler(3)}>
            <Text>탑승일</Text>
            <Button>
              {boardStartDay === boardEndDay || !boardEndDay
                ? boardStartDay
                : boardEndDay && `${boardStartDay}~${boardEndDay}`}
            </Button>
          </Panel>
        </FlightInner>
        <FlightInner primary={currentId === 4}>
          <Panel width="190px" onClick={() => clickHandler(4)}>
            <Text>인원 및 좌석등급 </Text>
            <Button>
              <Text>
                {adultCount} {childCount} {babyCount} {rating}
              </Text>
            </Button>
          </Panel>
        </FlightInner>
        <Search
          onClick={() => {
            if (
              destination === '어디로 떠나시나요?' ||
              boardStartDay === '탑승일을 선택하세요.'
            ) {
              return alert('모든 항목을 선택해주세요!');
            } else {
              goToAirList();
            }
          }}
        >
          {search}
        </Search>
      </InnerBar>
      <div>{MAPPING_OBJ[currentId]}</div>
    </>
  );
};

const MAPPING_OBJ = {
  1: <Arrive title="출발지" name="departure" />,
  2: <Arrive title="도착지" name="destination" />,
  3: <Dep />,
  4: <People />,
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

const InnerBar = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
  position: relative;
  text-align: left;
  background-color: #f8f8f8;
  background: #fff;
`;

const FlightInner = styled.span`
  height: 83px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  padding-left: 15px;
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
  line-height: 1.2rem;
  font-weight: 700;
  font-size: 15px;
  text-align: left;
  background: #fff;

  ${Text} {
    color: #202020;
    font-size: 15px;
    font-weight: 700;
  }
`;

const Search = styled.span`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-left: 15px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  background: #569aff;
`;

export default AirPlainTap;
