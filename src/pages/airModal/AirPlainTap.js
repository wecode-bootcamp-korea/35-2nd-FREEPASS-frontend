import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Arrive from './filterBar/Arrive';
import Dep from './filterBar/Dep';
import People from './filterBar/People';
import { BASE_URL } from '../../config';
import Loading from '../../components/Loading';

const AirPlainTap = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goToAirList = () => {
    setIsLoading(true);
    const departure_date = hyphenBoardStartDay.slice(0, 8);
    const arrival_date = hyphenBoardEndDay.slice(0, 8);
    const seat_class = rating === '전체' ? '' : 'business';
    const ticket_type = searchSort === '편도' ? 'one_way' : 'round_trip';
    const oneWayQueryString = `?ticket_type=${ticket_type}&departure_location=${departure}&arrival_location=${destination}&departure_date=${`20${departure_date}`}&adult=${adult}&infant=${child}&child=${baby}&remaining_seat=${seat_class}`;
    const roundTripQueryString = `?ticket_type=${ticket_type}&departure_location=${departure}&arrival_location=${destination}&departure_date=${`20${departure_date}`}&departure_date=${`20${arrival_date}`}&adult=${adult}&infant=${child}&child=${baby}&remaining_seat=${seat_class}`;
    const finalQueryString =
      ticket_type === 'one_way' ? oneWayQueryString : roundTripQueryString;
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/airmodal${finalQueryString}`);
      navigate(`/airlist${finalQueryString}`);
      fetch(`${BASE_URL}/flights/schedules${location.search}`);
    }, 5000);
  };

  const [currentId, setCurrentId] = useState(1);
  const [cityData, setcityData] = useState([]);
  const [contry, setContry] = useState({
    departure: '김포',
    destination: '어디로 떠나시나요?',
  });
  const { departure, destination } = contry;
  const [boardStartDay, setBoardStartDay] = useState('탑승일을 선택하세요.');
  const [hyphenBoardStartDay, setHyphenBoardStartDay] = useState('');
  const [boardEndDay, setBoardEndDay] = useState('');
  const [hyphenBoardEndDay, setHyphenBoardEndDay] = useState('');
  const [passengerInfo, setPassengerInfo] = useState({
    adult: 1,
    child: 0,
    baby: 0,
    rating: '전체',
  });
  const { adult, child, baby, rating } = passengerInfo;
  const [searchSort, setSearchSort] = useState('검색');
  const [isLoading, setIsLoading] = useState(false);
  const changeSearchSort = (startDay, endDay) => {
    startDay === endDay ? setSearchSort('편도') : setSearchSort('왕복');
  };

  useEffect(() => {
    fetch('/data/CITYDATA_ARR.json')
      .then(res => res.json())
      .then(data => {
        setcityData(() => data);
      });
  }, []);

  const plusPassengerNumber = e => {
    const { name } = e.target;
    setPassengerInfo(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const minusPassengerNumber = e => {
    const { name } = e.target;
    setPassengerInfo(prev => ({ ...prev, [name]: prev[name] - 1 }));
  };

  const changeRating = rating => {
    setPassengerInfo(prev => ({ ...prev, rating }));
  };

  const clickImgDiv = (e, cityName) => {
    const { name } = e.target;
    setContry(prev => ({ ...prev, [name]: cityName }));
  };

  const clickCity = (e, cityName) => {
    const { id } = e.target;
    setContry(prev => ({ ...prev, [id]: cityName }));
  };

  const departureToEn = CITYNAME_EN_DATA.map(data => {
    return data[departure];
  });

  const destinationToEn = CITYNAME_EN_DATA.map(data => {
    return data[destination];
  });

  const changeBoardStartDay = (startDate, hyphenStartDate) => {
    setBoardStartDay(startDate);
    setHyphenBoardStartDay(hyphenStartDate);
  };

  const changeBoardEndDay = (endDate, hyphenEndDate) => {
    setBoardEndDay(endDate);
    setHyphenBoardEndDay(hyphenEndDate);
  };

  const clickHandler = id => {
    setCurrentId(id);
  };

  const adultCount = `성인${adult},`;
  const childCount = `${child !== 0 ? `소아${child},` : ''}`;
  const babyCount = `${baby !== 0 ? `유아${baby},` : ''}`;

  const MAPPING_OBJ = {
    1: (
      <Arrive
        data="출발지"
        name="departure"
        cityData={cityData}
        clickImgDiv={clickImgDiv}
        clickCity={clickCity}
      />
    ),
    2: (
      <Arrive
        data="도착지"
        name="destination"
        cityData={cityData}
        clickImgDiv={clickImgDiv}
        clickCity={clickCity}
      />
    ),
    3: (
      <Dep
        changeBoardStartDay={changeBoardStartDay}
        changeBoardEndDay={changeBoardEndDay}
        changeSearchSort={changeSearchSort}
      />
    ),
    4: (
      <People
        plusPassengerNumber={plusPassengerNumber}
        minusPassengerNumber={minusPassengerNumber}
        changeRating={changeRating}
        passengerInfo={passengerInfo}
      />
    ),
  };

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
                <span>{departureToEn}</span>
              </Text>
            </Button>
          </Panel>
          <Panel width="180px" onClick={() => clickHandler(2)}>
            <Text>도착</Text>
            <Button>
              <Text>
                {destination}
                <span>{destinationToEn}</span>
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
          {searchSort}
        </Search>
      </InnerBar>
      <div>{MAPPING_OBJ[currentId]}</div>
    </>
  );
};

const CITYNAME_EN_DATA = [
  {
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
  },
];

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
