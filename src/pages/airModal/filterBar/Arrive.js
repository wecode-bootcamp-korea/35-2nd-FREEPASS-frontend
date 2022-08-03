import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import CitySearchList from './CitySearchList';
import { BASE_URL } from '../../../config';

const Arrive = ({ data, cityData, name, clickImgDiv, clickCity }) => {
  const [cityInput, setCityInput] = useState('');
  const [cityMockData, setCityMockData] = useState([]);

  //`${BASE_URL}/flights/locations`
  //data/CITY_API.json
  useEffect(() => {
    fetch(`${BASE_URL}/flights/locations`)
      .then(res => res.json())
      .then(data => {
        setCityMockData(() => data.result);
      });
  }, []);

  const changeCityData = e => {
    setCityInput(() => e.target.value);
  };

  const isData = cityMockData.length !== 0;
  if (!isData) return <div>로딩중입니다.</div>;

  const sortedCities = cityMockData.filter(data => {
    return data.city_name.includes(cityInput);
  });

  return (
    <ArriveDiv>
      <RightDiv>
        <p>{data}를</p>
        <p>선택해주세요.</p>
      </RightDiv>
      <CenterDiv>
        <SearchInput changeCityData={changeCityData} />
        <CitySearchList
          name={name}
          clickCity={clickCity}
          cityMockData={sortedCities}
        />
      </CenterDiv>
      <LeftDiv>
        <Text>국내</Text>
        <CityList>
          {cityData.map(data => {
            return (
              <ImgDiv key={data.id}>
                <img
                  name={name}
                  src={data.img}
                  alt={data.city_name_ko}
                  onClick={e => {
                    clickImgDiv(e, data.city_name_ko);
                  }}
                />
                <p>{data.city_name_ko}</p>
              </ImgDiv>
            );
          })}
        </CityList>
      </LeftDiv>
    </ArriveDiv>
  );
};

const ArriveDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 430px;
  background-color: #fff;
`;

const RightDiv = styled.div`
  width: 260px;
  height: 100%;
  background-color: #fff;
  padding-top: 48px;
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
  background-color: #fff;
  border-left: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
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
  font-size: 20px;
  font-weight: bold;
`;

const CityList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImgDiv = styled.div`
  text-align: center;
  img {
    border-radius: 50%;
    margin: 8px;
    width: 70px;
    height: 70px;
  }
  p {
    padding-top: 5px;
    font-size: 13px;
    font-weight: 400;
    opacity: 0.65;
  }
`;

export default Arrive;
