import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { setBorder } from '../../styles/common';

const LeftCont = () => {
  return (
    <LeftContWrap>
      <TitleSearch>지도로 검색</TitleSearch>
      <TitleInfo>여행일정</TitleInfo>
      <SearchCondListUl>
        <SearchCondListLi>
          <StartTit>출발</StartTit>
          <QuickSearch>
            <FlightPanel>
              <StartArea>서울 SEL</StartArea>
              <StartArea>모든 지역</StartArea>
              <InfoDateList>
                <InfoData>탑승일정</InfoData>
                <InfoWrap>
                  <InfoInput type="text" placeholder="탑승일을 선택해주세요" />
                </InfoWrap>
                <InfoData>출발요일</InfoData>
                <InfoWrap>
                  <InfoInput
                    type="text"
                    placeholder="탑승요일을 선택해주세요"
                  />
                  <ListType>! 요일은 1개 이상 선택할 수 있어요</ListType>
                </InfoWrap>
                <InfoWeekWrap>
                  {WEEK_DATA.map(weekData => {
                    return (
                      <InfoWeekBtn
                        key={weekData.id}
                        type="text"
                        placeholder={weekData.name}
                      />
                    );
                  })}
                </InfoWeekWrap>
              </InfoDateList>
              <Link to="/">
                <InfoNextBtn type="button">홈으로</InfoNextBtn>
              </Link>
            </FlightPanel>
          </QuickSearch>
        </SearchCondListLi>
      </SearchCondListUl>
    </LeftContWrap>
  );
};

export default LeftCont;

const LeftContWrap = styled.div`
  width: 500px;
  padding: 32px 24px;
`;

const TitleSearch = styled.h2`
  margin-bottom: 56px;
  font-size: 2rem;
  line-height: 1.3;
  font-family: NanumSquareR;
  font-weight: 900;
  color: #202020;
`;

const TitleInfo = styled.h3`
  margin-bottom: 16px;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
  color: #202020;
`;

const SearchCondListUl = styled.ul`
  margin-top: 16px;
`;

const SearchCondListLi = styled.li`
  margin-top: 16px;
`;

const StartTit = styled.p`
  margin-bottom: 12px;
  color: #404040;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
`;

const QuickSearch = styled.div`
  width: auto;
`;

const FlightPanel = styled.ul`
  height: auto;
  background: none;
`;

const StartArea = styled.li`
  ${setBorder('1px solid #eaeaea;')};
  height: 56px;
  line-height: 56px;
  text-align: left;
  background-color: white;
  position: relative;
  padding: 0 15px;
  margin-bottom: 5px;
`;

const InfoDateList = styled.li`
  margin-top: 32px;
`;

const InfoData = styled.label`
  margin-bottom: 12px;
  color: #404040;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
  display: block;
  margin-top: 32px;
`;

const InfoWrap = styled.div`
  margin-top: 10px;
`;

const InfoInput = styled.input`
  display: inline-block;
  min-width: 55px;
  height: 48px;
  padding: 0 15px;
  color: #606060;
  line-height: 48px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  background: #fff;
  width: 100%;
`;

const ListType = styled.p`
  margin-top: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: gray;
  line-height: 1.5;
`;

const InfoWeekWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.1em;
`;

const InfoWeekBtn = styled.input`
  min-width: 55px;
  width: 24.6%;
  height: 48px;
  padding: 0 15px;
  color: #63a1ff;
  line-height: 48px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  border-color: #cde0ff;
  background-color: #f4f9ff;
  text-align: center;
`;

const InfoNextBtn = styled.button`
  margin-top: 50px;
  margin-left: 38%;
  min-width: 55px;
  width: 24.6%;
  height: 48px;
  padding: 0 15px;
  color: #63a1ff;
  line-height: 48px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  border-color: #cde0ff;
  background-color: #f4f9ff;
  text-align: center;
  font-weight: 900;
  &:hover {
    background-color: #63a1ff;
    color: #ffffff;
    font-weight: 800;
  }
`;

const WEEK_DATA = [
  {
    id: 1,
    name: '전체',
  },
  {
    id: 2,
    name: '월요일',
  },
  {
    id: 3,
    name: '화요일',
  },
  {
    id: 4,
    name: '수요일',
  },
  {
    id: 5,
    name: '목요일',
  },
  {
    id: 6,
    name: '금요일',
  },
  {
    id: 7,
    name: '토요일',
  },
  {
    id: 8,
    name: '일요일',
  },
];
