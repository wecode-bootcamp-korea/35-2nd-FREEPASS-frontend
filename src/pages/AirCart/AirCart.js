import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AirCartTicket from './AirCartTicket';
import { AIR_TIKET_RES_USER_DATA } from './AirCartData';
import { RetweetOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const AirCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [bookData, setBookData] = useState({
    booker_name: '',
    booker_phone_number: '',
    booker_email: '',
  });
  const [passengerData, setPassengerData] = useState([]);

  const navigate = useNavigate();
  // const navigateState = useNavigate().state;
  // console.log('navigateState:', navigateState);
  const { state } = useLocation();
  console.log('navigateState:', state.result);

  useEffect(() => {
    // fetch('/data/aircartdata/airCartData.json')
    //   .then(res => res.json())
    //   .then(data => {
    setUserData(state.result);
    // });
  }, []);

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
  } = userData;

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { booker_name, booker_phone_number, booker_email } = bookData;

  const PassengerDataArr = [];

  Object.values(passengerData).map(object =>
    PassengerDataArr.push({
      first_name: object.first_name,
      last_name: object.last_name,
      gender: object.gender,
      birthday: object.birthday,
    })
  );

  const postUserData = e => {
    alert(
      `
      예약자 정보
      성함 : ${booker_name},
      핸드폰 번호 : ${booker_phone_number},
      이메일 : ${booker_email}

      탑승객 정보
      예약자 : ${passengerData[0].first_name}${passengerData[0].last_name}님
      생년월일 : ${passengerData[0].birthday}
      성별 : ${passengerData[0].gender}
      국적 : ${passengerData[0].country}
      예약해주셨습니다.
      `
    );

    navigate('/');
    scrollUp();

    // fetch(`data/data/data`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     booker_name: booker_name,
    //     booker_phone_number: booker_phone_number,
    //     booker_email: booker_email,
    //     passengers: passengerData,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.access_token) {
    //       navigate('/');
    //     }
    //   });
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  // 확인을 위해 남겨둡니다.
  // console.log(bookData);
  // console.log(passengerData);

  if (userData.length === 0) return <div>로딩중입니다.</div>;

  const { originResults, destinationResults } = userData;

  return (
    <CartContainer>
      <Contents>
        <TitleDep2>선택한 항공편 확인</TitleDep2>
        <SelectFlightWrap>
          <FlightInner>
            <TicketBox>
              <TitAirSelect>
                <DepTitle>{}</DepTitle>
                <RetweetOutlined />
                <ArrTitle>{} 항공편</ArrTitle>
              </TitAirSelect>
              <FlightListUl>
                <AirCartTicket tiketData={state.result} />
                {/* <AirCartTicket tiketData={destinationResults} /> */}
              </FlightListUl>
            </TicketBox>
            <TiketBoxRes>
              <ResSelect>예약자 정보</ResSelect>
              <ResListUl>
                {AIR_TIKET_RES_USER_DATA.map(data => {
                  return (
                    <ResListLi key={data.id}>
                      <ResName onChange={handleInput}>
                        <ResNameLabel>{data.title}</ResNameLabel>
                        <ResNameWarp>
                          <ResNameInput
                            name={data.name}
                            type={data.type}
                            placeholder={data.placeholder}
                          />
                          <ResNameButton type="button">삭제</ResNameButton>
                          <ResTxtInfo>{data.info}</ResTxtInfo>
                        </ResNameWarp>
                      </ResName>
                    </ResListLi>
                  );
                })}
              </ResListUl>
            </TiketBoxRes>
            <Passenger>
              <PassengerInfo>
                <PassengerTit>탑승객 정보</PassengerTit>
                <PassengerSummon>탑승객 정보 불러오기</PassengerSummon>
              </PassengerInfo>
              <TabContent>
                <TabUl>
                  <TabLi>
                    {[...Array(state.result.passenger_count)].map((n, idx) => {
                      const handlePassengerData = e => {
                        const { name, value } = e.target;
                        setPassengerData({
                          ...passengerData,
                          [idx]: { ...passengerData[idx], [name]: value },
                        });
                      };
                      return (
                        <TabContentAdult
                          key={idx}
                          onChange={handlePassengerData}
                        >
                          <TabContentUserTit>성인 {idx + 1}</TabContentUserTit>
                          <TabContentUl>
                            <TabPassengeLi>
                              <TabPassengeFrm>
                                <TabPassengeNameLabel>
                                  탑승객 성명
                                </TabPassengeNameLabel>
                                <TabPassengeNameWrap>
                                  <ResFirstNameInput
                                    type="text"
                                    name="first_name"
                                    placeholder="한글 성 (예:김)"
                                  />
                                  <ResLastNameInput
                                    type="text"
                                    name="last_name"
                                    placeholder="한글 이름 (예:제주)"
                                  />
                                </TabPassengeNameWrap>
                              </TabPassengeFrm>
                            </TabPassengeLi>
                            <TabPassengeLi>
                              <TabPassengeFrm>
                                <TabPassengeBirthLabel>
                                  생년월일
                                </TabPassengeBirthLabel>
                                <TabPassengeBirthInput
                                  name="birthday"
                                  type="date"
                                  placeholder="YYYY-MM-DD"
                                />
                                <TabPassengeSexWrap>
                                  <TabPassengeSexLabel>
                                    성별
                                  </TabPassengeSexLabel>
                                  <TabPassengeSexBox>
                                    <TabPassengeSexMaleLabel>
                                      남성
                                    </TabPassengeSexMaleLabel>
                                    <TabPassengeSexMale
                                      type="radio"
                                      name="gender"
                                      value="male"
                                    />
                                    <TabPassengeSexWomanabel>
                                      여성
                                    </TabPassengeSexWomanabel>
                                    <TabPassengeWoman
                                      type="radio"
                                      name="gender"
                                      value="female"
                                    />
                                  </TabPassengeSexBox>
                                </TabPassengeSexWrap>
                              </TabPassengeFrm>
                            </TabPassengeLi>
                            <TabPassengeLi>
                              <TabPassengeFrm>
                                <TabPassengeNation>국적</TabPassengeNation>
                                <TabPassengeNationWrap>
                                  <TabPassengeNationInput
                                    name="country"
                                    type="text"
                                    placeholder="대한민국"
                                  />
                                </TabPassengeNationWrap>
                              </TabPassengeFrm>
                            </TabPassengeLi>
                          </TabContentUl>
                        </TabContentAdult>
                      );
                    })}
                  </TabLi>
                </TabUl>
              </TabContent>
            </Passenger>
          </FlightInner>
          <PaymentBox>
            <PaymentInfo>
              <PaymentTit>결제정보</PaymentTit>
              <PaymentSide>
                <PaymentSideDep>가는편 요금</PaymentSideDep>
                <PaymentSideDepAmount>
                  {total_price.toLocaleString('ko-KR')}원
                </PaymentSideDepAmount>
              </PaymentSide>
              <PaymentSide>
                <PaymentSideArr>오는편 요금</PaymentSideArr>
                <PaymentSideArrAmount>
                  {total_price ? '0' : total_price}원
                </PaymentSideArrAmount>
              </PaymentSide>
              <PaymentSide>
                <PaymentSideSumTit>결제금액</PaymentSideSumTit>
                <PaymentSideAmount>
                  {total_price.toLocaleString('ko-KR')}원
                </PaymentSideAmount>
              </PaymentSide>
              <PaymentGuide>
                <TitGuide>바로 결제해야 예약 확정</TitGuide>
                <TitGuideInfo>
                  시간이 경과될 경우 좌석이 매진되거나 요금이 변동될 수
                  있습니다.
                  <br />
                  예약당시 금액과 결제 시 금액이 상이 할 수 있으며, 최종 금액은
                  결제 페이지에서 확인하실 수 있습니다.
                </TitGuideInfo>
                <TitBtnArea>
                  <AvailDetail>비행상세</AvailDetail>
                  <AvailPrice>상세요금 보기</AvailPrice>
                </TitBtnArea>
              </PaymentGuide>
            </PaymentInfo>
            <PaymentBtns onClick={postUserData}>예 약</PaymentBtns>
          </PaymentBox>
        </SelectFlightWrap>
      </Contents>
      {/* 모달영역 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={postUserData}
        contentLabel="My dialog"
      >
        <div>항공권 예매가 완료되었습니다.</div>
        <>---------</>
        <div>예약자 정보</div>
        <div>성함 : {booker_name}</div>
        <div>핸드폰 번호 : {booker_phone_number}</div>
        <div>이메일 : {booker_email}</div>
        <div>탑승객 정보</div>
        <>---------</>
        {/* <div>예약자 : {passengerData[0].first_name}</div> */}
        {/* <div>생년월일 : {passengerData[0].first_birthday}</div> */}
        {/* <div>성별 : {passengerData[0].first_gender}</div> */}
        {/* <div>국적 : {passengerData[0].country}</div> */}
        <button onClick={postUserData}>PREEPASS 메인</button>
      </Modal>
      {/* 모달영역 */}
    </CartContainer>
  );
};

export default AirCart;

const CartContainer = styled.div`
  padding-top: 104px;
  padding-bottom: 164px;
  text-align: center;
  background-color: #f7f7f7;
`;

const Contents = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 64px;
  text-align: left;
`;

const TitleDep2 = styled.h2`
  margin-bottom: 32px;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 900;
`;

const SelectFlightWrap = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 711px;
`;

const FlightInner = styled.div`
  min-height: 711px;
`;

const TicketBox = styled.div`
  padding: 32px;
  border-radius: 16px;
  background: #fff;
`;
const TiketBoxRes = styled.div`
  margin-top: 24px;
  padding: 32px;
  border-radius: 16px;
  background: #fff;
`;

const ResSelect = styled.h3`
  padding-bottom: 16px;
  border-bottom: 1px dashed #eaeaea;
  color: #202020;
  font-size: 30px;
  font-weight: 900;
  line-height: 1.2;
`;

const ResListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0 0 0;
`;

const ResListLi = styled.li`
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
  vertical-align: top;
`;

const ResName = styled.form`
  display: flex;
`;

const ResNameLabel = styled.label`
  flex: 0 0 112px;
  color: #404040;
  font-size: 18px;
  font-weight: 600;
  line-height: 48px;
  cursor: pointer;
`;

const ResNameWarp = styled.div`
  position: relative;
  width: 100%;
`;

const ResNameInput = styled.input`
  &::placeholder {
    color: #cecece;
    font-weight: 400;
  }
  width: 100%;
  display: block;
  padding-right: 50px;
  min-width: 55px;
  height: 48px;
  padding: 0 15px;
  color: #606060;
  font-size: inherit;
  font-family: inherit;
  line-height: 48px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  background: #fff;
`;

const ResNameButton = styled.button`
  position: absolute;
  display: inline-block;
  top: 1px;
  right: 1px;
  width: 46px;
  height: 46px;
  border: none;
  background: quotes;
  cursor: pointer;
`;

const ResTxtInfo = styled.p`
  margin-top: 6px;
  color: gray;
  font-size: 14px;
  line-height: 1.5;
`;

const TitAirSelect = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px dashed #eaeaea;
  color: #202020;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.2;
`;

const DepTitle = styled.span`
  margin-right: 10px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #eaeaea;
  color: #202020;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.2;
`;

const ArrTitle = styled.span`
  margin-left: 10px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #eaeaea;
  color: #202020;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.2;
`;

const FlightListUl = styled.ul`
  margin-top: 24px;
`;

const Passenger = styled.div`
  margin-top: 16px;
  padding: 32px;
  border-radius: 16px;
  background: #fff;
`;

const PassengerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed #eaeaea;
`;

const PassengerTit = styled.h3`
  padding-bottom: 16px;
  color: #202020;
  font-size: 28px;
  font-weight: 900;
  line-height: 1.2;
`;

const PassengerSummon = styled.a`
  padding-bottom: 16px;
  color: #202020;
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
`;

const TabContent = styled.div`
  width: 100%;
  height: 100%;
`;

const TabUl = styled.ul`
  display: flex;
`;

const TabLi = styled.li`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 48px;
  color: black;
`;

const PaymentBox = styled.div`
  position: sticky;
  top: 50px;
  height: calc(100vh - 266px);
  min-height: 453px;
  width: 310px;
  margin-left: 30px;
`;

const PaymentInfo = styled.div`
  padding: 32px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgb(32 32 32 / 8%);
  border: 1px solid #abccff;
  margin-bottom: 16px;
`;

const PaymentTit = styled.h3`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #eaeaea;
  font-size: 20px;
  font-weight: 600;
`;

const PaymentSide = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  line-height: 10px;
`;

const PaymentSideDep = styled.p`
  color: #202020;
  font-weight: 600;
`;

const PaymentSideDepAmount = styled.p`
  color: #202020;
  font-size: 18px;
  font-weight: 700;
`;

const PaymentSideArr = styled.p`
  color: #202020;
  font-weight: 600;
`;
const PaymentSideArrAmount = styled.p`
  color: #202020;
  font-size: 18px;
  font-weight: 700;
`;

const PaymentSideSumTit = styled.p`
  color: #202020;
  font-size: 19px;
  font-weight: 800;
`;

const PaymentSideAmount = styled.p`
  color: #63a1ff;
  font-size: 19px;
  font-weight: 800;
`;

const PaymentGuide = styled.div`
  margin-top: 22px;
  background: none;
  padding: 30px 0 0 0;
  border-top: 1px dashed #eaeaea;
`;

const TitGuide = styled.h4`
  color: #202020;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const TitGuideInfo = styled.p`
  color: #606060;
  font-size: 14px;
  line-height: 18px;
`;

const TitBtnArea = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 0;
`;

const AvailDetail = styled.button`
  &:hover {
    color: #fff;
    background: #569aff;
  }
  display: block;
  width: 100%;
  min-width: 88px;
  height: 48px;
  padding: 0 24px;
  color: #404040;
  border: 1px solid #aeaeae;
  background: #fff;
  font-size: 16px;
  border-radius: 8px;
  line-height: 48px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const AvailPrice = styled.button`
  &:hover {
    color: #fff;
    background: #569aff;
  }
  display: block;
  width: 100%;
  min-width: 88px;
  height: 48px;
  margin-top: 8px;
  padding: 0 24px;
  color: #404040;
  border: 1px solid #aeaeae;
  background: #fff;
  font-size: 16px;
  border-radius: 8px;
  line-height: 48px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const PaymentBtns = styled.button`
  display: block;
  width: 100%;
  color: #fff;
  background: #569aff;
  min-width: 224px;
  height: 56px;
  padding: 0 24px;
  font-size: 20px;
  border-radius: 12px;
  line-height: 56px;
  font-weight: 600;
  text-align: center;
  border: none;
  box-shadow: 0 8px 16px 0rgba (32, 32, 32, 0.16);
  cursor: pointer;
`;

const TabContentAdult = styled.form`
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
  vertical-align: top;
`;

const TabContentUserTit = styled.p`
  font-size: 20px;
  font-weight: 900;
`;

const TabContentUl = styled.ul`
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
  vertical-align: top;
`;

const TabPassengeLi = styled.li`
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
  vertical-align: top;
`;

const TabPassengeFrm = styled.div`
  display: flex;
`;

const TabPassengeNameLabel = styled.label`
  flex: 0 0 112px;
  color: #404040;
  font-size: 18px;
  font-weight: 600;
  line-height: 48px;
  cursor: pointer;
`;

const TabPassengeNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ResFirstNameInput = styled.input`
  &::placeholder {
    color: #cecece;
    font-weight: 400;
  }
  width: 49%;
  display: block;
  padding-right: 50px;
  min-width: 55px;
  height: 48px;
  padding: 0 15px;
  color: #606060;
  font-size: inherit;
  font-family: inherit;
  line-height: 48px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  background: #fff;
`;

const ResLastNameInput = styled.input`
  &::placeholder {
    color: #cecece;
    font-weight: 400;
  }
  width: 49%;
  display: block;
  padding-right: 50px;
  min-width: 55px;
  height: 48px;
  padding: 0 15px;
  color: #606060;
  font-size: inherit;
  font-family: inherit;
  line-height: 48px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  background: #fff;
`;

const TabPassengeBirthLabel = styled.label`
  flex: 0 0 112px;
  color: #404040;
  font-size: 18px;
  font-weight: 600;
  line-height: 48px;
`;

const TabPassengeBirthInput = styled.input`
  &::placeholder {
    color: #cecece;
    font-weight: 400;
  }
  width: 60%;
  display: block;
  padding-right: 50px;
  min-width: 55px;
  height: 48px;
  padding: 0 15px;
  color: #606060;
  font-size: inherit;
  font-family: inherit;
  line-height: 48px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  background: #fff;
`;

const TabPassengeSexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TabPassengeSexLabel = styled.label`
  margin-left: 50px;
  color: #404040;
  font-size: 18px;
  font-weight: 600;
  line-height: 48px;
`;

const TabPassengeSexBox = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;

const TabPassengeSexMaleLabel = styled.label`
  margin-right: 10px;
  color: #404040;
  font-size: 16px;
  font-weight: 600;
  line-height: 48px;
`;

const TabPassengeSexMale = styled.input`
  width: 16px;
  height: 16px;
  display: block;
  margin-right: 40px;
  border: 1px solid #eaeaea;
  font-size: 16px;
  font-weight: 600;
  color: #63a1ff;
  border-color: #cde0ff;
  background-color: #f4f9ff;
  cursor: pointer;
`;
const TabPassengeSexWomanabel = styled.label`
  margin-right: 10px;
  color: #404040;
  font-size: 16px;
  font-weight: 600;
  line-height: 48px;
`;

const TabPassengeWoman = styled.input`
  width: 16px;
  height: 16px;
  display: block;
  border: 1px solid #eaeaea;
  font-size: 16px;
  font-weight: 600;
  color: black;
  background-color: #ffffff;
  cursor: pointer;
`;

const TabPassengeNation = styled.label`
  flex: 0 0 112px;
  color: #404040;
  font-size: 18px;
  font-weight: 600;
  line-height: 48px;
  cursor: pointer;
`;

const TabPassengeNationWrap = styled.div`
  width: 100%;
`;

const TabPassengeNationInput = styled.input`
  &::placeholder {
    color: #cecece;
    font-weight: 400;
  }
  width: 100%;
  display: block;
  padding: 0 15px;
  color: #606060;
  line-height: 48px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  background: #fff;
`;
