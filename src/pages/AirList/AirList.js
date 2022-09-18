import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ModalFilterBar from '../../components/ModalFilterBar';
const AirList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalData, setModalData] = useState([]);
  const [toggleData, setToggleData] = useState([]);
  const [ticketData, setTicketData] = useState([]);
  const [toggledList, setToggledList] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [isNow, setIsNow] = useState(false);

  // MadalData
  useEffect(() => {
    fetch(`http://43.200.163.205:8000/flights/schedules${location.search}`)
      .then(res => res.json())
      .then(data => {
        setModalData(data.location_result);
      });
  }, []);

  useEffect(() => {
    fetch('/data/ToggleData.json')
      .then(res => res.json())
      .then(data => setToggleData(data));
  }, []);

  //TicketData
  useEffect(() => {
    fetch(`http://43.200.163.205:8000/flights/schedules${location.search}`)
      .then(res => res.json())
      .then(data => {
        const obj = {
          one_way_result: data.one_way_result,
          round_trip_result: data.round_trip_result,
        };
        modalData.departure_date.length === 2
          ? setTicketData(obj)
          : setTicketData(data.one_way_result);
      });
  }, [location.search, modalData]);

  if (Object.keys(ticketData).length === 0) return <>Loading...</>;

  const ticketDataArr = Object.values(ticketData);

  const goToTrue = () => {
    const checkedSolt =
      selectedSort === 1
        ? 'departure_time'
        : selectedSort === 2
        ? '-departure_time'
        : selectedSort === 3
        ? 'price'
        : '-price';
    const checkedAirline = selectedAirlines.map(data => {
      return data === 5
        ? '&airlines=샘숭항공'
        : data === 6
        ? '&airlines=나이버항공'
        : data === 7
        ? '&airlines=코팡항공'
        : data === 8
        ? '&airlines=토스트항공'
        : data === 9
        ? '&airlines=연근마켓항공'
        : '&airlines=깨깨오항공';
    });
    const checkedAirline2 = checkedAirline.join('');
    const query = `&sort=${checkedSolt}${checkedAirline2}`;
    const oneWayQueryString = `?departure_location=${modalData.departure_location}&arrival_location=${modalData.arrival_location}&departure_date=${modalData.departure_date}&adult=${modalData.adult}&infant=${modalData.infant}&child=${modalData.child}&remaining_seat=${modalData.seat_class}`;
    const roundTripQueryString = `?ticket_type=round_trip&departure_location=${modalData.departure_location}&arrival_location=${modalData.arrival_location}&departure_date=${modalData.departure_date[0]}&departure_date=${modalData.departure_date[1]}&adult=${modalData.adult}&infant=${modalData.infant}&child=${modalData.child}&remaining_seat=${modalData.seat_class}`;
    const finalQueryString =
      modalData.departure_date?.length === 2
        ? roundTripQueryString
        : oneWayQueryString;
    navigate(`/airlist${finalQueryString}${query}`);
    fetch(
      `http://43.200.163.205:8000/flights/schedules${finalQueryString}${query}`
    )
      .then(res => res.json())
      .then(data => {
        setTicketData(
          modalData.departure_date?.length === 2
            ? data.round_trip_result
            : data.one_way_result
        );
      });
    window.location.reload();
  };

  const toggleList = id => {
    if (toggledList.includes(id)) {
      setToggledList(toggledList.filter(listId => listId !== id));
    } else {
      setToggledList(toggledList.concat(id));
    }
  };

  const handleSort = id => {
    setSelectedSort(id === selectedSort ? '' : id);
  };

  const handleAirline = id => {
    if (selectedAirlines.includes(id)) {
      setSelectedAirlines(selectedAirlines.filter(airline => airline !== id));
    } else {
      setSelectedAirlines(selectedAirlines.concat(id));
    }
  };

  return (
    <Wrapper>
      <ModalFilterBar modalData={modalData} />
      <Container>
        <DepartScheduleContainer>
          {isNow
            ? <DepartScheduleTitle>dsffd</DepartScheduleTitle> && (
                <DepartSchedule />
              )
            : null}
        </DepartScheduleContainer>
        <FilterTop>
          <Strong>빠른 정렬</Strong>
          <div>
            <Button>오전</Button>
            <Button>오후</Button>
            <Button>저녁</Button>
            <PriceButton>저가순</PriceButton>
          </div>
        </FilterTop>
        <AirListContainer>
          <ListContainer>
            <ListWrap>
              {toggleData.map(title => {
                const isToggled = toggledList.includes(title.id);
                return (
                  <ListBox key={title.id}>
                    <SimpleListBox>
                      <Title>{title.title}</Title>
                      <ToggleBtn onClick={() => toggleList(title.id)}>
                        <img
                          src={`/images/AirList/arrow${
                            isToggled ? 'Up' : 'Down'
                          }.png`}
                          alt="airLogo"
                        />
                      </ToggleBtn>
                    </SimpleListBox>
                    {isToggled &&
                      title.list.map(list => (
                        <HideListBox key={list.id}>
                          <Content>
                            <img src={list.link} alt="" />
                            {list.filter}
                            <Input
                              type="checkbox"
                              onChange={
                                title.title === '정렬'
                                  ? () => handleSort(list.id)
                                  : () => handleAirline(list.id)
                              }
                              name={`checkBox${list.id}`}
                              id={list.id}
                              checked={
                                title.title === '정렬'
                                  ? list.id === selectedSort
                                  : selectedAirlines.includes(list.id)
                              }
                            />
                          </Content>
                        </HideListBox>
                      ))}
                  </ListBox>
                );
              })}
              <ApllyButton onClick={() => goToTrue()}>적용</ApllyButton>
            </ListWrap>
          </ListContainer>
          <ScheduleWrap>
            <CouponBar>
              총 <span>12</span>개의 항공권 🎁 구매시 렌터카
              <span> 20% </span>
              할인 쿠폰 제공!
            </CouponBar>
            {modalData.departure_date?.length === 1
              ? ticketData &&
                ticketData.map(result => {
                  // console.log('ticketDataArr:', ticketDataArr[0]);
                  // console.log('result:', result);
                  // if (ticketDataArr[0].length === 0) return <div>zzzz</div>;
                  return (
                    <TicketCardContainer key={result.flight_id}>
                      <TicketCard>
                        <Logo>
                          <img src={result.airline_logo} alt="airLogo" />
                          <AirLine>{result.airline_name}</AirLine>
                        </Logo>
                        <AirLineNumber>{result.airplane_name}</AirLineNumber>
                        <TimeInfo>
                          <li>
                            <DepartTime>
                              {result?.departure_time?.slice(0, 5)}
                            </DepartTime>
                            <DePartLocation>
                              {result.departure_location_name}{' '}
                              {result.departure_location_code}
                            </DePartLocation>
                          </li>
                          <li>
                            <ArriveTime>
                              {result?.arrival_time?.slice(0, 5)}
                            </ArriveTime>
                            <ArriveLocation>
                              {result.arrival_location_name}{' '}
                              {result.arrival_location_code}
                            </ArriveLocation>
                          </li>
                        </TimeInfo>
                        <PriceInfoContainer>
                          <TicketTotalPrice>
                            {parseInt(result.price)}원~
                          </TicketTotalPrice>
                          <PriceInfo>
                            <SeatInfo>잔여 {result.remaining_seat}석~</SeatInfo>
                            <ToTalPrice>
                              총 {result.passenger_count}인{' '}
                              {parseInt(result.total_price)}원{' '}
                            </ToTalPrice>
                          </PriceInfo>
                        </PriceInfoContainer>
                        <ReservationButton
                          onClick={e => {
                            console.log(result);
                            navigate('/aircart', { state: { result } });
                          }}
                        >
                          예약
                        </ReservationButton>
                      </TicketCard>
                      <AirLineDetail>항공편 세부정보</AirLineDetail>
                      <PricePlusButton>가격 더 보기 </PricePlusButton>
                    </TicketCardContainer>
                  );
                })
              : null}

            {modalData.departure_date?.length === 2
              ? ticketDataArr[0] &&
                ticketDataArr[0].map(result => {
                  // console.log('ticketDataArr:', ticketDataArr[0]);
                  // console.log('result:', result);
                  // if (ticketDataArr[0].length === 0) return <div>zzzz</div>;
                  return (
                    <TicketCardContainer key={result.flight_id}>
                      <TicketCard>
                        <Logo>
                          <img src={result.airline_logo} alt="airLogo" />
                          <AirLine>{result.airline_name}</AirLine>
                        </Logo>
                        <AirLineNumber>{result.airplane_name}</AirLineNumber>
                        <TimeInfo>
                          <li>
                            <DepartTime>
                              {result?.departure_time?.slice(0, 5)}
                            </DepartTime>
                            <DePartLocation>
                              {result.departure_location_name}{' '}
                              {result.departure_location_code}
                            </DePartLocation>
                          </li>
                          <li>
                            <ArriveTime>
                              {result?.arrival_time?.slice(0, 5)}
                            </ArriveTime>
                            <ArriveLocation>
                              {result.arrival_location_name}{' '}
                              {result.arrival_location_code}
                            </ArriveLocation>
                          </li>
                        </TimeInfo>
                        <PriceInfoContainer>
                          <TicketTotalPrice>
                            {parseInt(result.price)}원~
                          </TicketTotalPrice>
                          <PriceInfo>
                            <SeatInfo>잔여 {result.remaining_seat}석~</SeatInfo>
                            <ToTalPrice>
                              총 {result.passenger_count}인{' '}
                              {parseInt(result.total_price)}원{' '}
                            </ToTalPrice>
                          </PriceInfo>
                        </PriceInfoContainer>
                        <ReservationButton
                          onClick={e => {
                            console.log(result);
                            navigate('/aircart', { state: { result } });
                          }}
                        >
                          예약
                        </ReservationButton>
                      </TicketCard>
                      <AirLineDetail>항공편 세부정보</AirLineDetail>
                      <PricePlusButton>가격 더 보기 </PricePlusButton>
                    </TicketCardContainer>
                  );
                })
              : null}
            {modalData.departure_date?.length === 2
              ? ticketDataArr[1].map(result => {
                  // console.log('ticketDataArr:', ticketDataArr[0]);
                  // console.log('result:', result);
                  // if (ticketDataArr[0].length === 0) return <div>zzzz</div>;
                  return (
                    <TicketCardContainer key={result.flight_id}>
                      <TicketCard>
                        <Logo>
                          <img src={result.airline_logo} alt="airLogo" />
                          <AirLine>{result.airline_name}</AirLine>
                        </Logo>
                        <AirLineNumber>{result.airplane_name}</AirLineNumber>
                        <TimeInfo>
                          <li>
                            <DepartTime>
                              {result?.departure_time?.slice(0, 5)}
                            </DepartTime>
                            <DePartLocation>
                              {result.departure_location_name}{' '}
                              {result.departure_location_code}
                            </DePartLocation>
                          </li>
                          <li>
                            <ArriveTime>
                              {result?.arrival_time?.slice(0, 5)}
                            </ArriveTime>
                            <ArriveLocation>
                              {result.arrival_location_name}{' '}
                              {result.arrival_location_code}
                            </ArriveLocation>
                          </li>
                        </TimeInfo>
                        <PriceInfoContainer>
                          <TicketTotalPrice>
                            {parseInt(result.price)}원~
                          </TicketTotalPrice>
                          <PriceInfo>
                            <SeatInfo>잔여 {result.remaining_seat}석~</SeatInfo>
                            <ToTalPrice>
                              총 {result.passenger_count}인{' '}
                              {parseInt(result.total_price)}원{' '}
                            </ToTalPrice>
                          </PriceInfo>
                        </PriceInfoContainer>
                        <ReservationButton
                          onClick={e => {
                            console.log(result);
                            navigate('/aircart', { state: { result } });
                          }}
                        >
                          예약
                        </ReservationButton>
                      </TicketCard>
                      <AirLineDetail>항공편 세부정보</AirLineDetail>
                      <PricePlusButton>가격 더 보기 </PricePlusButton>
                    </TicketCardContainer>
                  );
                })
              : null}
          </ScheduleWrap>
        </AirListContainer>
      </Container>
    </Wrapper>
  );
};
export default AirList;
const Wrapper = styled.div`
  height: 2200px;
  margin: 0;
  padding-top: 25px;
  background-color: #f8f8f8;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 1136px;
  height: auto;
`;

const DepartScheduleContainer = styled.div``;

const DepartScheduleTitle = styled.span`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #606060;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
`;
const DepartSchedule = styled.div`
  position: relative;
  margin-bottom: 32px;
  padding: 28px 0 25px 23px;
  border: 1px solid #fff;
  border-radius: 16px;
  background: #fff;
`;

const FilterTop = styled.div`
  position: relative;
  display: flex;
  height: 64px;
  background-color: #fff;
  border-radius: 16px;
  div {
    display: flex;
    margin-left: 620px;
    width: 500px;
    height: 70px;
  }
`;

const Strong = styled.span`
  padding: 14px 20px 14px 24px;
  width: 300px;
  line-height: 36px;
  vertical-align: top;
  font-weight: 700;
`;

const Button = styled.button`
  margin-top: 14px;
  margin-left: 8px;
  width: 56px;
  height: 36px;
  background-color: #ffffff;
  border: 1px solid #cde0ff;
  border-radius: 8px;
  text-align: center;
  line-height: 34px;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`;

const PriceButton = styled.button`
  position: relative;
  width: 80px;
  height: 36px;
  margin-top: 14px;
  margin-left: 18px;
  display: block;
  line-height: 34px;
  border: 1px solid #cde0ff;
  border-radius: 8px;
  background-color: #fff;
  font-weight: 600;
  color: gray;
  text-align: center;
  cursor: pointer;
`;

const AirListContainer = styled.div`
  position: relative;
  padding-left: 288px;
  margin: 36px 0 0 0;
`;

const ApllyButton = styled.button`
  display: block;
  width: 100%;
  min-width: 224px;
  height: 56px;
  margin-top: 15px;
  padding: 0 24px;
  background: #569aff;
  color: #fff;
  border-radius: 12px;
  border: none;
  line-height: 56px;
  box-shadow: 0 8px 16px 0 rgb(32 32 32 / 16%);
  font-size: 18px;
  font-weight: 700;
`;

const ListWrap = styled.div`
  width: 272px;
  height: calc(100vh - 485px);
  margin: 0 0 0 -288px;
  border-radius: 13px;
`;

const ListContainer = styled.div`
  width: 273px;
  height: 435px;
`;

const ToggleBtn = styled.button`
  position: absolute;
  width: 25px;
  height: 18px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  top: 20px;
  left: 230px;
  img {
    width: 15px;
    height: 15px;
  }
`;
const ListBox = styled.li`
  position: relative;
  margin-top: -20px;
`;

const SimpleListBox = styled.div`
  width: 272px;
  height: 66px;
  left: 50%;
  line-height: 56px;
  border-radius: 13px;
  box-sizing: border-box;
  background-color: #fff;
  font-weight: 700;
`;

const Title = styled.p`
  padding-left: 24px;
  width: 100%;
  margin-top: 10px;
  font-weight: 700;
`;
const HideListBox = styled.div`
  position: relative;
  width: 100%;
  top: 5px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: white;
`;
const Content = styled.div`
  width: 100%;
  margin-top: -10px;
  padding-top: 10px;
  padding-left: 24px;
  padding-bottom: 15px;
  color: gray;
  font-weight: 400;
  font-size: 14px;
  img {
    float: left;
    width: 22px;
    margin-right: 10px;
    vertical-align: -5px;
  }
`;

const Input = styled.input`
  position: absolute;
  right: 22px;
`;

const ScheduleWrap = styled.ul`
  position: absolute;
  float: left;
  top: 0px;
  width: 850px;
  min-height: calc(100vh - 709px);
`;
const CouponBar = styled.div`
  padding: 16px 24px;
  color: gray;
  border-radius: 16px;
  background-color: #fff;
  span {
    color: #63a1ff;
    font-weight: 400;
  }
`;

const TicketCardContainer = styled.li`
  position: relative;
  margin-top: 12px;
  padding: 20px 24px 12px 24px;
  overflow: hidden;
  border-radius: 16px;
  background: #fff;
`;

const TicketCard = styled.div`
  position: relative;
  padding-right: 104px;
  padding-bottom: 10px;
  height: 67px;
  border-bottom: 1px dashed #eaeaea;
  vertical-align: top;
  img {
    float: left;
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }
`;

const Logo = styled.div`
  width: 244px;
`;

const AirLine = styled.p`
  display: inline-block;
  padding-left: 4px;
  font-weight: 700;
  vertical-align: top;
  color: black;
  font-size: 18px;
`;
const AirLineNumber = styled.p`
  position: absolute;
  display: inline-block;
  margin-top: 5px;
  top: 28px;
  left: 5px;
  color: gray;
  font-size: 14px;
  font-weight: 600;
`;

const TimeInfo = styled.ul`
  position: absolute;
  display: inline-block;
  width: 170px;
  top: -1px;
  margin-left: 200px;
  li {
    margin-bottom: 10px;
  }
`;

const DepartTime = styled.p`
  display: inline-block;
  margin-right: 6px;
  min-width: 52px;
  font-size: 18px;
  font-weight: 700;
`;

const DePartLocation = styled.p`
  display: inline-block;
  color: gray;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
`;
const ArriveTime = styled.p`
  display: inline-block;
  min-width: 52px;
  margin-right: 6px;
  font-size: 18px;
  font-weight: 700;
`;

const ArriveLocation = styled.p`
  display: inline-block;
  color: gray;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
`;

const PriceInfoContainer = styled.div`
  float: right;
  /* display: block; */
  width: 255px;
  text-align: right;
`;

const TicketTotalPrice = styled.p`
  display: flex;
  margin-top: -17px;
  margin-left: 170px;
  margin-bottom: 13px;
  font-size: 18px;
  font-weight: 700;
`;

const PriceInfo = styled.div`
  float: right;
  width: 255px;
  text-align: right;
  vertical-align: top;
`;

const SeatInfo = styled.p`
  display: inline-block;
  font-size: 14px;
  color: gray;
`;

const ToTalPrice = styled.p`
  position: relative;
  display: inline-block;
  margin-left: 7px;
  padding: 0 0 0 9px;
  font-size: 14px;
  color: gray;
`;

const ReservationButton = styled.button`
  position: absolute;
  display: inline-block;
  margin-top: 5px;
  top: 0;
  right: 0;
  width: 88px;
  height: 48px;
  padding: 0 24px;
  color: #63a1ff;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  line-height: 43px;
  background: #e6effe;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;

const AirLineDetail = styled.p`
  position: absolute;
  display: block;
  top: 97px;
  right: 147px;
  height: 31px;
  margin-top: 0;
  text-align: right;
  font-size: 12px;
  text-decoration: underline;
`;

const PricePlusButton = styled.p`
  display: inline-block;
  top: -1px;
  width: auto;
  height: 30px;
  padding-right: 5px;
  font-size: 14px;
  line-height: 30px;
  float: right;
`;
